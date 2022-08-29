const path = require('path');

module.exports = {
    displayHomePage(_, res) {
        res.sendFile(path.resolve(__dirname, 'cc-front', 'index.html'));
    },
};
