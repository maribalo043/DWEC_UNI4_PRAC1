export default class Galeria {

    constructor(numero){
        this._posicion = numero;
        this._lista = new Array(numero);
        for(var i = 0;i<numero;i++){
            this.lista[i] = "foto"+(i+1)+".jpg";
        }
    }

    numeroAleatorio(){
        var numero = Math.floor((Math.random() * 7));
        this._posicion = numero
        return this._lista[numero];
    }
    irPrimero(){
        this._posicion = 0;
        return this._lista[this._posicion];
    }
    irFinal(){
        this._posicion = (this._lista.length-1)
        return this._lista[this._lista.length - 1];
    }
    avanzar(){
        if(this._posicion<this._lista.length-1){
            this._posicion ++;
        }
        return this._lista[this._posicion];
    }
    retroceder(){
        if(this._posicion>0){
            this._posicion --;
        }
        return this._lista[this._posicion];
    }
  get posicion() {
    return this._posicion;
  }
  set posicion(nuevaPosicion) {
    this._posicion = nuevaPosicion;
  }
  get lista() {
    return this._lista;
  }
  set lista(nuevaLista) {
    this._lista = nuevaLista;
  }
}