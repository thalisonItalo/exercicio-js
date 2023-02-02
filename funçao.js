/* funçao com parametro nada mais do que é uma funçao declarada que tem que voltar com um resultado para a gente.
 e tem o seu nome da funçao e o parametro definido. neste exemplo é uma muultiplicaçao
function multiplicar(a, b) {
    return a * b
}

  var x = multiplicar(5 , 3)
console.log( `o resultado é ${x}` )*/



/* funçao com retorno é quando vc quer q a funçao retorne um valor diferente do padrao segue exemplo:

const carro = {
    modelo: 'X6',
    fabricante: 'BMW',
    NomeCompleto: function() {
        return `${this.fabricante} ${this.modelo}`
    }

}
console.log(carro.NomeCompleto());
*/


/*
function precos(mouse,teclado){
let totalItens = mouse + teclado
console.log("novo preço: "+totalItens)
}

precos(35,100)
*/

/*
let nameletters = (name) => name.length
console.log(nameletters('thalison'))
*/

/*
var dolar = (a) => a*5.02

console.log(dolar (1000))
*/


function maior(n1, n2) {
    if (n1 > n2)
        return n1
    else
        return n2
}

console.log(maior(25, 40))














