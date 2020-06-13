/*
  Autor: Daniel dos Santos
  Data: 11/04/2020
  Observação: Classe que retorna objetos de elementos da tela.
*/

class Control {

  static getTfColor = () => {
    return document.getElementById("tf_color");
  };

  static getBtNext = () => {
    return document.getElementById("bt_next");
  };

  static getBtPrev = () => {
    return document.getElementById("bt_prev");
  };

  static getSpan = () => {
    return document.getElementById("span");
  };

  static getCanvas = () => {
    return document.getElementById("canvas");
  };

  static getContext = () => {
    return this.getCanvas().getContext("2d");
  };
  
}