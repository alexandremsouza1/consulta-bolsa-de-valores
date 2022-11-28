async function consultaApi(array) {
    let listaDeMoedas = [];

    for (moeda in array) {
        await fetch(
            `https://economia.awesomeapi.com.br/last/${array[moeda]}-BRL`
        )
            .then((resp) => resp.json())
            .then((titulo) => listaDeMoedas.push(titulo))
            .catch((err) => console.log("Erro de solicitação:", err));
    }

    return listaDeMoedas;
}
