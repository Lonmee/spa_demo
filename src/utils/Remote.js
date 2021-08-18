import axios from "axios";

const baseURL = 'http://www.eyolo.com:8081/';

export default {
    async sendVerifySmsLoginReq(params) {
        axios.request({
            baseURL, url: '/security/sendVerifySmsLogin', params
        })
            .then(r => r.json())
            .catch(e => console.log(e));
    },
    async loginReq(params, cb = null) {
        axios.request({
            method: 'POST',
            baseURL,
            url: '',
            data: JSON.stringify(params)
        })
            .then(r => r.json())
            .catch(e => console.log(e));
    },
    async getProducts() {
        await wait(100)
        return _products
    },

    async buyProducts(products) {
        await wait(100)
        if (
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
        ) {
            return
        } else {
            throw new Error('Checkout error')
        }
    }
}

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
