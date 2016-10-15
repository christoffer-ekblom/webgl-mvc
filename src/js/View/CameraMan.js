class CameraMan {
    constructor(camera) {
        this.camera = camera;
    }

    setStartPosX(x) {
        this.camera.position.x = x;
    }

    setStartPosY(y) {
        this.camera.position.y = y;
    }

    setStartPosZ(z) {
        this.camera.position.z = z;
    }
}
