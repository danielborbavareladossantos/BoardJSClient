class Cursor {

    constructor(x,y) {
        this.x = Math.round(x);
        this.y = Math.round(y);
    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

}