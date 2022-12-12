import jwt from 'jsonwebtoken';
import getAccessSecret from './generateAccessSecret.js';
import getRefreshSecret from './generateRefreshSecret.js';

const removeToken = (objectEncoded) => {
    const decoded = objectEncoded.toObject();
    const accessSecret = getAccessSecret();
    const refreshSecret = getRefreshSecret();
    const authToken = {id: decoded._id, role: decoded.role, email: decoded.email};
    const accessToken = jwt.sign({authToken: authToken}, accessSecret, {expiresIn: "1s"});
    const refreshToken = jwt.sign({authToken: authToken}, refreshSecret, {expiresIn: "1s"});

    return {accessToken, refreshToken};
};

export default removeToken;