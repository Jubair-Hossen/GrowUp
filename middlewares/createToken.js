var jwt = require('jsonwebtoken');
const genarateToken = (paylod) => {
    var token = jwt.sign(paylod, process.env.SECRET, { expiresIn: '1d' });
    return token
}

module.exports = genarateToken