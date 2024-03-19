import express from 'express';
import bodyParser from 'body-parser';

const cartRouter = express.Router();

cartRouter.get('/', (req, res) => {
    try {
        cart.fetchCarts(req, res);
    } catch (e) {
        res.status(500).json({
            status: 500,
            msg: 'Failed to retrieve cart items.'
        });
    }
});

// POST '/user/:id/cart'
cartRouter.post('/addItem', bodyParser.json(), (req, res) => {
    try {
        cart.addCart(req, res);
    } catch (e) {
        res.status(500).json({
            status: 500,
            msg: 'Failed to add item to the cart.'
        });
    }
});

// PATCH '/user/:id/cart/:id'
cartRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        cart.updateCart(req, res);
    } catch (e) {
        res.status(500).json({
            status: 500,
            msg: 'Failed to update cart item.'
        });
    }
});

// DELETE '/user/:id/cart'
cartRouter.delete('/delete', (req, res) => {
    try {
        cart.deleteCart(req, res);
    } catch (e) {
        res.status(500).json({
            status: 500,
            msg: 'Failed to delete items from the cart.'
        });
    }
});

// DELETE '/user/:id/cart/:id'
cartRouter.delete('/delete/:id', (req, res) => {
    try {
        cart.deleteCartItem(req, res);
    } catch (e) {
        res.status(500).json({
            status: 500,
            msg: 'Failed to delete specific item from the cart.'
        });
    }
});

export { cartRouter };