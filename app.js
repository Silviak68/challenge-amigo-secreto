//Cria um array e armazena os nomes dos amigos
let amigos =[];

function adicionarAmigo(){
    inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();
    if(nomeAmigo === ""){ 
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(inputAmigo.value);
    console.log(amigos);
    inputAmigo.value = "";
    inputAmigo.focus();
}

const listaAmigos = document.getElementById("amigos");
//transforma o array em uma lista de nomes
amigos.forEach(amigo => {
     const novoItem = document.createElement('li');
     novoItem.textContent = amigo;
    lista.appendChild(novoItem);
});


function sortearAmigo(){
    if(amigos.length < 2){
        // remove o último nome para reiniciar a lista
        amigos.pop();
        alert("Fim do sorteio! Reiniciando a lista...");
        return;
    }
    //sorteia um amigo e remove o nome da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    alert(`O amigo sorteado foi: ${amigoSorteado}`);
    amigos.splice(indiceSorteado, 1);
}



