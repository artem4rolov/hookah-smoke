function renderPage() {
    const products = localStorageUtil.getProducts();

    headerPage.render(products.length);
    productsPage.render();

}

spinnerPage.render();

let CATALOG = [];

// http://myjson.dit.upm.es/api/bins/h6j0
// https://api.jsonbin.io/v3/b/62fe50935c146d63ca74b11d
// server/catalog.json

fetch('http://myjson.dit.upm.es/api/bins/h6j0')
    .then(res => res.json())
    .then(data => {
        CATALOG = data;
        spinnerPage.hendleClear();
        renderPage();  
    })
    .catch(error => {
        console.log(error);
        errorPage.render(error);
    })