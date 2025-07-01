import { createRequire } from "module";
const require = createRequire(import.meta.url);

const data = require('../../data/shopping.json');

export const dataShoppingCart = (app) => { 
    app.get('/api/cart', (req, res) => {
        return res.json(data.cart);
    });
}