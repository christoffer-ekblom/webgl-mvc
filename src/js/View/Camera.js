class Camera {
    constructor(fieldOfView, aspectRatio, near, far, startPos) {
        this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);
    }
}
