var validator = require("email-validator");
function emailValidation(email){
    return validator.validate(email);
} 
module.exports =emailValidation

