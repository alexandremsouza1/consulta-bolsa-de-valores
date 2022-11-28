function montaTabela(data, moedas, tabela) {
    let html = [];
    data.forEach((moeda, index) => {
        let title = moedas[index] + "BRL";
        let moedaData = moeda[title];
        html.push(tabelaHtml(moedaData));
    });
    tabela.innerHTML = html;
}

function tabelaHtml(moedaData) {
    let linha = `
    <tr>
        <td>${moedaData.code}</td>
        <td>${moedaData.name}</td>
        <td>${moedaData.ask}</td>
        <td>${moedaData.bid}</td>
        <td>${moedaData.pctChange}%</td>
        <td>${moedaData.create_date}</td>
    </tr>
    `;

    return linha;
}
