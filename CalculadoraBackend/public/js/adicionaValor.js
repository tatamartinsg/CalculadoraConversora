const AdicionaValor = (valorConvertido, valorRecebido, medidaRecebida, medidaConvertida) => {
   const $pegaInputHidden = document.querySelector('#input-numconvertido')
   $pegaInputHidden.value = valorConvertido
   console.log($pegaInputHidden.value)
   
   const $pegaTable = document.querySelector('#tabela-valor')
   const criaTr = document.createElement('tr')
   $pegaTable.appendChild(criaTr)
   const criarTd = document.createElement('td')
   criarTd.classList.add('th-digitado2')

   criarTd.innerHTML = `${valorRecebido} ${medidaRecebida}s`
   criaTr.appendChild(criarTd)

   const criarTd2 = document.createElement('td')
   criarTd2.innerHTML = `${valorConvertido} ${medidaConvertida}s`
   criarTd2.classList.add('th-convertido2')
   criaTr.appendChild(criarTd2) 

}
export { AdicionaValor }