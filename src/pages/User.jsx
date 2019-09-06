import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export default function User() {
    const [users, setUsers] = useState([])

    async function handleClick() {
        const res = await axios.get(url)
        setUsers(res.data)
    }

    return <div>
        <h1 className="title">User</h1>
        <pre>{JSON.stringify(users)}</pre>

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(each => {
                        return <tr key={each.id}>
                            <td>{each.id}</td>
                            <td>
                                <Link to={'/user/' + each.id}>{each.name}</Link>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        <hr />
        <button onClick={handleClick} className="button">Get Users</button>
    </div>
}