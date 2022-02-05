async function iegutDarglietasNoApi() {
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson = await datiNoApi.json();
    // console.log(datiJson);
    return datiJson
}

async function iegutApgerbuNoApi() {
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/men%20clothing');
    let datiJson = await datiNoApi.json();
    // console.log(datiJson);
    return datiJson
}