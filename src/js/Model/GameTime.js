class GameTime {
    constructor() {
        this.timer = new THREE.Clock();
    }

    elapsedTime() {
        return this.timer.getElapsedTime();
    }
}
