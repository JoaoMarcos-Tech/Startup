
let carrinho = []; // guarda os produto do carrinho

function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ","); // transformar os preços em R$ 2,00
}

function adicionarCarrinho(nomeProduto, precoProduto) {

    carrinho.push({     //ao clicar no botão comprar, adiciona o produto e preço no carrinho
        nome: nomeProduto,
        preco: precoProduto
    });

    alert(nomeProduto + " adicionada ao carrinho!");
    atualizarCarrinho();
}

function limparCarrinho() {
                             //função para limpar o carrinho
    carrinho = [];
    atualizarCarrinho();
}

                                    //Mostrar produtos e total no carrinho
function atualizarCarrinho() {

    let lista = document.getElementById("lista-carrinho");
    let total = 0; //cria um contador zerado

    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

                     //estruturaa de repeetição para cada produto selecionado
                    
    for (let i = 0; i < carrinho.length; i++) {
        lista.innerHTML += "<p>" + carrinho[i].nome + " - " + formatarPreco(carrinho[i].preco) + "</p>";
        total = total + carrinho[i].preco;
    }

    document.getElementById("quantidade-carrinho").innerText = carrinho.length;
    document.getElementById("total-carrinho").innerText = "Total: " + formatarPreco(total);
}

atualizarCarrinho(); // sempre que atualizar a página o carrinho está zerado
