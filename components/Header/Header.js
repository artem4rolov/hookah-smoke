class Header {

    contacts() {
        contactsPage.render();
    }

    delivery() {
        deliveryPage.render();
    }

    filter(value) {
        let catalog1;

        if (value === 'вся продукция') {
            return productsPage.render(CATALOG); 
        }

        catalog1 = CATALOG.filter(({id, category, name, img, price}) => category === value);
        productsPage.render(catalog1);
    }

    handlerOpenShoppingModal() {
        // тут откроется модалка из компонента shopping
        shoppingPage.render();
    }

    render() {
        /* берем все товары из локального хранилища */
        const products = localStorageUtil.getProducts();

        // рендерим шапку с иконкой корзины и счетчиком товаров
        const html = `
            <div class="header-container">
                <div class="header-logo">
                    <img src="components/Header/img/hookah.png" class="header-logo__img" />
                </div>
                <div class="header-menu">

                    <ul class="filter-trigger"> Категории
                            <ul class="filter-list">
                                <li class="filter-item" onclick="headerPage.filter('кальяны');">Кальяны</li>
                                <li class="filter-item" onclick="headerPage.filter('аксессуары');">Аксессуары</li>
                                <li class="filter-item" onclick="headerPage.filter('смеси');">Смеси</li>
                                <li class="filter-item" onclick="headerPage.filter('вся продукция');">Вся продукция</li>
                            </ul>
                    </ul>

                    <a href="#" onclick="headerPage.delivery()">Доставка</a>
                    <a href="#" onclick="headerPage.contacts()">Контакты</a>
                
                </div>
                <div class="header-shopping" onclick="headerPage.handlerOpenShoppingModal()">
                    <img class="header-shopping__img" src="img/cart.svg" />
                    <span class="header-shopping__count">${products.length}</span>
                </div>
            </div>
        `;

        // готовую шапку помещаем в блок header
        ROOT_HEADER.innerHTML = html;
    }
}

// всегда создаем экземпляр класса
const headerPage = new Header();
// рендер вызываем в главном файле index.js