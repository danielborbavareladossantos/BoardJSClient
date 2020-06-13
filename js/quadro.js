class Quadro {

    constructor(ctx) {
        this.ctx = ctx;
        this.cursor = null;
        this.tipoObj = Linha.name;
        this.color = "rgba(255, 0, 0, 1)";
        this.lastCursor = null;
        this.listObjects = [];
    }

    get getCtx() {
        return this.ctx;
    }

    get getCursor() {
        return this.cursor;
    }

    get getTipoObj() {
        return this.tipoObj;
    }

    set setCursor(cursor) {
        this.cursor = cursor;
    }

    set setTipoObj(tipoObj) {
        this.tipoObj = tipoObj;
    }

    set setColor(color) {
        this.color = this.hexToRgbA(color);
    }

    set setLastCursor(lastCursor) {
        this.lastCursor = lastCursor;
    }

    desenhaQuadrado() {
        const quad = new Quadrado(this.cursor.x, this.cursor.y, 50, 50, this.color);
        quad.desenhar(this.ctx);
        this.listObjects.push(quad);
    }

    desenhaLinha() {
        const line = new Linha(this.cursor.x, this.cursor.y, this.cursor.x+50, this.cursor.y+50, this.color);
        line.desenhar(this.ctx);
        this.listObjects.push(line);
    }

    static hexToRgbA(hex) {
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
        }
        throw new Error('Hex inválido!');
    }

}