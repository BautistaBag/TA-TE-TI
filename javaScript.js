let turno=0;
const tablero = [];
//el const de abajo es para cambair de color cuando hagan click en un boton
const btnPulsado = (e, pos) =>{
    turno ++;
    const btn = e.target;
    //si el turno es par el color es salmon y si es impar el color sera paleGreen 
    const color = turno % 2 ? 'green' : 'red';
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if(haGanado()) alert (`Felicidades jugador: ${color} !!!`);
}

const haGanado = () => {
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[6] == tablero[4] && tablero[6] == tablero[2] && tablero[6]){
        return true;
    }
    return false;
}

//cuando apreto en cualquier button(hago un forEach xq la funcion querySelectorAll me devuelve un array)
document.querySelectorAll('button')
.forEach((obj,i) => obj.addEventListener('click',(e) => btnPulsado(e,i)));
