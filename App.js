

function asign_text(selector,text) {return document.querySelector(selector).innerHTML = text;}

let text_input = document.querySelector("#sandbox");
let button_copy = document.querySelector(".button_response");
let background_response = document.querySelector(".background");
let button_ =   document.querySelector("#copy_");
asign_text("#subtitle_response", "Ningún mensaje fue encontrado");

asign_text("#text_response", "Ingresa el texto que desees encriptar o desencriptar");

function encriptar(value) {

    const keys = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    const reversedLkeys = Object.keys(keys).reduce((accum, next) => {
        const value = keys[next];
        accum[value] = next;
        return accum;
    }, {});

    if (value == true) {
        dic = keys;
    } else if (value == false) {
        dic = reversedLkeys;
    }

    if ((text_input.value).length == 0) { 
        asign_text("#subtitle_response", "No se ha encontrado texto");
        asign_text("#text_response", "");
        return;
    }

    function preRegExp(diccionario){
        const preRegex = Object.keys(diccionario).reduce((accum, next) => accum+"|"+next);
        return new RegExp(preRegex, 'g')
    }

    let text_response = (text_input.value).replace(preRegExp(dic), (match) => dic[match]);

    background_response.setAttribute("style", "display: none;");
    button_copy.setAttribute("style", "display: block;");
    button_.removeAttribute("disabled");

    asign_text("#text_response", text_response);
    asign_text("#subtitle_response", "");

    button_.addEventListener('click', () => {
        navigator.clipboard.writeText(text_response);
    })
}
