const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    try {
        var decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded);
        next()
    } catch (err) {
        res.status(401).json({
            success: false,
            err,
        })
    }
}
module.exports = verifyJwt;