// ---
// Fundamental constants
// ---

/**
 * The speed of light in a vacuum, in meters per second (m/s).
 */
export const C = 299_792_458;

/**
 * The gravitational constant, in meters cubed per kilogram per second squared (m³/kg/s²).
 */
export const G = 6.6743e-11;

/**
 * The Planck constant, in joule seconds (J·s).
 */
export const H = 6.62607015e-34;

// ---
// Galilean transformations.
// Everything here is prefixed with "G_" to avoid conflicts with the Lorentz transformations and other functions.
// ---

export function G_addVelocities(v1: number, v2: number): number {
    return v1 + v2;
}

/**
 * The Galilean transformation matrix for the forward transformation.
 * Note that "forward" refers to the transformation of **covariant** tensors (like basis vectors, NOT vector components).
 */
export function G_forwardMatrix(v: number): number[][] {
    return [
        [1, v],
        [0, 1],
    ];
}

// ---
// Lorentz transformations.
// Unless otherwise stated:
// - Everything is in SI units.
// - The y and z components are zero.
// - The coordinate system is x and ct (not x and t).
// - The mostly-minus metric signature is used.
// ---

export function betaFromV(v: number): number {
    return v / C;
}

export function gammaFromV(v: number): number {
    return 1 / Math.sqrt(1 - betaFromV(v) ** 2);
}

export function gammaFromBeta(beta: number): number {
    return 1 / Math.sqrt(1 - beta ** 2);
}

export function betaFromGamma(gamma: number): number {
    return Math.sqrt(1 - 1 / gamma ** 2);
}

/**
 * The Lorentz transformation matrix for the forward transformation.
 * Note that "forward" refers to the transformation of **covariant** tensors (like basis vectors, NOT vector components).
 */
export function lorentzForwardMatrix(beta: number): number[][] {
    const gamma = gammaFromBeta(beta);
    return [
        [gamma, gamma * beta],
        [gamma * beta, gamma],
    ];
}

/**
 * The Lorentz transformation matrix for the backward transformation.
 * Note that "backward" refers to the inverse transformation of **covariant** tensors (like basis vectors, NOT vector components).
 */
export function lorentzBackwardMatrix(beta: number): number[][] {
    const gamma = gammaFromBeta(beta);
    return [
        [gamma, -gamma * beta],
        [-gamma * beta, gamma],
    ];
}

export function addBetas(beta1: number, beta2: number): number {
    return (beta1 + beta2) / (1 + beta1 * beta2);
}

export function addVelocities(v1: number, v2: number): number {
    return C * addBetas(betaFromV(v1), betaFromV(v2));
}

export function spacetimeInvariant(x: number, t: number): number {
    return (C * t) ** 2 - x ** 2;
}

// ---
// Special relativity in noninertial frames.
// ---

/**
 * A class that lets you create a set of Rindler coordinates given the acceleration of the observer.
 * The convention used here is that Rindler coordinates are uppercase (X, CT) and Minkowski coordinates are lowercase (x, ct).
 */
export class RindlerCoordinates {
    constructor(
        /**
         * The proper acceleration of the observer, in meters per second squared (m/s²).
         */
        public alpha: number,
    ) {}
    /**
     * The "rindler distance" is the length from the origin to the line where acceleration is exactly 1 alpha from the RF of a stationary observer.
     */
    get D() {
        return C ** 2 / this.alpha;
    }

    getRindlerCoordinates(x: number, ct: number): [number, number] {
        const CT = x * Math.sinh((this.alpha / C ** 2) * ct);
        const X = x * Math.cosh((this.alpha / C ** 2) * ct);
        return [X, CT];
    }

    getMinkowskiCoordinates(X: number, CT: number): [number, number] {
        const x = Math.sqrt(X ** 2 - CT ** 2);
        const ct = (C ** 2 / this.alpha) * Math.atanh(CT / x);
        return [x, ct];
    }

    /**
     * The forward Jacobian matrix for the Rindler transformation.
     * Note that "forward" refers to the transformation of **covariant** tensors (like basis vectors, NOT vector components).
     */
    forwardJacobianMatrix(x: number, ct: number, X = this.getRindlerCoordinates(x, ct)[0], CT = this.getRindlerCoordinates(x, ct)[1]): number[][] {
        return [
            [(this.alpha / C ** 2) * x, ct / X],
            [(this.alpha / C ** 2) * ct, x / X],
        ];
    }

    /**
     * The backward/inverse Jacobian matrix for the Rindler transformation.
     * Note that "backward" refers to the inverse transformation of **covariant** tensors (like basis vectors, NOT vector components).
     */
    backwardJacobianMatrix(
        X: number,
        CT: number,
        x = this.getMinkowskiCoordinates(X, CT)[0],
        ct = this.getMinkowskiCoordinates(X, CT)[1],
    ): number[][] {
        return [
            [(C ** 2 * x) / (this.alpha * X ** 2), -(C ** 2 * ct) / (this.alpha * X ** 2)],
            [-ct / X, x / X],
        ];
    }

    rindlerMetric(X: number, CT: number): number[][] {
        return [
            [(X / this.D) ** 2, 0],
            [0, -1],
        ];
    }

    /**
     * The Christoffel symbols for the coordinate system.
     *
     * The return value is a 3D array where the first index is the row, the second index is the column, and the third index is the component. 0 is `t` and 1 is `x`.
     * For example, if you wanted to get the Christoffel symbol Γ_{tt}^x, you would use `christoffelSymbols(x, ct)[0][0][1]`, where `[0][0]` is the `tt` part and `[1]` is the `x` part.
     * Generally, if you want to get the Christoffel symbol Γ_{ab}^c, you would use `christoffelSymbols(x, ct)[a][b][c]`.
     */
    christoffelSymbols(X: number, CT: number): number[][][] {
        return [
            [
                [
                    // [0][0][0] - Γ_{tt}^t
                    0,
                    // [0][0][1] - Γ_{tt}^x
                    (this.alpha / C ** 2) ** 2 * X,
                ],
                [
                    // [0][1][0] - Γ_{tx}^t
                    1 / X,
                    // [0][1][1] - Γ_{tx}^x
                    0,
                ],
            ],
            [
                [
                    // [1][0][0] - Γ_{xt}^t
                    1 / X,
                    // [1][0][1] - Γ_{xt}^x
                    0,
                ],
                [
                    // [1][1][0] - Γ_{xx}^t
                    0,
                    // [1][1][1] - Γ_{xx}^x
                    0,
                ],
            ],
        ];
    }
}
