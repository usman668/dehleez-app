import Joi from "joi";

export const validateUser = (data) => {
const schema = Joi.object({
    first_Name: Joi.string().min(2).max(30).required(),
    last_Name: Joi.string().min(2).max(30).required(),
    phone_No: Joi.string().pattern(/^03[0-9]{2}-?[0-9]{7}$/).required(),  
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required() 
});
return schema.validate(data);
}


export const validateLogin = (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),  
      password: Joi.string().min(6).required() 
    });
    return schema.validate(data);
  };