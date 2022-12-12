import crypto from 'crypto';

const generateActivationCode = () => {
    const length = 6;
    const wishlist = '0123456789';


    return Array.from(crypto.randomFillSync(new Uint32Array(length)))
        .map((x) => {
            let newChar = wishlist[x % wishlist.length];
            return newChar;
        }
    ).join('');
};

export default generateActivationCode;
