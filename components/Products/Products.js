class Products {
    constructor() {
        this.actveClass = 'catalog-element__btn-active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const {products, productIsPushed} = localStorageUtil.putProducts(id);    

        if (productIsPushed) {
            element.classList.add(this.actveClass);
            element.innerHTML = this.labelRemove;

            element.style.position = 'relative';

            const img = document.createElement('img');
            img.src = 'components/Products/img/clouds-pop.gif';
            img.style.cssText = `
                width: 100px;
                height: 100px;
                position: absolute;
                z-index: 1000;
                top: -50px;
                left: 2px;
            `;

            element.append(img);
            setTimeout(() => {
                img.remove();
            }, 850);
            
        } else {
            element.classList.remove(this.actveClass);
            element.innerHTML = this.labelAdd;
        }
        
        headerPage.render();
    }

    render(catalog = CATALOG) {
        const catalogFromLocalStorage = localStorageUtil.getProducts();
        let htmlCatalog = '';

        catalog.forEach(({id, name, img, price}) => {

            let btnLabelForRender = '';
            let btnActiveClassForRender = '';

            if (catalogFromLocalStorage.indexOf(id) === -1) {
                btnLabelForRender = this.labelAdd;
            } else {
                btnActiveClassForRender = ' ' + this.actveClass;
                btnLabelForRender = this.labelRemove;
            }

            htmlCatalog += `
                <li class="catalog-element">
                    <span class="catalog-element__name">${name}</span>
                    <img class="catalog-element__img" src="${img}" /> 
                    <span>${price.toLocaleString()} ₽</span>
                    <button class="catalog-element__btn${btnActiveClassForRender}" onclick="productsPage.handleSetLocationStorage(this, ${id})">
                        ${btnLabelForRender}
                    </button>
                </li>
            `;
        });

        let html = `
                <ul class="catalog-container">
                    ${htmlCatalog}
                </ul>
            `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
// рендер вызываем в главном файле index.js