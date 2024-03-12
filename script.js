const key = "2b5d1578b0b0df5facbb5e1b300e3d5a";

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".texto-previsao").innerHTML = traduzirTempo(dados.weather[0].description);
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt-br&units=metric`)
        .then(resposta => resposta.json());
    
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

// Função para traduzir a descrição do tempo para português
function traduzirTempo(descricao) {
    switch (descricao) {
        case 'clear sky':
            return 'céu limpo';
        case 'few clouds':
            return 'poucas nuvens';
        case 'scattered clouds':
            return 'nuvens dispersas';
        case 'broken clouds':
            return 'nuvens quebradas';
        case 'overcast clouds':
            return 'nuvens nubladas';
        case 'light rain':
            return 'chuva leve';
        case 'moderate rain':
            return 'chuva moderada';
        case 'heavy intensity rain':
            return 'chuva intensa';
        case 'very heavy rain':
            return 'chuva muito intensa';
        case 'extreme rain':
            return 'chuva extrema';
        case 'freezing rain':
            return 'chuva congelante';
        case 'light intensity shower rain':
            return 'chuva leve';
        case 'shower rain':
            return 'chuva forte';
        case 'heavy intensity shower rain':
            return 'chuva intensa';
        case 'ragged shower rain':
            return 'chuva forte e irregular';
        case 'light snow':
            return 'neve leve';
        case 'Snow':
            return 'neve';
        case 'Heavy snow':
            return 'neve pesada';
        case 'Sleet':
            return 'granizo';
        case 'Light shower sleet':
            return 'chuva leve de granizo';
        case 'Shower sleet':
            return 'chuva de granizo';
        case 'Light rain and snow':
            return 'chuva leve e neve';
        case 'Rain and snow':
            return 'chuva e neve';
        case 'Light shower snow':
            return 'neve leve';
        case 'Shower snow':
            return 'neve';
        case 'Heavy shower snow':
            return 'neve pesada';
        case 'mist':
            return 'névoa';
        case 'Smoke':
            return 'fumaça';
        case 'Haze':
            return 'névoa seca';
        case 'sand/ dust whirls':
            return 'redemoinhos de areia/poeira';
        case 'fog':
            return 'névoa';
        case 'sand':
            return 'areia';
        case 'dust':
            return 'poeira';
        case 'volcanic ash':
            return 'cinzas vulcânicas';
        case 'squalls':
            return 'rajadas de vento';
        case 'tornado':
            return 'tornado';
        default:
            return descricao;
    }
}

// Adicionando um event listener para o botão de pesquisa
document.querySelector(".botao-buscar").addEventListener("click", cliqueiNoBotao);