//FORMA 1 DE CONSTRUIR//
const carroDoJoao = {
    //Atributos//
    modelo: 'fiesta',
    fabricante: 'ford',
    anoModelo: '2020',
    anoFabricacao: '2019',

    //Metodos//
    acelerar: function(){
        console.log("Vrum")
    }
}

const carroDaMaria = {
    //Atributos//
    modelo: 'Ka',
    fabricante: 'ford',
    anoModelo: '2021',
    anoFabricacao: '2020',

    //Metodos//
    acelerar: function(){
        console.log("Vrum")
    }
}



//FORMA 2 - FUNÇÕES CONSTRUTURAS//

function Carro (modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function(){
        console.log("vrum");
    }
}

const carroDoJoao2 = new Carro("Fiesta","Ford","2020","2019");
const carroDaMaria2 = new Carro("Ka","Ford","2021","2020");

console.log(carroDoJoao2)
console.log(carroDaMaria2)


//TIPOS DE INSTÂNCIAS
const nome = "Luiz"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html","css","js"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}
//VERIFICAMOS O TIPO DE VARIAVEL(STRING, NUMBER, BOOLEAN, OBJECT)//
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);

//VERIFICAMOS SE É UMA INSTÂNCIA DE ALGO//
console.log(carroDaMaria2 instanceof Carro)
console.log(conhecimentos instanceof Carro)


//Formas de acessar um atributo de um objeto

//Forma 1
//console.log(pessoa.nome);

//Forma 2
//console.log(pessoa['nome'])

//Forma 3
function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}
exibeAtributo('nome');
//Cria atributo sobrenome dentro da variavel pessoa, (in) verifica se o atributo pessoa está dentro da variavel pessoa, se sim ele dispara uma mensagem
pessoa['sobrenome'] = undefined

if('sobrenome' in pessoa){
    console.log('Tem sobrenome')
}

//Cria um array na constante pessoa
console.log(Object.keys(pessoa).length);

