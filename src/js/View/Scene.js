class Scene {
    constructor() {
        this.scene = new THREE.Scene();

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );

        this.scene.add(cube);
    }
}
