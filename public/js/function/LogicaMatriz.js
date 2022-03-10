export default function logicaMatriz(matriz=[],valor=-2){
   let validar=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6],[1,4,7],[2,5,8]];
   let gano=false;
   for(let i=0;i<validar.length;i++){
       let g=true;
        for(let j=0;j<validar[i].length;j++){
           if(matriz[validar[i][j]]!=valor){
              g=false;
              break;
           }
       }
       if(g){
           gano=true;
           return {status:gano,jugador:valor,pos:validar[i]};
       }
   }
   return {status:gano,jugador:valor,pos:[]};
}