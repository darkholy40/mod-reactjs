import React, { useState } from 'react'

export default function () {
    const [name, setName] = useState('John')
    const [surname, setSurname] = useState('Doe')
    const [age, setAge] = useState(35)
    const [gender, setGender] = useState('M')
    const [isSingle, setSingle] = useState(true)

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
        <pre>{JSON.stringify({ name, surname, gender, isSingle })}</pre>

        <div className="field">
            <input defaultChecked={isSingle} name="single" onChange={handleChange} type="checkbox" />
        </div>

        <div className="field">
            <input name="name" onChange={handleChange} defaultValue={name} type="text" className="input" />
        </div>

        <div className="field">
            <input name="surname" onChange={handleChange} defaultValue={surname} type="text" className="input" />
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