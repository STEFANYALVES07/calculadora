
/*
resultado abaixo de 17 - muito abaixo do peso;<br>
            resultado entre 17 e 18,49 - abaixo do peso;
            resultado entre 18,5 e 24,99 - peso ideal;
            resultado entre 25 e 24,99 - sobrepeso;
            resultado entre 30 e 34,9 - obesidade grau I
            resultado entre 35 e 39,9 - obesidade grau II (severa);
            resultado acima de 40 - obesidade grau III (mórbida);
*/
var altura;
var peso;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");

    if (imc < 17){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> cuidado voce está muito abaixo do peso!";
    } else if (imc >= 17 &&  imc <= 18.49){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> abaixo do peso!";
    } else if (imc >= 18.5 && imc<= 24.99){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> voce está no peso ideal!";
    } else if (imc >= 25 && imc <=29.99){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> voce está com sobrepeso!";
    } else if (imc >= 30 && imc <= 34.99){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    } else if (imc >= 35 && imc <= 39.99){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    } else if (imc >= 40){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}