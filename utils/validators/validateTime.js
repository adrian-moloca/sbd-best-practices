const validateTime = (time) => {
    const regex = /^(0[0-9]|1[0-9]|2[0-4]):[0-5][0-9]$/;
    
    if (time.match(regex)) {
        return true;
    } return false;
};

export default validateTime;
