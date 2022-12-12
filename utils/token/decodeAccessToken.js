import jwt from 'jsonwebtoken';
import getAccessSecret from './generateAccessSecret.js';

const decodeAccessToken = async (req) => {
    const accessToken = await req.headers.authorization.split(" ")[1];
    const accessSecret = getAccessSecret();
    const decoded = jwt.verify(accessToken, accessSecret);
    const id = decoded.authToken.id;
    const role = decoded.authToken.role;
    const email = decoded.authToken.email;

    return {id: id, role: role, email: email};
};

export default decodeAccessToken;