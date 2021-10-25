import { AdicionaValor } from "./adicionaValor.js"

let selectDE = document.querySelector('#selectDE')
let selecttPARA = document.querySelector('#selectPARA')
let pegaValorInput = document.querySelector('#input-num')
var milimetro = 'Milímetro'
var kilometro = 'Quilômetro'
var metros = 'Metro'
var centimetros = 'Centímetro'


let $pegaButtonCalcular = document.querySelector('#button-calcular')
$pegaButtonCalcular.addEventListener('click', (e)=>{
    e.preventDefault()
    let valor = 0
    let DE = selectDE.value
    let PARA = selecttPARA.value
    let numeroDigitado = pegaValorInput.value

    //se o valor "Converter de for milimetro e converter para for kilometro"
    if(!numeroDigitado|| typeof numeroDigitado == undefined || numeroDigitado == null || numeroDigitado<0){
        alert("Número inválido.")
        // return false;
    }
    else{
        if (DE == milimetro){
            if(PARA === milimetro)
            {
                valor = numeroDigitado
                AdicionaValor(valor, numeroDigitado,milimetro,milimetro)
                
            }
            else if(PARA === centimetros){
                let milimetroPARAcentimetros = numeroDigitado/10
                valor = milimetroPARAcentimetros
                AdicionaValor(valor, numeroDigitado,milimetro, centimetros)
            }
            else if (PARA === kilometro){
                let milimetroPARAkm = numeroDigitado/1000000
                valor = milimetroPARAkm
                AdicionaValor(valor, numeroDigitado,milimetro,kilometro)
            }
            else if(PARA === metros){
                let milimetroPARAmetros = numeroDigitado/1000
                valor = milimetroPARAmetros
                AdicionaValor(valor, numeroDigitado,milimetro,metros)
            }
        
        }

        else if(DE == kilometro){
            if(PARA === kilometro){
                valor = numeroDigitado
                AdicionaValor(valor, numeroDigitado,kilometro, kilometro)
                
            }
            else if(PARA === milimetro){
                
                let kilometroPARAmilimetro = numeroDigitado * Math.pow(10,6)
                valor = kilometroPARAmilimetro
                AdicionaValor(valor, numeroDigitado,kilometro, milimetro)
            }
            else if(PARA === centimetros){
                let kilometroPARAcentimetros = numeroDigitado*100000
                valor = kilometroPARAcentimetros
                AdicionaValor(valor, numeroDigitado,kilometro, centimetros)
            }
            else if(PARA === metros){
                let kilometroPARAmetros = numeroDigitado*1000
                valor = kilometroPARAmetros
                AdicionaValor(valor, numeroDigitado,kilometro, metros)
            }
        }

        else if(DE == metros){
            if(PARA === metros){
                valor = numeroDigitado
                AdicionaValor(valor, numeroDigitado,metros, metros)
                
            }
            else if(PARA === milimetro){
                let metrosPARAmilimetro = numeroDigitado * Math.pow(10,3)
                valor = metrosPARAmilimetro
                AdicionaValor(valor, numeroDigitado,metros, milimetro)
            }
            else if(PARA === centimetros){
                let metrosPARAcentimetros = numeroDigitado*100
                valor = metrosPARAcentimetros
                AdicionaValor(valor, numeroDigitado,metros, centimetros)
            }
            else if(PARA === kilometro){
                let metrosPARAkilometro = numeroDigitado/1000
                valor = metrosPARAkilometro

                AdicionaValor(valor, numeroDigitado,metros, kilometro)
            }
        }
        
        else if(DE == centimetros){
            if(PARA === centimetros){
                valor = numeroDigitado
                AdicionaValor(valor, numeroDigitado,centimetros, centimetros)
            }
            else if(PARA === milimetro){
                let centimetrosPARAmilimetro = numeroDigitado * 10
                valor = centimetrosPARAmilimetro
                AdicionaValor(valor, numeroDigitado,centimetros, milimetro)
            }
            else if(PARA === metros){
                let centimetrosPARAmetros = numeroDigitado/100
                valor = centimetrosPARAmetros
                AdicionaValor(valor, numeroDigitado,centimetros, metros)
            }
            else if(PARA === kilometro){
                let centimetrosPARAkilometro = numeroDigitado/100000
                valor = centimetrosPARAkilometro
                AdicionaValor(valor, numeroDigitado,centimetros, kilometro)
            }
        }
    }
   
})
