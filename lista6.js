/*1) Programe um pequeno sistema onde o usuário digite 10 números (um de cada vez) e os mostre de forma ordenada, crescente. (Utilizar push, sort)*/

function testarP1() {
    let lista10Num = []
    let numUsuario
    for (i = 0; i < 10; i++) {
        numUsuario = Number(prompt("Insira um número: "))
        lista10Num.push(numUsuario)
    }
    alert(`Lista de 10 números, na ordem em que foram inseridos: ${lista10Num} \n Lista de 10 números em ordem crescente:: ${lista10Num.sort(function (a, b) { return a - b })}`)

}

/*2) Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. Desenvolver um programa que remova os 10 últimos números para corrigi-la. Mostrar a lista corrigida na tela. (Utilizar pop)*/
function testarP2() {
    //cria a lista com os 15 valores
    let lista15Num = []
    for (i = 1; i <= 16; i++) {
        lista15Num.push(i)
    }
    alert(`Temos uma lista com 15 números: ${lista15Num}. \n Porém, nossa lista deveria ter apenas os 5 primeiros. \n Clique em 'OK' para eliminar os últimos 10 valores.`)

    //elimina o ultimo valor utilizando pop()
    for (i = 15; i >= 5; i--) {
        lista15Num.pop()
    }
    alert(`Lista atualizada: ${lista15Num}.`)

}

/*3) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações. (Utilizar push, sort)*/
function testarP3() {

    let lista5Num = []
    let numUsuario

    for (i = 0; i < 5; i++) {
        numUsuario = Number(prompt("Insira um número: "))
        lista5Num.push(numUsuario)
    }

    //ordenar em ordem crescente
    lista5Num.sort(function(a, b) { return a - b })

    //pegar o maior valor 
    let maiorDe5 = lista5Num[lista5Num.length - 1]

    //loop para multiplicacao e soma
    let somaMultiplicacao = 0
    for (i = 0; i < (lista5Num.length - 1); i++) {
        somaMultiplicacao += lista5Num[i] * maiorDe5
    }

    //mostrando os dados na tela
    alert(`Em ordem crescente, os números inseridos foram: ${lista5Num}. \n A soma dos 4 primeiros valores multiplicados por ${maiorDe5} é: ${somaMultiplicacao}.`)
}

/*4) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”. (Usar push, lastIndexOf)*/
function testarP4() {
    let anosAlistamento = []
    let inputAlistamento
    let ultimoAnoAlistamento

    //loop para perguntar se houve alistamento entre 2000 e 2009
    for (i = 2000; i < 2010; i++) {
        inputAlistamento = prompt(`Houve alistamento no ano ${i}? \n(Obs: 'S' para sim, 'N' para nao).`)
        anosAlistamento.push(inputAlistamento)

        //procura ultimo ano de alistamento comparando variaveis
        if (inputAlistamento == "S") {
            ultimoAnoAlistamento = i
        }
    }

    //apresentando resultado na tela
    if (ultimoAnoAlistamento == undefined) {
        alert(`Não houve alistamento nos últimos 10 anos.`)
    } else {
        alert(`Último ano de alistamento: ${ultimoAnoAlistamento}`)

    }
}

/*5) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco. (Utilizar push, unshift e concat).
 */
function testarP5() {
    let coresPrimarias = []
    let coresSecundarias = []
    let inputCorPrimaria
    let inputCorSecundaria

    //loop para cores primarias
    for (i = 0; i < 3; i++) {
        inputCorPrimaria = prompt("Insira uma cor primária: ")
        coresPrimarias.push(inputCorPrimaria)
    }

    //loop para cores secundarias
    for (j = 0; j < 3; j++) {
        inputCorSecundaria = prompt("Insira uma cor secundária: ")
        coresSecundarias.push(inputCorSecundaria)
    }

    //juntando os dois arrays
    let cores = []
    cores = coresPrimarias.concat(coresSecundarias)

    alert(`A sequência de cores adicionadas é: ${cores}.`)

    //add preto e branco no array, com interacao do usuario
    let respostaUsuario
    respostaUsuario = prompt("Você quer adicionar preto no início da sequência, e branco no final da sequência de cores? Se sim, digite 'S', se não, digite 'N'.")
    if (respostaUsuario === "S") {
        //add preto inicio
        cores.unshift("preto")

        //add branco final
        cores.push("branco")

        alert(`A nova sequência de cores é: ${cores}.`)
    } else {
        alert(`Você optou por não adicionar preto e branco à sequência, a qual se mantém contendo: ${cores}.`)
    }
}