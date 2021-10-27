const form = document.querySelector('#form-principal')
const $button = document.querySelector('#button-calcular')
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const $input_ = document.querySelector('#input-num')
    const valor_input = $input_.value
    console.log(valor_input)

    const formData = new FormData(this)
    const searchParams = new URLSearchParams()

    for (const pair of formData){
        searchParams.append(pair[0],pair[1])
    }

    fetch("/calculadora/add-valor",{
        method: 'POST',
        body: searchParams
    }).then(response => response.json())
})

