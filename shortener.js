// Declaração das variáveis globais

let resultButton = document.getElementById('shorten');
let refreshtButton = document.getElementById('refresh');

resultButton.addEventListener('click', shortenUrl);

// Método para encurtar a URL

function shortenUrl() {

//Declaração das variáveis locais

    let userUrl = document.getElementById('userUrl').value;
    let endpoint = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(userUrl);
    let endResultUrl = document.getElementById("endResult");

    fetch(endpoint).then(response => response.text()).then(data => {
        endResultUrl.value = data;
    }).catch(
        error => {
            endResultUrl.value = "Desculpe! O encurtador de URL falhou. Tente novamente mais tarde."
        }
    );

    refreshtButton.addEventListener('click', () => {
        location.reload();
    })
}
