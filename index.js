const album = document.getElementById("album");
const figuritas = Array.from({ length: 264 }, (_, i) => i + 1); //Esta formula del arrar nos va a indicar que existen 264 valores dentro del array
let contnum = 0; //Creamos un contador para los numeros que se seleccionan

let clickeados = JSON.parse(localStorage.getItem("figuritasClickeadas")) || []; //Establecemos una formula para utilizar localStorage dentro de nuestro codigo

for (let i = 0; i < figuritas.length; i++) { //Creamos el for para que recorra todas las 264 figuritas
    const numero = figuritas[i]; //Creamos una variable que nos va a iterar todos los resultados del for
    const boton = document.createElement("button");//Creamos un boton por cada iteracion
    boton.classList.add("boton-circulo");//damos una clase al boton para hacerle estilo en css
    boton.innerText = numero; //Aqui vamos a poner un texto en los botones, el cual es igual a las iteraciones, 1-2-3...

    if (clickeados.includes(numero)) {//Vamos a crear una condicion que nos diga que si la iteracion esta dentro del localStorage, al actualizarse va a quedar con color verde
        boton.style.backgroundColor = "green";
        contnum++;
    }

    boton.onclick = () => { //Al clickear algun boton, se va a realizar lo siguiente
        if (!clickeados.includes(numero)) {//Si se clickea un boton que no este en localStorage
            clickeados.push(numero);//Aqui se los va a almacenar
            localStorage.setItem("figuritasClickeadas", JSON.stringify(clickeados));//y aqui al almacernarlo se actualiza la lista con los nuevos valores almacenados mas los anteriores
            boton.style.backgroundColor = "green";//definimos el color de los botones al ser seleccionados
            contnum++;//y al seleccionarse se va a aumentar los valores
            actualizarTexto();//Ingresamos la funcion para actualizar el texto con los valores seleccionados
        }
    };

    album.appendChild(boton);//Esto va a agregar los botones dentro del div el cual tiene como id a "album" en el HTML
}

function actualizarTexto() {//Creamos una funcion que nos va a imprimir la cantidad de figuritas que nos falta rellenar
    document.getElementById("figuritas").innerText = `Te faltan ${contnum} figuritas para llenar el álbum`;
}

actualizarTexto();//Por ultimo llamamos la funcion
