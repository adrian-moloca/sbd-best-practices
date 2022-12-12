import modifyBody from "./modifyBody.js";

const validateBodyForScript = async (req, res, next) => {
    const bodyString = JSON.stringify(req.body);
    let modifiedBody = modifyBody(bodyString);

    if (modifiedBody.includes(process.env.SCRIPT_SECRET)) {
        return res.status(400).json({
            error: 'Script found.'
        })
    }
    next();
};

export default validateBodyForScript;
