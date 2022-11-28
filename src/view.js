function view(data, moedas, tabela) {
    let html = [];

    data.forEach((moeda, index) => {
        let title = moedas[index] + "BRL";
        let moedaData = moeda[title];
        html.push(tabelaHtml(moedaData));
    });

    linhasHtml = html.join("");
    tabela.innerHTML = linhasHtml;
}

function tabelaHtml(moedaData) {
    let linha = `
    <tr>
        <td>${moedaData.code}</td>
        <td>${descricao(moedaData.name)}</td>
        <td>${numberParaReal(moedaData.ask)}</td>
        <td>${numberParaReal(moedaData.bid)}</td>
        <td>${moedaData.pctChange}%</td>
        <td>${formataData(moedaData.create_date)}</td>
    </tr>
    `;

    return linha;
}

function descricao(name) {
    const nomeArray = name.split("/");
    return nomeArray[0];
}

function numberParaReal(number) {
    const value = Number(number);
    return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}

function formataData(date) {
    const dateArray = date.split(" ");
    const datePadrao = dateArray[0].split("-").reverse().join("/");
    return `${datePadrao} ${dateArray[1]}`;
}
