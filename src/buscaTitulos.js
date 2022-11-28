const form = document.getElementById("buscaTituloForm");
const pluList = document.getElementById("titulos");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const array = _stringParaArray(pluList.value);
    data = await consultaTitulos(array);
    montaTabela(data, array);
});

function _stringParaArray(string) {
    const pluString = string.replace(/\s/g, "");
    const pluArray = pluString.split(",");
    return pluArray;
}
