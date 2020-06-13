/*
  Autor: Daniel dos Santos
  Data: 11/04/2020
  Observação: Classe que seta listeners de componentes.
*/

class Action {

  constructor() {

    var quadro = new Quadro(Control.getContext());
    this.refreshSpan(quadro);

    Control.getCanvas().addEventListener('mousedown', (event) => {

      const cursor = this.getCursorPosition(canvas, event);
      quadro.cursor = cursor;

      switch (quadro.tipoObj) {
        case "Linha":
          quadro.desenhaLinha();
          break;
        case "Quadrado":
          quadro.desenhaQuadrado();
          break;
        default:
          quadro.tipoObj = Linha.name;
          quadro.desenhaLinha();
          break;
      }
      
    }, false);

    Control.getCanvas().addEventListener('mousemove', (event) => {

      const cursor = this.getCursorPosition(canvas, event);
      quadro.lastCursor = cursor;

    }, false);

    Control.getTfColor().addEventListener('input', (event) => {
      quadro.color = event.target.value;
    });

    Control.getBtPrev().addEventListener('click', () => {
      quadro.tipoObj = Quadrado.name;
      this.refreshSpan(quadro);
    });

    Control.getBtNext().addEventListener('click', () => {
      quadro.tipoObj = Linha.name;
      this.refreshSpan(quadro);
    });

  }

  getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    return new Cursor(x,y);
  }

  refreshSpan = (quadro) => {
    Control.getSpan().innerHTML = quadro.tipoObj;
  }
  
}