import { Circle, Coordinates, labelPi, LaTeX, Line, Mafs, Plot, Point, Transform, useStopwatch, vec, Vector } from "mafs";
import { Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { color } from "../../utilities/colors";
import { lineLabel } from "../../utilities/lines";
import { Angle } from "./Angle";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Pills } from "./controlPanel/Pills";
import { SliderInput } from "./controlPanel/SliderInput";
import { HeaderRow } from "./controlPanel/HeaderRow";

interface DoublePendulumConstants {
    l1: number; // length of upper pendulum
    l2: number; // length of lower pendulum
    m1: number; // mass of upper bob
    m2: number; // mass of lower bob
    g: number; // gravitational acceleration
}

interface DoublePendulumState {
    theta1: number; // angle of upper pendulum (radians from vertical)
    theta1_dot: number; // angular velocity of upper pendulum (rad/s)
    theta2: number; // angle of lower pendulum (radians from vertical)
    theta2_dot: number; // angular velocity of lower pendulum (rad/s)
}

interface DoublePendulumDerivativeState {
    theta1_dot: number;
    theta1_ddot: number;
    theta2_dot: number;
    theta2_ddot: number;
}

type StateQueue = DoublePendulumState[];
type ConfigurationSpacePairs = "theta1|theta2" | "theta1|theta1_dot" | "theta2|theta2_dot";

function getDoublePendulumDerivatives(state: DoublePendulumState, constants: DoublePendulumConstants): DoublePendulumDerivativeState {
    const { theta1, theta1_dot, theta2, theta2_dot } = state;
    const { l1, l2, m1, m2, g } = constants;

    const cos_d_theta = Math.cos(theta1 - theta2);
    const sin_d_theta = Math.sin(theta1 - theta2);

    const denominator = 2 * m1 + m2 - m2 * cos_d_theta * cos_d_theta;

    const theta1_ddot =
        (-g * (2 * m1 + m2) * Math.sin(theta1) -
            m2 * g * Math.sin(theta1 - 2 * theta2) -
            2 * sin_d_theta * m2 * (theta2_dot * theta2_dot * l2 + theta1_dot * theta1_dot * l1 * cos_d_theta)) /
        (l1 * denominator);

    const theta2_ddot =
        (2 *
            sin_d_theta *
            (theta1_dot * theta1_dot * l1 * (m1 + m2) + g * (m1 + m2) * Math.cos(theta1) + theta2_dot * theta2_dot * l2 * m2 * cos_d_theta)) /
        (l2 * denominator);

    return {
        theta1_dot: state.theta1_dot,
        theta1_ddot: theta1_ddot,
        theta2_dot: state.theta2_dot,
        theta2_ddot: theta2_ddot,
    };
}

function rk4Step(currentState: DoublePendulumState, constants: DoublePendulumConstants, dt: number): DoublePendulumState {
    const k1 = getDoublePendulumDerivatives(currentState, constants);
    const state2 = {
        theta1: currentState.theta1 + (k1.theta1_dot * dt) / 2,
        theta1_dot: currentState.theta1_dot + (k1.theta1_ddot * dt) / 2,
        theta2: currentState.theta2 + (k1.theta2_dot * dt) / 2,
        theta2_dot: currentState.theta2_dot + (k1.theta2_ddot * dt) / 2,
    };
    const k2 = getDoublePendulumDerivatives(state2, constants);
    const state3 = {
        theta1: currentState.theta1 + (k2.theta1_dot * dt) / 2,
        theta1_dot: currentState.theta1_dot + (k2.theta1_ddot * dt) / 2,
        theta2: currentState.theta2 + (k2.theta2_dot * dt) / 2,
        theta2_dot: currentState.theta2_dot + (k2.theta2_ddot * dt) / 2,
    };
    const k3 = getDoublePendulumDerivatives(state3, constants);
    const state4 = {
        theta1: currentState.theta1 + k3.theta1_dot * dt,
        theta1_dot: currentState.theta1_dot + k3.theta1_ddot * dt,
        theta2: currentState.theta2 + k3.theta2_dot * dt,
        theta2_dot: currentState.theta2_dot + k3.theta2_ddot * dt,
    };
    const k4 = getDoublePendulumDerivatives(state4, constants);

    return {
        theta1: currentState.theta1 + (dt / 6) * (k1.theta1_dot + 2 * k2.theta1_dot + 2 * k3.theta1_dot + k4.theta1_dot),
        theta1_dot: currentState.theta1_dot + (dt / 6) * (k1.theta1_ddot + 2 * k2.theta1_ddot + 2 * k3.theta1_ddot + k4.theta1_ddot),
        theta2: currentState.theta2 + (dt / 6) * (k1.theta2_dot + 2 * k2.theta2_dot + 2 * k3.theta2_dot + k4.theta2_dot),
        theta2_dot: currentState.theta2_dot + (dt / 6) * (k1.theta2_ddot + 2 * k2.theta2_ddot + 2 * k3.theta2_ddot + k4.theta2_ddot),
    };
}

function getConfigurationSpacePoint(state: DoublePendulumState, pairs: ConfigurationSpacePairs): vec.Vector2 {
    switch (pairs) {
        case "theta1|theta2":
            return [state.theta1, state.theta2];
        case "theta1|theta1_dot":
            return [state.theta1, state.theta1_dot];
        case "theta2|theta2_dot":
            return [state.theta2, state.theta2_dot];
    }
}

function getConfigurationSpaceVelocity(
    state: DoublePendulumState,
    derivativeState: DoublePendulumDerivativeState,
    pairs: ConfigurationSpacePairs,
): vec.Vector2 {
    switch (pairs) {
        case "theta1|theta2":
            return [derivativeState.theta1_dot, derivativeState.theta2_dot];
        case "theta1|theta1_dot":
            return [derivativeState.theta1_dot, derivativeState.theta1_ddot];
        case "theta2|theta2_dot":
            return [derivativeState.theta2_dot, derivativeState.theta2_ddot];
    }
}

export function DoublePendulumVisualizer(_props: DoublePendulumVisualizer.Props) {
    const { showConfigurationSpace, initialState, constants, dt, scale } = { ...DoublePendulumVisualizer.DEFAULT_PROPS, ..._props };

    const [hasStarted, setHasStarted] = useState(false);
    const [iterationIdx, setIterationIdx] = useState(0);

    function startStop() {
        setHasStarted(!hasStarted);
    }

    const [state, setState] = useState(initialState);
    /**
     * `updatedState` is used to force a re-render when the state is updated
     */
    const [updatedState, setUpdatedState] = useState(initialState);
    const [derivativeState, setDerivativeState] = useState<DoublePendulumDerivativeState>(getDoublePendulumDerivatives(initialState, constants));
    const [history, setHistory] = useState<StateQueue>([initialState]);
    const [configurationSpacePairs, setConfigurationSpacePairs] = useState<ConfigurationSpacePairs>("theta1|theta2");
    const [autoScaleConfigurations, setAutoScaleConfigurations] = useState(true);
    const [showVelocityVectors, setShowVelocityVectors] = useState(false);
    const [showCartesianCoordinates, setShowCartesianCoordinates] = useState(true);

    const historyUpdatesEvery = 10;

    const [configurationSpaceViewBoxes, setConfigurationSpaceViewBoxes] = useState<
        Record<ConfigurationSpacePairs, { x: vec.Vector2; y: vec.Vector2 }>
    >({
        "theta1|theta2": { x: [-Math.PI, Math.PI], y: [-Math.PI, Math.PI] },
        "theta1|theta1_dot": { x: [-Math.PI, Math.PI], y: [-Math.PI, Math.PI] },
        "theta2|theta2_dot": { x: [-Math.PI, Math.PI], y: [-Math.PI, Math.PI] },
    });

    useEffect(() => {
        if (hasStarted) {
            const interval = setInterval(() => {
                setState((state) => {
                    const newState = rk4Step(state, constants, dt);
                    setUpdatedState(newState);
                    return newState;
                });
                setIterationIdx((idx) => idx + 1);
            }, dt * 1000);
            return () => clearInterval(interval);
        }
    }, [hasStarted]);

    useEffect(() => {
        setDerivativeState(getDoublePendulumDerivatives(state, constants));
        if (hasStarted) {
            if (iterationIdx % historyUpdatesEvery === 0) {
                setHistory((history) => [...history, state]);
            }
        }
        // If the history is too long, remove the oldest state
        if (history.length > 100) {
            setHistory((history) => history.slice(1));
        }

        // Update the configuration space points
        if (!autoScaleConfigurations) {
            return;
        }
        for (const [key, value] of Object.entries(configurationSpaceViewBoxes)) {
            const [x, y] = getConfigurationSpacePoint(state, key as ConfigurationSpacePairs);
            const newViewBox = { ...value };
            if (x < value.x[0]) {
                newViewBox.x[0] = x;
                // if too big, shrink
                if (value.x[1] - value.x[0] > 2 * Math.PI) {
                    newViewBox.x[1] = x + 2 * Math.PI;
                }
            }
            if (x > value.x[1]) {
                newViewBox.x[1] = x;
                // if too big, shrink
                if (value.x[1] - value.x[0] > 2 * Math.PI) {
                    newViewBox.x[0] = x - 2 * Math.PI;
                }
            }
            if (y < value.y[0]) {
                newViewBox.y[0] = y;
                // if too big, shrink
                if (value.y[1] - value.y[0] > 2 * Math.PI) {
                    newViewBox.y[1] = y + 2 * Math.PI;
                }
            }
            if (y > value.y[1]) {
                newViewBox.y[1] = y;
                // if too big, shrink
                if (value.y[1] - value.y[0] > 2 * Math.PI) {
                    newViewBox.y[0] = y - 2 * Math.PI;
                }
            }
            setConfigurationSpaceViewBoxes((prev) => ({ ...prev, [key]: newViewBox }));
        }
    }, [state]);

    return (
        <div className="card">
            <div className="card__body">
                <div className="row">
                    <div className="col">
                        <Mafs
                            viewBox={{
                                x: [-3, 3],
                                y: [-3, 3],
                            }}
                        >
                            <Line.Segment point1={[-3, 2]} point2={[3, 2]} />
                            <Line.Segment point1={[0, 2]} point2={[0, -2]} />
                            <Transform scale={[1, -1]} translate={[0, 2]}>
                                {/* Second pendulum */}
                                <Transform translate={[constants.l1 * Math.sin(state.theta1) * scale, constants.l1 * Math.cos(state.theta1) * scale]}>
                                    <Angle
                                        at={[0, 0]}
                                        fromRad={Math.PI / 2}
                                        toRad={Math.PI / 2 - state.theta2}
                                        label="\theta_2"
                                        radius={0.5}
                                        color={color("blue")}
                                        normalize
                                    />
                                    {/* Line down for y-axis */}
                                    <Line.Segment point1={[0, 0]} point2={[0, constants.l2 * scale]} style="dashed" />
                                    {/* Second pendulum bob */}
                                    <Circle
                                        center={[constants.l2 * Math.sin(state.theta2) * scale, constants.l2 * Math.cos(state.theta2) * scale]}
                                        radius={0.1}
                                        color={color("blue")}
                                        fillOpacity={1}
                                    />
                                    {/* Second pendulum rod */}
                                    <Line.Segment
                                        point1={[0, 0]}
                                        point2={[constants.l2 * Math.sin(state.theta2) * scale, constants.l2 * Math.cos(state.theta2) * scale]}
                                        color={color("blue")}
                                    />
                                    {showCartesianCoordinates && (
                                        <>
                                            {/* Line from bob to x-axis */}
                                            <Line.Segment
                                                point1={[
                                                    constants.l2 * Math.sin(state.theta2) * scale,
                                                    constants.l2 * Math.cos(state.theta2) * scale,
                                                ]}
                                                point2={[
                                                    constants.l2 * Math.sin(state.theta2) * scale,
                                                    -constants.l1 * Math.cos(state.theta1) * scale,
                                                ]}
                                                style="dashed"
                                            />
                                            {/* Label of x2 */}
                                            <LaTeX
                                                at={[
                                                    constants.l2 * Math.sin(state.theta2) * scale,
                                                    -constants.l1 * Math.cos(state.theta1) * scale - 0.3,
                                                ]}
                                                tex="x_2"
                                            />
                                            {/* Line from bob to y-axis */}
                                            <Line.Segment
                                                point1={[
                                                    constants.l2 * Math.sin(state.theta2) * scale,
                                                    constants.l2 * Math.cos(state.theta2) * scale,
                                                ]}
                                                point2={[
                                                    -constants.l1 * Math.sin(state.theta1) * scale,
                                                    constants.l2 * Math.cos(state.theta2) * scale,
                                                ]}
                                                style="dashed"
                                            />
                                            {/* Label of y2 */}
                                            <LaTeX
                                                at={[
                                                    -constants.l1 * Math.sin(state.theta1) * scale +
                                                        (constants.l2 * Math.sin(state.theta2) * scale > 0 ? -0.3 : 0.3),
                                                    constants.l2 * Math.cos(state.theta2) * scale,
                                                ]}
                                                tex="y_2"
                                            />
                                        </>
                                    )}

                                    {showVelocityVectors && (
                                        <Transform
                                            translate={[constants.l2 * Math.sin(state.theta2) * scale, constants.l2 * Math.cos(state.theta2) * scale]}
                                        >
                                            <Vector
                                                tail={[0, 0]}
                                                tip={[
                                                    Math.cos(state.theta2) * derivativeState.theta2_dot * scale,
                                                    -Math.sin(state.theta2) * derivativeState.theta2_dot * scale,
                                                ]}
                                                color={color("blue")}
                                            />
                                        </Transform>
                                    )}
                                </Transform>
                                {/* First pendulum, placed here for z priority */}
                                {/* First pendulum bob */}
                                <Angle
                                    at={[0, 0]}
                                    fromRad={Math.PI / 2}
                                    toRad={Math.PI / 2 - state.theta1}
                                    label="\theta_1"
                                    radius={0.5}
                                    color={color("pink")}
                                    normalize
                                />
                                <Circle
                                    center={[constants.l1 * Math.sin(state.theta1) * scale, constants.l1 * Math.cos(state.theta1) * scale]}
                                    radius={0.1}
                                    color={color("pink")}
                                    fillOpacity={1}
                                />
                                {/* First pendulum rod */}
                                <Line.Segment
                                    point1={[0, 0]}
                                    point2={[constants.l1 * Math.sin(state.theta1) * scale, constants.l1 * Math.cos(state.theta1) * scale]}
                                    color={color("pink")}
                                />

                                {showVelocityVectors && (
                                    <Transform
                                        translate={[constants.l1 * Math.sin(state.theta1) * scale, constants.l1 * Math.cos(state.theta1) * scale]}
                                    >
                                        <Vector
                                            tail={[0, 0]}
                                            tip={[
                                                Math.cos(state.theta1) * derivativeState.theta1_dot * scale,
                                                -Math.sin(state.theta1) * derivativeState.theta1_dot * scale,
                                            ]}
                                            color={color("pink")}
                                        />
                                    </Transform>
                                )}

                                {showCartesianCoordinates && (
                                    <>
                                        {/* Line from bob to x-axis */}
                                        <Line.Segment
                                            point1={[constants.l1 * Math.sin(state.theta1) * scale, constants.l1 * Math.cos(state.theta1) * scale]}
                                            point2={[constants.l1 * Math.sin(state.theta1) * scale, 0]}
                                            style="dashed"
                                        />
                                        {/* Label of x1 */}
                                        <LaTeX at={[constants.l1 * Math.sin(state.theta1) * scale, -0.3]} tex="x_1" />
                                        {/* Line from bob to y-axis */}
                                        <Line.Segment
                                            point1={[constants.l1 * Math.sin(state.theta1) * scale, constants.l1 * Math.cos(state.theta1) * scale]}
                                            point2={[0, constants.l1 * Math.cos(state.theta1) * scale]}
                                            style="dashed"
                                        />
                                        {/* Label of y1 */}
                                        <LaTeX
                                            at={[
                                                constants.l1 * Math.sin(state.theta1) * scale > 0 ? -0.3 : 0.3,
                                                constants.l1 * Math.cos(state.theta1) * scale,
                                            ]}
                                            tex="y_1"
                                        />
                                    </>
                                )}
                            </Transform>
                        </Mafs>
                    </div>
                    {showConfigurationSpace && (
                        <div className="col">
                            <Mafs zoom={true} viewBox={configurationSpaceViewBoxes[configurationSpacePairs]}>
                                <Coordinates.Cartesian
                                    xAxis={{
                                        lines: Math.PI,
                                        labels: labelPi,
                                    }}
                                    yAxis={{
                                        lines: Math.PI,
                                        labels: labelPi,
                                    }}
                                />
                                <Point
                                    x={getConfigurationSpacePoint(state, configurationSpacePairs)[0]}
                                    y={getConfigurationSpacePoint(state, configurationSpacePairs)[1]}
                                />
                                {history.map((historyState, index) => {
                                    const point = getConfigurationSpacePoint(historyState, configurationSpacePairs);
                                    return (
                                        <Point key={index} x={point[0]} y={point[1]} color={color("blue")} opacity={(index / history.length) * 0.9} />
                                    );
                                })}
                            </Mafs>
                        </div>
                    )}
                </div>
            </div>
            <div className="card__footer">
                <div className="row">
                    <div className="col">
                        <ControlPanel title="Conditions">
                            <Fragment key={1}>
                                <SliderInput
                                    latex
                                    label="\theta_1"
                                    value={state.theta1}
                                    min={-Math.PI}
                                    max={Math.PI}
                                    step={0.01}
                                    onChange={(theta1) => setState({ ...state, theta1 })}
                                    key={updatedState.theta1}
                                />
                            </Fragment>
                            <Fragment key={2}>
                                <SliderInput
                                    latex
                                    label="\theta_2"
                                    value={state.theta2}
                                    min={-Math.PI}
                                    max={Math.PI}
                                    step={0.01}
                                    onChange={(theta2) => setState({ ...state, theta2 })}
                                    key={updatedState.theta2}
                                />
                            </Fragment>
                            <Fragment key={3}>
                                <SliderInput
                                    latex
                                    label="\omega_1"
                                    value={state.theta1_dot}
                                    min={-10 * Math.PI}
                                    max={10 * Math.PI}
                                    step={0.01}
                                    onChange={(theta1_dot) => setState({ ...state, theta1_dot })}
                                    key={updatedState.theta1_dot}
                                />
                            </Fragment>
                            <Fragment key={4}>
                                <SliderInput
                                    latex
                                    label="\omega_2"
                                    value={state.theta2_dot}
                                    min={-10 * Math.PI}
                                    max={10 * Math.PI}
                                    step={0.01}
                                    onChange={(theta2_dot) => setState({ ...state, theta2_dot })}
                                    key={updatedState.theta2_dot}
                                />
                            </Fragment>
                        </ControlPanel>
                    </div>
                    <div className="col">
                        <ControlPanel title="View Options">
                            <Pills
                                label="Velocity Vectors"
                                options={["Show", "Hide"]}
                                value={showVelocityVectors ? "Show" : "Hide"}
                                onChange={(value) => setShowVelocityVectors(value === "Show")}
                            />
                            <Pills
                                label="Cartesian Coordinates"
                                options={["Show", "Hide"]}
                                value={showCartesianCoordinates ? "Show" : "Hide"}
                                onChange={(value) => setShowCartesianCoordinates(value === "Show")}
                            />
                        </ControlPanel>
                        {showConfigurationSpace && (
                            <ControlPanel title="Configuration Space Options">
                                <Pills
                                    label="Axes"
                                    options={{
                                        "theta1|theta2": "θ₁, θ₂",
                                        "theta1|theta1_dot": "θ₁, ω₁",
                                        "theta2|theta2_dot": "θ₂, ω₂",
                                    }}
                                    value={configurationSpacePairs}
                                    onChange={setConfigurationSpacePairs as (pair: ConfigurationSpacePairs) => void}
                                />
                                <Pills
                                    label="Auto Scale"
                                    options={["On", "Off"]}
                                    value={autoScaleConfigurations ? "On" : "Off"}
                                    onChange={(value) => setAutoScaleConfigurations(value === "On")}
                                />
                            </ControlPanel>
                        )}
                    </div>
                </div>
                <button className={`button button--secondary button--block ${hasStarted ? "button--danger" : "button--success"}`} onClick={startStop}>
                    {hasStarted ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
}

export namespace DoublePendulumVisualizer {
    export type Props = {
        showConfigurationSpace?: boolean;
        initialState: DoublePendulumState;
        constants: DoublePendulumConstants;
        dt?: number; // Time step, default value recommended
        scale?: number;
    };
    export const DEFAULT_PROPS: Props = {
        showConfigurationSpace: true,
        initialState: {
            theta1: (3 * Math.PI) / 7,
            theta1_dot: 0,
            theta2: (3 * Math.PI) / 8,
            theta2_dot: 0,
        },
        constants: {
            l1: 1, // Length of upper pendulum (e.g., 1 meter)
            l2: 1, // Length of lower pendulum (e.g., 1 meter)
            m1: 1, // Mass of upper bob (e.g., 1 kg)
            m2: 1, // Mass of lower bob (e.g., 1 kg)
            g: 9.81, // Gravitational acceleration (m/s^2)
        },
        dt: 1 / 60,
        scale: 1.5,
    };
}
