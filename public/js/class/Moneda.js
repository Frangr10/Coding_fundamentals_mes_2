import Div from "../component/Div.js";
import Data from "./Data.js";
import View from "./View.js";
import Jugador from "./../class/Jugador.js";

class Moneda extends View{
    #container;
    #jugador1;
    #jugador2;
    #random;
    #active;
    constructor(){
        console.log(localStorage);
        super();
        this.#random=Math.floor(Math.random()*(10-1+1))+1;
        let datos=[Data.loadData("Jugador1"),Data.loadData("Jugador2")];
        this.#jugador1=new Div(`${Jugador.cargarJugador(datos[0]).Nombre}`,"giro","giro","giro","");
        this.#jugador2=new Div(`${Jugador.cargarJugador(datos[1]).Nombre}`,"giro1","giro1","giro1","");
        this.#container=new Div(`
              ${this.#jugador1.crearDiv()}
              ${this.#jugador2.crearDiv()}
        `,"container_giro","c_giro","container_giro","");
        this.#active=true;
    }

    view(){
       return(
           `
           ${this.#container.crearDiv()}
           `
       )
    }

    event(){
        document.querySelector(this.#jugador1.P_Clase).style.zIndex="1";
        document.querySelector(this.#jugador2.P_Clase).style.zIndex="-1";

        let contador=0;
        const ganador=this.#random;
        //console.log("Holaaa :v",this.getTurno(1),this.getTurno(2));
        const cambio=setInterval(()=>{
            
            let moneda=document.querySelector(this.#jugador1.P_Clase);
            let moneda1=document.querySelector(this.#jugador2.P_Clase);
            //console.log(moneda.style)
            moneda.style.zIndex=(moneda.style.zIndex=="1")?'-1':'1';
            //style.transform=trasitionX
            moneda1.style.zIndex=(moneda1.style.zIndex=="1")?'-1':'1';
            contador++;
            if(contador>ganador){
                this.#active=false;
                clearInterval(cambio);
            }

        },1000,contador,ganador)
    }
    get Container(){
        return this.#container;
    }
    get Active(){
        return this.#active;
    }
    set Random(random=-1){
       this.#random=random;
    }

    get Random(){
        return this.#random;
    }
    
    getTimer(){
        return this.#random*1000;
    }

    getTurno(valor=0){
        if(valor==1){
            return (this.#random%2==0)?2:1;
        }else{
            return (this.#random%2==0)?1:2;
        }
    }
}

export default Moneda;

/*
por hacer animacion moneda
        render.innerHTML=`
        <div class="container_giro">
            <div class="giro">Carlos</div>
            <div class="giro1">Pedro</div>
        </div>
        `;

 

*/
