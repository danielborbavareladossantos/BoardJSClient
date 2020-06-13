class Quadro {

    constructor(ctx) {
        this.ctx = ctx;
        this.cursor = [];
        this.tipoObj = Linha.name;
        this.color = "rgba(255, 0, 0, 1)";
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

    desenhaQuadrado() {
        const quad = new Quadrado(this.cursor.x, this.cursor.y, 50, 50, this.color);
        quad.desenhar(this.ctx);
        this.listObjects.push(quad);

        if (this.cursor.length>1 && (this.cursor.length % 2 === 0)) {
            var i = this.cursor.length;
            const quad = new Quadrado(
                this.cursor[i-2].x, 
                this.cursor[i-2].y, 
                this.cursor[i-1].x-this.cursor[i-2].x, 
                this.cursor[i-1].y-this.cursor[i-2].y, 
                this.color
            );
            quad.desenhar(this.ctx);
            this.listObjects.push(quad);
        } else {
            const quad = new Quadrado(
                this.cursor[0].x, 
                this.cursor[0].y, 
                this.cursor[0].x-this.cursor[0].x+1, 
                this.cursor[0].y-this.cursor[0].y+1, 
                this.color
            );
            quad.desenhar(this.ctx);
            this.listObjects.push(quad);
        }
    }

    desenhaLinha() {
        if (this.cursor.length>1) {
            var i = this.cursor.length;
            const line = new Linha(
                this.cursor[i-2].x, 
                this.cursor[i-2].y, 
                this.cursor[i-1].x, 
                this.cursor[i-1].y, 
                this.color
            );
            line.desenhar(this.ctx);
            this.listObjects.push(line);
        } else {
            const line = new Linha(
                this.cursor[0].x, 
                this.cursor[0].y, 
                this.cursor[0].x+1, 
                this.cursor[0].y+1, 
                this.color
            );
            line.desenhar(this.ctx);
            this.listObjects.push(line);
        }
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