const admin = require('./firebase');
const { getAuth } = require('firebase-admin/auth')
const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = await getAuth().verifyIdToken(token)
        // const decoded = await admin.auth().verifyIdToken(token)
        if (decoded) {
            req.decoded = decoded;
            next();
        }

    } catch (error) {
        res.status(404).json({ error })
    }
}

module.exports = verifyToken;