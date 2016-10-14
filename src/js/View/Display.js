class Display {
    constructor(scene, camera) {
        this.renderer = new Renderer(scene, camera);
    }

    draw() {
        this.renderer.render();
    }
}