module.exports = app => {
    const controller = app.controllers.customerWalletsController;
    const controllerProfile = app.controllers.profileController;

    app.route('/api/vi/customer-wallets')
        .get(controller.listCustomerWallets);

    app.route('/api/vi/profiles')
        .get(controllerProfile.listProfiles)
}