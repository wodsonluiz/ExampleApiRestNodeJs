module.exports = () => {
    const profilesDB = require('../data/profiles.json');
    const controller = {}

    controller.listProfiles = (req, res) => res.status(200).json(profilesDB);

    return controller;
}