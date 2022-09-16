class Shopping {
    handlerClearCart() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const catalogFromLocalStorage = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sum = 0;

        CATALOG.forEach(({id, name, price}) => {
            if (catalogFromLocalStorage.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr class="shopping-content__item">
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                    </tr>
            `;
                sum += price;
            } else {
                htmlCatalog += '';
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping-close" onclick="shoppingPage.handlerClearCart()"></div>
                <table class="shopping-content">
                    ${htmlCatalog}
                    <tr class="shopping-content__item-result">
                        <td class="shopping-element__result">💥 Итого:</td>
                        <td class="shopping-element__price">${sum.toLocaleString()} ₽</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }

}

const shoppingPage = new Shopping();
// рендер вызываем в файле Header.js