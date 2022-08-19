const jwt = require('jsonwebtoken');
const generateJwt = require('./generateJWT');

let refreshTokens = [];

module.exports = {
    createToken(user) {
        const expiresIn = process.env.EXPIRES_TOKEN;
        const accessToken = generateJwt.generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESS_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        return {
            accessToken, refreshToken, expiresIn,
        };
    },
    authenticateToken(req, res, next) {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token !== null) {
            try {
                jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                next();
            } catch (error) {
                return res.sendStatus(403).send('Access denied');
            }
        }
        return res.sendStatus(401).send('Token is null');
    },
    refreshToken(req, res) {
        const refreshToken = req.body.token;
        const expiresIn = process.env.REFRESS_TOKEN_SECRET;
        if (refreshToken == null) return res.sendStatus(401).send('Token is null');
        if (refreshTokens.includes(refreshToken)) {
            try {
                const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                const accessToken = generateJwt.generateAccessToken(user);
                res.json({ accessToken, expiresIn });
            } catch (error) {
                return res.sendStatus(403).send('Access denied');
            }
        }
        return res.sendStatus(403).send('Access denied');
    },
    deleteRefreshToken(req, res) {
        refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
        res.sendStatus(204).send('Refresh token deleted');
    },
};
