class Error {
    handleClear() {
        ROOT_ERROR.innerHTML = '';
    }

    render(error) {
        const html = `
            <div class="error-container">
                <div class="error-container__text">
                    Извините, что-то пошло не так. Код ошибки ${error}
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();