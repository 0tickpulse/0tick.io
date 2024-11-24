export function sphericalToCartesian(r: number, theta: number, phi: number): vec.Vector3 {
    // We use the physics convention for spherical coordinates
    return [
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(theta),
    ]
}
