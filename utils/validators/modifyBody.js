import 'dotenv/config';

const modifyBody = (body) => {
    const scriptBlacklist = /<|>/ig;
    let modifiedBody = body.replace(scriptBlacklist, process.env.SCRIPT_SECRET);
    return modifiedBody;
};

export default modifyBody;
