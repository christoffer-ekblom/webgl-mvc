class Renderer {
    constructor(scene, camera) {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene = scene;
        this.camera = camera;
        document.body.appendChild(this.renderer.domElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}
