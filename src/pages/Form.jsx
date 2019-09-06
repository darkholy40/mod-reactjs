import React, { useState, useEffect } from 'react'
import Joi from 'joi'
import schema from '../schema'

export default function () {
    const [errors, setErrors] = useState([])
    const [name, setName] = useState('John')
    const [surname, setSurname] = useState('Doe')
    const [age, setAge] = useState(35)
    const [gender, setGender] = useState('M')
    const [isSingle, setSingle] = useState(true)

    useEffect(() => {
        const { error } = Joi.validate({ name, surname }, schema)
        if (error) {
            setErrors(error.details)
        } else {
            setErrors([])
        }

        // console.log(errors.find(each => each.path.includes('name')))
    }, [name, surname])

    function className(fieldName) {
        const isError = errors.find(each => each.path.includes(fieldName))

        if (isError) {
            return 'input is-danger'
        } else {
            return 'input'
        }
    }

    function handleChange(e) {
        const value = e.target.value

        switch (e.target.name) {
            case 'single':
                setSingle(e.target.checked)
                break;

            case 'name':
                setName(value)
                break;

            case 'surname':
                setSurname(value)
                break;

            case 'age':
                setAge(parseInt(value))
                break;

            case 'gender':
                setGender(value)
                break;

            default:
                break;
        }
    }

    return <div>
        <h1 className="title">Form</h1>
        <pre>{JSON.stringify(errors)}</pre>

        <div className="field">
            <input defaultChecked={isSingle} name="single" onChange={handleChange} type="checkbox" />
        </div>

        <div className="field">
            <input name="name" onChange={handleChange} defaultValue={name} type="text" className={className('name')} />
        </div>

        <div className="field">
            <input name="surname" onChange={handleChange} defaultValue={surname} type="text" className={className('surname')} />
        </div>

        <div className="field">
            <input name="age" onChange={handleChange} defaultValue={age} type="number" className="input" />
        </div>

        <div className="field">
            <input defaultChecked={gender === 'M'} name="gender" value="M" onChange={handleChange} type="radio" /> Male
            <input defaultChecked={gender === 'F'} name="gender" value="F" onChange={handleChange} type="radio" /> Female
        </div>
    </div>
}