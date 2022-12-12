const validateObjectId = (objectId) => {
    if (objectId.match(/^[0-9a-fA-F]{24}$/)) {
        return true;  
    } return false;
};

export default validateObjectId;
