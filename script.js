let rindas = document.querySelector(".rindas");
let rindas2 = document.querySelector(".rindas2");

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

async function iegutDarbaLaiksNoApi() {
    let datiNoApi = await fetch('https://normundsb.github.io/apiUnFetch/darbalaiks.json');
    let datiJson = await datiNoApi.json();
    // console.log(datiJson);
    return datiJson
}
async function raditDatus2() {
    let vietasLv = await iegutDarbaLaiksNoApi();
    console.log(vietasLv);
    //rindas2.innerHTML = "";
    // let vietasLvJSON = JSON.parse(vietasLv)
    // console.log(vietasLvJSON);
    vietasLv = vietasLv['vietas']
    console.log(vietasLv);
    for (let i = 0; i < vietasLv.length; i++) {
        //console.log(produktiKopa[i]["title"])
        console.log(vietasLv[1]);
        rindas2.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${vietasLv[i]["pilseta"]}</td>
        <td>${vietasLv[i]["darbalaiks"]}</td>
        </tr>
        `;
    }
}

raditDatus();
raditDatus2();


