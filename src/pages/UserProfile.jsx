import React, { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users'

export default function UserProfile(props) {
    const [userId, setUserId] = useState(props.match.params.id)
    const [user, setUser] = useState({})

    async function handleClick() {
        const res = await axios.get(url + '/' + userId)
        setUser(res.data)
    }

    function handleChange(e) {
        const fieldName = e.target.name
        const value = e.target.value

        const newUser = {
            ...user,
            [fieldName]: value
        }

        setUser(newUser)
    }

    async function handleSave() {
        // insert
        // const res = await axios.post(url, user)
        // console.log(res)

        // update
        const res = await axios.put(url + '/' + userId, user)
        console.log(res)

        // delete
        // const res = await axios.delete(url + '/' + userId)
        // console.log(res)
    }

    useEffect(() => {
        handleClick()
    }, [])

    return <div>
        <h1 className="title">User Profile</h1>

        <button onClick={handleSave} className="button is-primary">Save</button>

        <p>User ID: {userId}</p>
        <button onClick={handleClick} className="button">Get User (ID: {userId})</button>
        <hr />

        <pre>{JSON.stringify(user)}</pre>

        <div className="field">
            <input defaultValue={user.name} onChange={handleChange} name="name" type="text" className="input" />
        </div>
        <div className="field">
            <input defaultValue={user.email} onChange={handleChange} name="email" type="text" className="input" />
        </div>
    </div>
}