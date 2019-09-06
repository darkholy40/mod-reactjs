import React, { useState } from 'react'
import axios from 'axios'
import qrcode from 'qrcode'

export default function Number() {
    const [token, setToken] = useState('')
    const [dataUrl, setDataUrl] = useState('')

    async function handleLogin() {
        const res = await axios.post('http://localhost:3001/login', { username: 'admin' })
        setToken(res.data.token)
    }

    async function handleClick() {
        const res = await axios.get('http://localhost:3001/numbers', {
            headers: {
                'authorization': token
            }
        })
        console.log(res.data)
    }

    async function handleRegister() {
        const res = await axios.post('http://localhost:3001/register')

        qrcode.toDataURL(res.data.url, (err, dataUrl) => {
            setDataUrl(dataUrl)
        })
    }

    return <div>
        <h1 className="title">Number</h1>
        <button onClick={handleRegister} className="button">Register</button>
        {
            dataUrl && <img src={dataUrl} alt="qrcode" />
        }
        <hr />
        <button onClick={handleLogin} className="button">Login</button>
        <pre>{JSON.stringify(token)}</pre>
        <hr />
        <button onClick={handleClick} className="button">Get Numbers</button>
    </div>
}