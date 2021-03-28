module.exports = app => {
    const controller = require('../controllers/customerWallets')();

    app.route('/api/vi/customer-wallets')
        .get(controller.listCustomerWallets);
}