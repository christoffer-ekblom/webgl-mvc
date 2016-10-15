class Controller extends Game {
    constructor() {
        super();
        this.scene = new Scene();
        this.camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.cameraMan = new CameraMan(this.camera.camera);
        this.display = new Display(this.scene.scene, this.camera.camera);
        this.initialize();
    }

    initialize() {
        this.cameraMan.setStartPosZ(5);
    }

    loadContent() {

    }

    unloadContent() {

    }

    update() {

    }

    draw() {
        this.display.draw();
    }
}
