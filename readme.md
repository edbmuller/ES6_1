# Code demo: Curso JavaScript (ECMA6) - I
JavaScript avançado I: ES6, orientação a objetos e padrões de projetos

Neste documento estão as referências de estudo das novidades que encontrei no curso. 
Link pros commits, com comentários mais práticos a respeito do código.

## Aula 1 - Especificando o Modelo

###### [_02_](https://github.com/edbmuller/ES6_1/commit/8aad0b656f708a456082450ba8239839d93cdce2) Criando a classe
* [constructor](https://www.w3schools.com/js/js_object_constructors.asp) - O `construtor` é um _método_ especial para criar e inicializar um objeto criado a partir de uma classe.
* [this](https://www.w3schools.com/js/js_object_constructors.asp) - O valor do `this` é estabelecido segundo o escopo de execução no qual está inserido. Quando a função é usada com um construtor (com a palavra chave new), seu `this` é vinculado ao novo objeto sendo contruído.
* [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) - O _operador_ `new` cria uma instância de um _user-defined object type_ ou de um dos _built-in object types_ que tem uma função constructor. 


###### [_03_](https://github.com/edbmuller/ES6_1/commit/693ea32852a39015e099ba306c2d6bdb158c311f) Construtor e Métodos 
* [methods](https://www.w3schools.com/js/js_object_methods.asp) - A JavaScript method is a property containing a function definition. 

You access an object method with the following syntax:
```javascript
objectName.methodName();
```


###### [_04_ / _05_](https://github.com/edbmuller/ES6_1/commit/40ce9baeaed9faf15110b876ba683efdebf58835) Convenção encapsulamento e sintaxe get
* [Naming convention](https://snowdream.github.io/javascript-style-guide/javascript-style-guide/br/naming-conventions.html) - Usar underscore `_` como primeiro caracter na declaração de _propriedades privadas_.
* [get](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get#Sintaxe) - A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.

```javascript
//declarando
get propriedade() {
    return this._propriedade;
}

//acessando a propriedade
objectName.propriedade;
```


