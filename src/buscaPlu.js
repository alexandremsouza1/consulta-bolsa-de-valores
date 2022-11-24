const form = document.getElementById("buscaPluForm");
const pluList = document.getElementById("plu");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const array = _stringParaArray(pluList.value);

    console.log(array);
})

function _stringParaArray(string){
    const pluString = string.replace(/\s/g, '');
    const pluArray = pluString.split(",");
    return pluArray;
}