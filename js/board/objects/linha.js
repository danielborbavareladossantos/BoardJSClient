class Linha {

    constructor(xO,yO,xD,yD,color) {
        this.xO = xO;
        this.yO = yO;
        this.xD = xD;
        this.yD = yD;
        this.color = color;
    }

    get getXO() {
        return this.xO;
    }

    get getYO() {
        return this.yO;
    }

    get getXD() {
        return this.xD;
    }

    get getYD() {
        return this.yD;
    }

    get getColor() {
        return this.color;
    }

    desenhar(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.xO, this.yO);
        ctx.lineTo(this.xD, this.yD);
        ctx.stroke();
    }

    desenhar3(ctx,xN,yN) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.xO, this.yO);
        ctx.lineTo(this.xD, this.yD);
        ctx.lineTo(xN, yN);
        ctx.stroke();
    }

}