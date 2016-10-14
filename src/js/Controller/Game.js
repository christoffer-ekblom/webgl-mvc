class Game {
    constructor() {
        this.gametime = new GameTime();
    }

    run() {
        requestAnimationFrame(this.run.bind(this));
        this.update();
        this.draw();
    }
}