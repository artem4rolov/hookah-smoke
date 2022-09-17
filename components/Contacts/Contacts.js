class Contacts {
    render() {
        let html = `
            <div class="contacts-content">
                <div class="contacts-content__item">
                    <h2>Контакты</h2>
                    <span class="content__item-bold">Адрес</span>
                    <span>Россия, Москва, Садово-Крестьянская улица, д. 23</span>
                    <span class="content__item-bold">Телефон</span>
                    <span>8(800)999-99-99</span>
                    <span class="content__item-bold">E-mail</span>
                    <span>hookah@smoke.ru</span>
                </div>
                <div class="contacts-content__item">
                    <iframe class="map" src="https://www.google.com/maps/d/u/0/embed?mid=1dnaTMSgO-D_wIgcZkd_uL3jOKWfWjoA&ehbc=2E312F"></iframe>
                </div>
            </div>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

}

const contactsPage = new Contacts();
//рендер вызываем в header по клику