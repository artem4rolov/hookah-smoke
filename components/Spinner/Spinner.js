class Spinner {
    hendleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        let html = `
                <div class="spinner-container">
                    <img src="components/Spinner/img/spinner.svg" class="spinner-container__img" />
                </div>
            `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();