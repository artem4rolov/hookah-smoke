class LocalStorageUtil {
    // объявим часто используемую переменную
    constructor() {
        this.keyName = 'products';
    }
    
    // этот метод будет получать все товары (по сути - строки) из массива в локальном хранилище
    getProducts() {
        // получаем массив товаров (но это пока json)
        let productsInLocalStorage = localStorage.getItem(this.keyName);
        
        // если полученный массив НЕ пуст, то...
        if (productsInLocalStorage !== null) {
            // возвращаем полученный массив с товарами (уже распарсенный JSON)
            return JSON.parse(productsInLocalStorage);
        } else {
            // иначе возвращаем пустой массив
            return [];
        }
    }

    // этот метод будет пушить товары по id (по сути - строки) в массив локального хранилища
    putProducts(id) {
        // снова получаем массив данных из локального хранилища, только уже распарсенный массив
        let products = this.getProducts();
        let productIsPushed = false; /* переменная нужна для понимания, был добавлен товар в массив или нет */
        const index = products.indexOf(id); /* просто для удобства */
 
        // если товар (строка) в локальном хранилище (он же и в каталоге, т.к. id один и тот же) новый (не повторяется) (индекс -1), то пушим его в массив
        if (index === -1) {
            products.push(id);
            productIsPushed = true; /* это для понимания, что товар был добавлен в массив локального хранилища */
        } else {
            // если товар (строка) уже есть в массиве, то добавлять его не будем (удаляем сразу же в моменте добавления)
            products.splice(index, 1);
        }

        // заново задаем массив для локального хранилища, после всех манипуляций добавления \ удаления товаров
        localStorage.setItem(this.keyName, JSON.stringify(products));
        
        // возвращаем два параметра для понимания добавленного товара, и для счетчика товаров в хэдере (products.length)
        return {products: products,
        productIsPushed: productIsPushed};
    }
}

const localStorageUtil = new LocalStorageUtil();