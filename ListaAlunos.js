let listaAlunos = ["Aluno1", "Aluno2", "Aluno3", "Aluno4", "Aluno5", "Aluno6", "Aluno7"]

for(let numero = 0; numero < listaAlunos.length; numero++) {
    if(numero == 0) {
        console.log("O número é zero")
    }
    else if (numero % 2 == 0) {
        console.log(`O numero ${numero} é par`)
    }
    else if (numero % 2 == 1) {
        console.log(`O numero ${numero} é ímpar`)
    }
}