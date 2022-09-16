class Delivery {
    render() {
        let html = `
            <div class="delivery-content">
                <div class="delivery-content__title">Курьерская доставка до двери</div>
                <div class="delivery-content__item">
                    <span>Заказы на сумму от 5 000 ₽</span>
                    <div class="delivery-content__dotted"></div>
                    <span>Бесплатно в пределах МКАД</span>
                </div>
                <div class="delivery-content__item">
                    <span>Заказы на сумму менее 5000 ₽</span>
                    <div class="delivery-content__dotted"></div>
                    <span>199 ₽</span>
                </div>
                <div class="delivery-content__item">
                    <span>Доставка за пределы МКАД</span>
                    <div class="delivery-content__dotted"></div>
                    <span>от 390 ₽</span>
                </div>
                <div class="delivery-content__item">
                    <span>Срочная доставка в день заказа</span>
                    <div class="delivery-content__dotted"></div>
                    <span>399 ₽</span>
                </div>

                <div class="delivery-content__title">Оплата</div>
                <div class="delivery-content__item">
                    <span>Наличными или банковской картой Visa/MasterCard при получении в пункте выдачи</span>
                </div>
            </div>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const deliveryPage = new Delivery();
// рендер вызываем в header по клику