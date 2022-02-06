let rindas = document.querySelector(".rindas");
async function iegutDarglietasNoApi() {
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson = await datiNoApi.json();
    // console.log(datiJson);
    return datiJson
}

async function iegutElectronicsNoApi() {
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/electronics');
    let datiJson = await datiNoApi.json();
    // console.log(datiJson);
    return datiJson
}

async function iegutDarbaLaiksNoApi() {
    let datiNoApi = await fetch('https://normundsb.github.io/apiUnFetch/darbalaiks.json');
    let datiJson = await datiNoApi.json();
    // console.log(datiJson);
    return datiJson
}
async function raditDatus() {
    let darglietasJson = await iegutDarglietasNoApi();
    let electronicsJson = await iegutElectronicsNoApi();
    let produktiKopa = darglietasJson.concat(electronicsJson);
    //console.log(produktiKopa);

    rindas.innerHTML = "";
    for (let i = 0; i < produktiKopa.length; i++) {
        //console.log(produktiKopa[i]["title"])
        rindas.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${produktiKopa[i]["title"]}</td>
        <td>${produktiKopa[i]["price"]}</td>
        </tr>
        `;
    }
}

raditDatus();