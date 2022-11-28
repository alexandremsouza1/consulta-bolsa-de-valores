function montaTabela(data, moedas) {
    data.forEach((moeda, index) => {
        let title = moedas[index] + "BRL";
        let moedaData = moeda[title];
        console.log(moedaData);
    });
}
