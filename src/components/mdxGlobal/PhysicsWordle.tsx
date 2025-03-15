// This is a game similar to Wordle.
// The user has to guess a word by typing it in the input field.
// The difference is that the letters have physics equations attached to them that hint at the word;
// The letter is the term that the equation equals/represents.

import { MathEquation } from "@site/src/components/Math";
import { WORDS } from "@site/src/utilities/wordle";
import { useRef, useState } from "react";

type Letters = Record<string, string[]>;
type Guess = [string, string, string, string, string];
type Expressions = {
    /**
     * Internally lowercase.
     */
    letters: string[];
    expressions: string[];
};
type ColorOverlay = "none" | "correct" | "position";

const LETTERS: Letters = {
    a: [
        String.raw`\frac{F}{m}`, // Newton's second law
        String.raw`\frac{F}{P}`, // Force over pressure = area
        String.raw`\dv[2]{x}{t}`, // Acceleration = second derivative of position
        String.raw`\dv{v}{t}`, // Acceleration = first derivative of velocity
        String.raw`\frac{v - u}{t}`, // Acceleration = change in velocity over time
    ],
    b: [
        String.raw`\frac{F}{qv}`, // Lorentz force
        String.raw`\frac{\mu_0}{4\pi} \int \frac{I \dd{l} \times \vu{r}}{r^2}`, // Biot-Savart law
        String.raw`\grad \cross \vb{A}`, // Magnetic field
    ],
    c: [
        String.raw`\frac{Q}{V}`, // Capacitance
        String.raw`\frac{1}{\sqrt{\mu_0 \epsilon_0}}`, // Speed of light
        String.raw`\sqrt{a^2 + b^2}`, // Hypotenuse/Pythagorean theorem
    ],
    d: [
        String.raw`\frac{n \lambda}{\sin(\theta)}`, // Bragg's law
        String.raw`\epsilon_0 \va{E} + \va{P}`, // Electric displacement field
    ],
    e: [
        String.raw`\frac{1}{4\pi\epsilon_0} \frac{q}{r^2}`, // Electric field
        String.raw`\gamma m c^2`, // Energy-momentum relation
        String.raw`\sqrt{m^2 c^4 + p^2 c^2}`, // Energy-momentum relation 2
    ],
    f: [
        String.raw`\frac{GMm}{r^2}`, // Newton's law of gravitation
        String.raw`ma`, // Newton's second law
        String.raw`mg`, // Linear acceleration due to gravity
        String.raw`\dv{p}{t}`, // Force = rate of change of momentum
        String.raw`q(\va{E} + \va{v} \cross \va{B})`, // Lorentz force
        String.raw`\frac{9}{5} C + 32`, // Fahrenheit
        String.raw`-\dv{\mathcal{L}}{x}`, // Force = negative rate of change of Lagrangian
    ],
    g: [
        String.raw`\frac{c^4 G_{\mu\nu}}{8 \pi T_{\mu\nu}}`, // G in Einstein's field equations
        String.raw`\frac{Fr^2}{mM}`, // G in universal gravitation
    ],
    h: [String.raw`\frac{1}{\mu_0} \va{B} - \va{M}`],
    i: [
        String.raw`\frac{V}{R}`, // Ohm's law
        String.raw`\dv{q}{t}`, // Current = rate of change of charge
        String.raw`\sqrt{-1}`, // Imaginary unit
        String.raw`\frac{1}{\mu_0} \oint \va{B} \cdot \dd{\va{l}}`, // Ampere's law
    ],
    j: [
        String.raw`\frac{I}{A}`, // Current density
    ],
    k: [
        String.raw`\frac{S}{\ln(\Omega)}`, // Boltzmann's constant in terms of entropy
        String.raw`\frac{PV}{NT}`, // Ideal gas law
        String.raw`m\omega^2`, // Spring constant in SHM
        String.raw`C - 273.15`, // Kelvin in terms of Celsius
        String.raw`\frac{1}{2} m v^2`, // Kinetic energy
    ],
    l: [
        String.raw`I\omega`, // Angular momentum
        String.raw`\frac{p}{q}`, // p is the dipole moment and q is the charge
        String.raw`K - U`, // Lagrangian
        String.raw`\qty(\frac{T}{2\pi})^2 g`, // Length of a pendulum string
        String.raw`\int \dd{s}^4 \mathcal{L}(\phi, \partial_\mu \phi)`, // Lagrangian density in field theory
    ],
    m: [
        String.raw`Ia`, // Magnetic dipole moment
        String.raw`\frac{2T}{v^2}`, // Mass from kinetic energy
        String.raw`\frac{p}{v}`, // Mass from momentum
        String.raw`\frac{i\cancel{\partial}\psi(x)}{\psi(x)}`, // Mass from the Dirac equation
    ],
    n: [
        String.raw`\frac{d\sin(\theta)}{\lambda}`, // Diffraction grating
        String.raw`{1, 2, 3, \ldots}`, // Natural numbers
    ],
    o: [
        String.raw`(0, 0)`, // Origin
        String.raw`(x \mapsto x^2) \in _(n)`, // Fill in the blank (big O notation)
    ],
    p: [
        String.raw`m\va{v}`, // Linear momentum
        String.raw`\epsilon_0 \int (\va{E} \times \va{B}) \dd{V}`, // Poynting vector
        String.raw`\dv{E}{t}`, // Power = rate of change of energy
        String.raw`IV`, // Power = current times voltage
    ],
    q: [
        String.raw`mc\Delta t`, // Heat transfer in terms of mass
        String.raw`S \Delta T`, // Heat transfer in terms of entropy
        String.raw`\int \rho \dd{V}`, // Charge
        String.raw`\Delta E - W`, // Rearranged first law of thermodynamics
    ],
    r: [
        String.raw`\frac{2GM}{c^2}`, // Schwarzschild radius
        String.raw`\sqrt{x^2 + y^2 + z^2}`, // Distance from origin
    ],
    s: [
        String.raw`k_B \ln(\Omega)`, // Entropy
        String.raw`\sqrt{v^\mu g_{\mu\nu} v^\nu}`, // Length of a 4-vector with metric tensor
        String.raw`ut + \frac{1}{2} a t^2`, // Distance travelled with constant acceleration
    ],
    t: [
        String.raw`\gamma \tau`, // Proper time
        String.raw`\frac{v - u}{a}`, // Time taken to reach a velocity
        String.raw`\frac{2\pi}{\omega}`, // Period of a wave
    ],
    u: [
        String.raw`\frac{1}{2} k x^2`, // Potential energy in a spring
        String.raw`mgh`, // Potential energy in a gravitational field
        String.raw`-\int \va{F} \cdot \dd{\va{r}}`, // General potential energy for a conservative force
        String.raw`E - K`, // Energy = potential energy + kinetic energy
        String.raw`\frac{\epsilon}{2} \int \va{E}^2 \dd{V}`, // Energy density in an electric field
    ],
    v: [
        String.raw`\dv{\va{r}}{t}`, // Velocity
        String.raw`r\omega`, // Tangential velocity
        String.raw`u + \int a(t) \dd{t}`, // Final velocity
        String.raw`f\lambda`, // Wave speed
        String.raw`u + at`, // Final velocity with constant acceleration
        String.raw`-\int \va{E} \cdot \dd{\va{r}}`, // Electric potential
    ],
    w: [
        String.raw`\int \va{F} \cdot \dd{\va{r}}`, // Work
        String.raw`F \Delta x`, // Work in terms of force and distance
        String.raw`P \Delta V`, // Work in terms of pressure and volume
    ],
    x: [
        String.raw`\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`, // Quadratic formula
    ],
    y: [
        String.raw`mx + c`, // Linear equation
    ],
    z: [
        String.raw`\vu{x} \cross \vu{y}`, // Cross product of the other axes
    ]
};

/**
 * Used as a fallback if the letter is not in the LETTERS object.
 */
const DEFAULT_STRING = String.raw`\frac{F}{m}`;

function randomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase();
}

function randomExpression(letter: string) {
    if (LETTERS[letter] === undefined) {
        return DEFAULT_STRING;
    }
    return LETTERS[letter][Math.floor(Math.random() * LETTERS[letter].length)];
}

function randomExpressions(): Expressions {
    const word = randomWord();
    const letters = word.split("");
    const expressions = letters.map((letter) => randomExpression(letter.toLowerCase()));
    return { letters, expressions };
}

function forceArrayLength<T>(arr: T[], length: number, fill: T): T[] {
    return arr.length < length ? [...arr, ...Array(length - arr.length).fill(fill)] : arr.slice(0, length);
}

function colorFromOverlay(overlay: ColorOverlay): string | undefined {
    switch (overlay) {
        case "correct":
            return "var(--ifm-color-success)";
        case "position":
            return "var(--ifm-color-warning)";
        default:
            // Gray at 25% opacity
            return "rgba(125, 125, 125, 0.25)";
    }
}

export function PhysicsWordle({}: PhysicsWordle.Props) {
    const expressionsRef = useRef<Expressions>(randomExpressions());
    const [guess, setGuess] = useState<Guess>(["", "", "", "", ""]);
    const inputs = useRef<HTMLInputElement[]>([]);
    const [colorOverlays, setColorOverlays] = useState<ColorOverlay[]>(["none", "none", "none", "none", "none"]);

    const focusInput = (idx: number) => {
        inputs.current[idx]?.focus();
        inputs.current[idx]?.select();
    };

    const updateGuess = (value: string) => {
        const previousGuess = guess.join("");
        const newGuessArray = forceArrayLength(value.split(""), 5, "") as Guess;
        setGuess(newGuessArray);

        // For each changed letter, remove the color overlay
        for (let i = 0; i < 5; i++) {
            if (newGuessArray[i] !== previousGuess[i]) {
                setColorOverlays(original => original.map((overlay, idx) => (idx === i ? "none" : overlay)));
            }
        }
    };

    const checkGuess = () => {
        const correctGuess = guess.join("").toLowerCase() === expressionsRef.current.letters.join("").toLowerCase();
        if (correctGuess) {
            setColorOverlays(["correct", "correct", "correct", "correct", "correct"]);
            return;
        }
        // If a letter is correct AND in the correct position, it is marked as correct
        const correctLetters = guess.map((letter, idx) => letter.toLowerCase() === expressionsRef.current.letters[idx].toLowerCase());
        // If a letter is correct but in the wrong position, it is marked as position
        setColorOverlays(overlays => {
            return overlays.map((overlay, idx) => {
                if (correctLetters[idx]) {
                    return "correct";
                }
                if (!expressionsRef.current.letters.includes(guess[idx].toLowerCase())) {
                    return "none";
                }
                // If the letter is in another position, but that is already marked as correct, don't mark it as position
                for (let i = 0; i < 5; i++) {
                    if (correctLetters[i] && expressionsRef.current.letters[i].toLowerCase() === guess[idx].toLowerCase()) {
                        return "none";
                    }
                }
                return "position";
            });
        })
    };

    return (
        <div className="card">
            <div className="card__header">
                <h3>Physics Wordle</h3>
            </div>
            <div className="card__body">
                <div className="row row--no-gutters">
                    {expressionsRef.current.letters.map((_, index) => (
                        <div className="col" style={{ textAlign: "center" }} key={index}>
                            <MathEquation>{expressionsRef.current.expressions[index]}</MathEquation>
                        </div>
                    ))}
                </div>
                <div className="row row--no-gutters">
                    {guess.map((letter, idx) => (
                        // A large display of the letter. Not a text input.
                        <div className="col" key={idx}>
                            <h3
                                className="item shadow--md"
                                style={{
                                    backgroundColor: colorFromOverlay(colorOverlays[idx]),
                                    padding: "1rem",
                                    margin: "0.5rem",
                                    textAlign: "center",
                                    borderRadius: "0.5rem",
                                    minHeight: "5rem",
                                    // Force text to center vertically
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {letter.toUpperCase()}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="card__footer">
                <div className="row">
                    <div className="col">
                        <h3>Input your guess:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="tick-input"
                            style={{ width: "100%", marginBottom: "1rem" }}
                            onChange={(e) => {
                                updateGuess(e.target.value);
                            }}
                            ref={(input) => (inputs.current[0] = input)}
                            maxLength={5}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button
                            onClick={() => {
                                expressionsRef.current = randomExpressions();
                                setGuess(["", "", "", "", ""]);
                                setColorOverlays(["none", "none", "none", "none", "none"]);
                                focusInput(0);
                            }}
                            className="button button--primary"
                            style={{ width: "100%" }}
                        >
                            New Word
                        </button>
                    </div>
                    <div className="col">
                        <button
                            onClick={() => {
                                checkGuess();
                            }}
                            className="button button--secondary"
                            style={{ width: "100%" }}
                        >
                            Check
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export namespace PhysicsWordle {
    export type Props = {};
}
