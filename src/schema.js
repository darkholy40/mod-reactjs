import Joi from 'joi'

const options = {
    language: {
        any: {
            empty: 'MUST ENTER !!! "{{label}}"',
        },
        string: {
            base: '"{{label}}" MUST BE STRING !!!',
            min: '"{{label}}" AT LEAST "{{limit}}"'
        }
    }
}

const schema = Joi.object().options(options).keys({
    name: Joi.string().required().label('ชื่อ').min(3),
    surname: Joi.string().required().label('นามสกุล').min(3)
})

export default schema