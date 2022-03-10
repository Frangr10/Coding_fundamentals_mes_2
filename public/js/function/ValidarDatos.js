/*
 parametros de validarDatos
 
 1) tipo de validacion:typeDal
       valores posibles -> numero-> 0:funciones , 1:String , 2:objetos, 3:boleanos, 4:numeros, 5:obj no primario
 
 2) variable a validar:dato 

 3) ¿El dato es primitivo?:isPrimaryDate si=true, no=false

 4) Nombre de la clase programada: obj

 funcionalidad de validarDatos : si no es el dato espeardo retorna un bool y manda un error por consola
*/

export default function validarDato(typeDal,dato={},isPrimaryData=true,obj={}){
    const types= ['fuction','string','object','boolean','number','objeto_user'];
    //const resps=[()=>{},"",{},undefined,NaN,{}];
    
    //let resp_dato;

    let typeDal_is_Good=((!Number.isInteger(typeDal)) || (Number.isNaN(typeDal)))?false:true;
    
    let typeDal_is_rate=(typeDal<0 || typeDal>=types.length )?false:true;
    
    let resp;
    

    if(typeDal_is_Good==true && typeDal_is_rate==true) resp=(typeDal==typeDal.length-1)
    ?(!Number.isInteger(typeDal)) || (Number.isNaN(typeDal))
    :((isPrimaryData)?(typeof dato === types[typeDal]):(dato.constructor.name==obj));

     //resp_dato = resp ? dato  : resps[typeDal];
     
    //if(!resp && (typeDal_is_Good && typeDal_is_rate)) console.error(`funcion validar datos: tipo de dato incorrecto, dato esperado ${(isPrimaryData)?types[typeDal]:obj} dato enviado ${(isPrimaryData)?typeof dato:dato.constructor.name}`);

    if(!typeDal_is_Good) console.error(`funcion validar datos: type no es un numero`);
    if(!typeDal_is_rate) console.error(`funcion validar datos: type esta fuera del rango`);

    //return resp_dato;
    return resp; //retororna indefined si no cumple con el rango del array
}