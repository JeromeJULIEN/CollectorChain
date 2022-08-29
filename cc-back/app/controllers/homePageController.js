const path = require('path');

module.exports = {
    displayHomePage(_, res) {
        res.sendFile(path.join(__dirname, '../cc-front', 'index.html'));
    },
};
