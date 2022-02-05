async function iegutDarglietasNoApi() {
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/jewelery');
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