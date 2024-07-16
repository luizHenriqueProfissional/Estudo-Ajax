// função construtora

function Pessoa(nome){
    this.nome = nome
    this.dizOi = function(){
        console.log(this.nome + " diz olá" )
    }
    this.dizCargo = function(){
        console.log(this.cargo)
    }
}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo;

    //Encapsulamento
    let _salario = salario;

    this.getSalario = function(){
        return _salario;
    }

    //--Aumentando Salario do funcionario--//
    this.setSalario = function(valor){
        if( typeof valor === 'number'){
            _salario = valor
        }
    }
        //Polimorfismo - salario recebe 10% de aumento
        this.aumento = function(){
            const novoSalario = _salario * 1.07
            console.log(novoSalario)
            _salario = novoSalario
        }

    Pessoa.call(this, nome);
}


function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000)

    this.aumento = function(){
        const novoSalario = this.getSalario * 1.07
        this.setSalario = novoSalario;
    }
}



const funcionario1 = new Funcionario("Maria","Dev Front-end", "5000")
const pessoa = new Pessoa("luiz")
// const funcionario2 = new Funcionario("Luiz", "estagiario","2000")
// funcionario1.dizOi();
// funcionario1.dizCargo();
const funcionario2 = new Estagiario("Pedro")


//--Aumentando Salario do funcionario--//
funcionario1.setSalario('7000')

//Parte do encapsulamento
funcionario1.aumento();
console.log(funcionario1.getSalario())


//Polimorfismo - finalizando
funcionario2.aumento();
console.log(funcionario2.getSalario())
