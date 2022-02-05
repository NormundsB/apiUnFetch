async function iegutDarglietasNoApi() {
    let datiNoApi = fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson = await datiNoApi.json();
    console.log(datiJson);
}