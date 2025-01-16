// These are just some basic vector operations that are used by various components in the project.

export function multiplyVector(matrix: number[][], vector: number[]): number[] {
    return matrix.map((row) => row.reduce((acc, val, i) => acc + val * vector[i], 0));
}

export function add(a: number[], b: number[]): number[] {
    return a.map((val, i) => val + b[i]);
}

export function scale(a: number[], scalar: number): number[] {
    return a.map((val) => val * scalar);
}
