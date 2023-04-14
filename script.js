const objs = 
[   
    {
    nome: 'Gabrielle',
    idade: 35,
    esta_trabalhando: true,
    detalhes_profissao: {
        profissao: 'Programador',
        empresa: 'Empresa1'
    },
    hobbies: ['Ler', 'Jogar', 'Cantar']
    }
]

console.log(objs)

//JSON
//Converter Objeto para JSON
const jsonData = JSON.stringify(objs)


//converter json para objeto
const objData = JSON.parse(jsonData)


objData.map((pessoa) => {
    console.log(pessoa.nome)
})

