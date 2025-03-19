// This is a game similar to Wordle.
// The user has to guess a word by typing it in the input field.
// The difference is that the letters have physics equations attached to them that hint at the word;
// The letter is the term that the equation equals/represents.

// CREDITS
// Much of this was derived from inspect element on Thypher (https://thypher.com/play/).

import { MathEquation } from "@site/src/components/Math";
import { WORDS } from "@site/src/utilities/wordle";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import styles from "./PhysicsWordle.module.scss";

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
        String.raw`\frac{2K}{v^2}`, // Mass from kinetic energy
        String.raw`\frac{p}{v}`, // Mass from momentum
        String.raw`\frac{i\cancel{\partial}\psi(x)}{\psi(x)}`, // Mass from the Dirac equation
    ],
    n: [
        String.raw`\frac{d\sin(\theta)}{\lambda}`, // Diffraction grating
        String.raw`\{1, 2, 3, \ldots\}`, // Natural numbers
    ],
    o: [
        String.raw`(0, 0)`, // Origin
        String.raw`(x \mapsto x^2) \in \_(x^2)`, // Fill in the blank (big O notation)
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
        String.raw`\dv{\_}{t} > 0 \quad \text{(Closed)}`, // Entropy increases
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
    ],
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
            return "success";
        case "position":
            return "warning";
        default:
            return "secondary";
    }
}

// Give a message based on the guess
// If the guess is correct, return "Good job!"
// If the guess is almost correct, return "Almost there!"
// If the guess is completely wrong, return "Try again!"
function getMessageFromGuess(guess: Guess, letters: string[]): string {
    if (guess.join("").toLowerCase() === letters.join("").toLowerCase()) {
        return "Good job!";
    }
    const correctLetters = guess.filter((letter, idx) => letter.toLowerCase() === letters[idx].toLowerCase());
    if (correctLetters.length < 3) {
        return "Try again!";
    }
    return "Almost there!";
}

export function PhysicsWordle({}: PhysicsWordle.Props) {
    const expressionsRef = useRef<Expressions>(randomExpressions());
    const inputs = useRef<HTMLElement[]>([]);
    const resetButton = useRef<HTMLButtonElement | null>(null);
    const checkButton = useRef<HTMLButtonElement | null>(null);

    const [guess, setGuess] = useState<Guess>(["", "", "", "", ""]);
    const [colorOverlays, setColorOverlays] = useState<ColorOverlay[]>(["none", "none", "none", "none", "none"]);
    const [selected, setSelected] = useState<number>(0);

    const [gameComplete, setGameComplete] = useState<boolean>(false);
    const [smallScreen, setSmallScreen] = useState<boolean>(false);

    const [confettiStacks, setConfettiStacks] = useState<number>(0);
    const [message, setMessage] = useState<string>("");

    const focusInput = (idx: number) => {
        setSelected(idx);
        inputs.current[idx]?.focus();
    };

    const updateGuess = (value: string[]) => {
        console.log("Updating guess", value);
        const previousGuess = guess.join("");
        const newGuessArray = forceArrayLength(value, 5, "") as Guess;
        setGuess(newGuessArray);

        // For each changed letter, remove the color overlay
        for (let i = 0; i < 5; i++) {
            if (newGuessArray[i] !== previousGuess[i]) {
                setColorOverlays((original) => original.map((overlay, idx) => (idx === i ? "none" : overlay)));
            }
        }
    };

    const checkGuess = () => {
        const correctGuess = guess.join("").toLowerCase() === expressionsRef.current.letters.join("").toLowerCase();
        setMessage(getMessageFromGuess(guess, expressionsRef.current.letters));
        if (correctGuess) {
            setColorOverlays(["correct", "correct", "correct", "correct", "correct"]);
            setGameComplete(true);
            celebrate();
            return;
        }
        // If a letter is correct AND in the correct position, it is marked as correct
        const correctLetters = guess.map((letter, idx) => letter.toLowerCase() === expressionsRef.current.letters[idx].toLowerCase());
        // If a letter is correct but in the wrong position, it is marked as position
        setColorOverlays((overlays) => {
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
        });
    };

    const celebrate = () => {
        setConfettiStacks((stacks) => stacks + 1);
        setTimeout(() => {
            setConfettiStacks((stacks) => stacks - 1);
        }, 5000);
    };

    const resetGame = () => {
        expressionsRef.current = randomExpressions();
        setGuess(["", "", "", "", ""]);
        setColorOverlays(["none", "none", "none", "none", "none"]);
        setGameComplete(false);
        setConfettiStacks(0);
        focusInput(0);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        // Ignore ctrl/meta/alt key presses
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        switch (e.key) {
            case "Enter":
                if (e.shiftKey) {
                    resetButton.current?.click();
                } else {
                    checkButton.current?.click();
                }
                break;

            case "Backspace":
            case "Delete":
                if (gameComplete) return;

                if (guess[selected] !== "") {
                    updateGuess([...guess.slice(0, selected), "", ...guess.slice(selected + 1)]);
                } else if (selected > 0) {
                    const previous = selected - 1;
                    updateGuess([...guess.slice(0, previous), "", ...guess.slice(previous + 1)]);
                    focusInput(previous);
                }
                break;

            case "ArrowRight":
            case "ArrowDown":
                if (!gameComplete) focusInput(Math.min(selected + 1, 4));
                break;

            case "ArrowLeft":
            case "ArrowUp":
                if (!gameComplete) focusInput(Math.max(selected - 1, 0));
                break;

            default:
                if (!gameComplete && /^[a-zA-Z]$/.test(e.key)) {
                    const updatedGuess = [...guess.slice(0, selected), e.key.toUpperCase(), ...guess.slice(selected + 1)];
                    updateGuess(updatedGuess);
                    if (selected < 4) focusInput(selected + 1);
                }
                break;
        }
    };

    // Virtually enter a letter
    const enterLetter = (letter: string) => {
        const event = new KeyboardEvent("keydown", { key: letter });
        handleKeyDown(event);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSmallScreen(window.innerWidth < 768);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setSmallScreen(window.innerWidth < 768);
            });
        };
    }, []);

    return (
        <>
            <div className="card">
                <div className="card__header">
                    <h3>Physics Wordle</h3>
                    {smallScreen && <p>Click on a letter to select it</p>}
                </div>
                <div className={"card__body " + (smallScreen ? "row" : "")}>
                    <div className={smallScreen ? "col" : "row row--no-gutters"} style={{ maxWidth: smallScreen ? "45%" : "auto" }}>
                        {expressionsRef.current.letters.map((_, index) => (
                            <div
                                className={smallScreen ? "row" : "col"}
                                style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                    minHeight: smallScreen ? "5rem" : "auto",
                                }}
                                key={index}
                            >
                                <MathEquation>{expressionsRef.current.expressions[index]}</MathEquation>
                            </div>
                        ))}
                    </div>
                    <div
                        className={smallScreen ? "col" : "row margin-top--md"}
                        style={{ justifyContent: "center", maxWidth: smallScreen ? "45%" : "auto" }}
                    >
                        {guess.map((letter, idx) => (
                            // A large display of the letter. Not a text input.
                            <div className="col" key={idx}>
                                <button
                                    className={
                                        `button button--${colorFromOverlay(colorOverlays[idx])} ` + (selected === idx ? "" : "button--outline")
                                    }
                                    style={{
                                        minHeight: "5rem",
                                        minWidth: "100%",
                                        fontSize: "2rem",
                                    }}
                                    onClick={() => {
                                        focusInput(idx);
                                    }}
                                >
                                    {letter.toUpperCase()}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div id={styles["keyboard-container"]}>
                            <div className={styles["keyboard-row"]}>
                                <button onClick={() => enterLetter("q")}>q</button>
                                <button onClick={() => enterLetter("w")}>w</button>
                                <button onClick={() => enterLetter("e")}>e</button>
                                <button onClick={() => enterLetter("r")}>r</button>
                                <button onClick={() => enterLetter("t")}>t</button>
                                <button onClick={() => enterLetter("y")}>y</button>
                                <button onClick={() => enterLetter("u")}>u</button>
                                <button onClick={() => enterLetter("i")}>i</button>
                                <button onClick={() => enterLetter("o")}>o</button>
                                <button onClick={() => enterLetter("p")}>p</button>
                            </div>
                            <div className={styles["keyboard-row"]}>
                                <div className={styles["spacer-half"]}></div>
                                <button onClick={() => enterLetter("a")}>a</button>
                                <button onClick={() => enterLetter("s")}>s</button>
                                <button onClick={() => enterLetter("d")}>d</button>
                                <button onClick={() => enterLetter("f")}>f</button>
                                <button onClick={() => enterLetter("g")}>g</button>
                                <button onClick={() => enterLetter("h")}>h</button>
                                <button onClick={() => enterLetter("j")}>j</button>
                                <button onClick={() => enterLetter("k")}>k</button>
                                <button onClick={() => enterLetter("l")}>l</button>
                                <div className={styles["spacer-half"]}></div>
                            </div>
                            <div className={styles["keyboard-row"]}>
                                <button onClick={() => enterLetter("Enter")} className={styles["wide-button"]}>
                                    Enter
                                </button>
                                <button onClick={() => enterLetter("z")}>z</button>
                                <button onClick={() => enterLetter("x")}>x</button>
                                <button onClick={() => enterLetter("c")}>c</button>
                                <button onClick={() => enterLetter("v")}>v</button>
                                <button onClick={() => enterLetter("b")}>b</button>
                                <button onClick={() => enterLetter("n")}>n</button>
                                <button onClick={() => enterLetter("m")}>m</button>
                                <button onClick={() => enterLetter("Backspace")} className={styles["wide-button"]}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        style={{ display: "block", margin: "auto" }}
                                    >
                                        <path
                                            fill="var(--color-tone-1)"
                                            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="row">
                        <div className="col">
                            <button onClick={resetGame} className="button button--primary button--block" ref={resetButton}>
                                New Word <kbd className="searchHintKbd">⇧</kbd> <kbd className="searchHintKbd">⏎</kbd>
                            </button>
                        </div>
                        <div className="col">
                            <button onClick={checkGuess} className="button button--secondary button--block" ref={checkButton}>
                                Check <kbd className="searchHintKbd">⏎</kbd>
                            </button>
                        </div>
                    </div>
                    <p>{message}</p>
                </div>
            </div>
            <div>
                {/* Celebrate with confetti */}
                {confettiStacks > 0 && (
                    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}>
                        <Confetti numberOfPieces={200} recycle={true} />
                    </div>
                )}
            </div>
        </>
    );
}

export namespace PhysicsWordle {
    export type Props = {};
}

export function PhysicsWordleReferenceTable({}: PhysicsWordleReferenceTable.Props) {
    return (
        <>
            <p id="physics-wordle-reference-table-head">
                Jump to:{" "}
                {Object.entries(LETTERS).map(([letter, expressions], i) => (
                    <>
                        <a href={`#physics-wordle-reference-table-${letter}`} key={letter}>
                            {letter.toUpperCase()}
                        </a>
                        {i < Object.keys(LETTERS).length - 1 && ", "}
                    </>
                ))}
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Letter</th>
                        <th>Equations</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(LETTERS).map(([letter, expressions]) => (
                        <>
                            <tr key={letter}>
                                <td id={`physics-wordle-reference-table-${letter}`} rowSpan={expressions.length}>
                                    {letter}
                                    {` `}
                                    <a href="#physics-wordle-reference-table-head" aria-label="Back to top">
                                        ↑
                                    </a>
                                </td>
                                <td id={`physics-wordle-reference-table-${letter}-0`}>
                                    <MathEquation>{expressions[0]}</MathEquation>
                                </td>
                            </tr>
                            {expressions.slice(1).map((expression, idx) => (
                                <tr key={`${letter}-${idx}`}>
                                    <td id={`physics-wordle-reference-table-${letter}-${idx}`}>
                                        <MathEquation>{expression}</MathEquation>
                                    </td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export namespace PhysicsWordleReferenceTable {
    export type Props = {};
}
