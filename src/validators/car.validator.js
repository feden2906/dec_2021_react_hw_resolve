import Joi from "joi";

const carValidator = Joi.object({
    // model:Joi.string().min(2).max(20).required().messages({
    //     'string.empty':'Model не може бути пустим',
    //     'string.min':'Model має буті мінімум 2 символи'
    // }),
    model: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви мін 1 символ максимум 20'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {
    carValidator
}
