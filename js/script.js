const perguntas = [
    {
        pergunta: "Qual é a função do operador '+' em Python?",
        respostas: [
            "Concatenar strings",
            "Realizar adição numérica",
            "Multiplicar números"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma lista em Python?",
        respostas: [
            "Um tipo de dado que armazena elementos ordenados e mutáveis",
            "Um operador matemático",
            "Um tipo de dado que armazena elementos imutáveis"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função da instrução 'if' em Python?",
        respostas: [
            "Definir loops",
            "Realizar comparações condicionais",
            "Declarar funções"
        ],
        correta: 1
    },
    {
        pergunta: "O que são métodos em Python?",
        respostas: [
            "Blocos de código que são executados quando uma classe é instanciada",
            "Funções que pertencem a objetos e podem ser chamadas para realizar operações específicas",
            "Instruções de controle de fluxo"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o operador '%' em Python?",
        respostas: [
            "Operador de atribuição",
            "Operador de módulo",
            "Operador de exponenciação"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'append()' em listas Python?",
        respostas: [
            "Remover elementos de uma lista",
            "Adicionar elementos ao final de uma lista",
            "Ordenar uma lista"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma tupla em Python?",
        respostas: [
            "Um tipo de dado que armazena elementos ordenados e mutáveis",
            "Um tipo de dado que armazena elementos imutáveis",
            "Um operador lógico"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função da instrução 'for' em Python?",
        respostas: [
            "Realizar comparações condicionais",
            "Iterar sobre sequências de elementos",
            "Definir funções"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em Python?",
        respostas: [
            "Um tipo de dado que armazena elementos imutáveis",
            "Um bloco de código que só pode ser executado uma vez",
            "Um bloco de código que pode ser executado repetidamente, permitindo reutilização"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um dicionário em Python?",
        respostas: [
            "Um tipo de dado que armazena elementos ordenados e mutáveis",
            "Um tipo de dado que armazena elementos imutáveis",
            "Uma estrutura de dados que mapeia chaves para valores"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const totalDeAcertos = document.querySelector('#acertos span')

for (const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for (let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'Pergunta '+perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.lastIndexOf(resposta)
        dt.querySelector('input').onchange = () => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta){
                corretas.add(item)
            }
            totalDeAcertos.textContent = corretas.size + " de " + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)  
}