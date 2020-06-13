/*
  Autor: Daniel dos Santos
  Data: 11/04/2020
  Observação: Classe que cria componentes.
*/

class Build {

  constructor() {
    var div = this.getDiv();
    var canvas = this.getCanvas();
    var span = this.getSpan();
    var bt_prev = this.getBtPrev();
    var bt_next = this.getBtNext();
    var tf_color = this.getInputColor();

    div.appendChild(canvas);
    div.appendChild(bt_prev);
    div.appendChild(span);
    div.appendChild(bt_next);
    div.appendChild(tf_color);

    this.addElementBody(div);
  }

  addElementBody = (element) => {
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(element);
  };

  getBtPrev = () => {
    var bt_prev = document.createElement("button");
    bt_prev.id = "bt_prev";
    bt_prev.innerHTML = "<";
    return bt_prev;
  };

  getBtNext = () => {
    var bt_next = document.createElement("button");
    bt_next.id = "bt_next";
    bt_next.innerHTML = ">";
    return bt_next;
  };

  getInputColor = () => {
    var inputColor = document.createElement("input");
    inputColor.id = "tf_color";
    inputColor.type = "color";
    inputColor.value = "#FF0000";
    return inputColor;
  };

  getSpan = () => {
    var span = document.createElement("span");
    span.id = "span";
    span.innerHTML = "...";
    return span;
  };

  getDiv = () => {
    var div = document.createElement("div");
    div.classList.add("center");
    return div;
  };

  getCanvas = () => {
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.classList.add("canvas");
    return canvas;
  };

}