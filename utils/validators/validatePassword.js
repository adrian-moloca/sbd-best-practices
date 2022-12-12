const validatePassword = (pass) => {
    const counterUppercase = pass.length - pass.replace(/[A-Z]/g, '').length;
    const counterLowrcase = pass.length - pass.replace(/[a-z]/g, '').length;
    const counterDigits = pass.replace(/\D/g, '').lenth;
    const counterWhiteSpaces = pass.split(" ").length-1;
    const counterSpecialChars = (pass.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
    const blackList = ["Password", "Parola", "12345678", "password", "parola"];

    if (pass.length < 8 || pass.length > 32 || counterUppercase == 0 || counterLowrcase == 0 || counterDigits == 0 || counterWhiteSpaces != 0 || counterSpecialChars == 0 || blackList.includes(pass)) {
        return false;
    } return true;
};

export default validatePassword;
