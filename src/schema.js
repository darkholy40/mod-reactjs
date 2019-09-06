import Joi from 'joi'

const schema = Joi.object().keys({
    name: Joi.string().required().min(3),
    surname: Joi.string().required().min(3)
})

export default schema