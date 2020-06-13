class Quadrado {

    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }

    get getColor() {
        return this.color;
    }

    desenhar(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}