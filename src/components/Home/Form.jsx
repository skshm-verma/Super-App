import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        name: "",
        userName: "",
        email: "",
        phone: "",
        checkbox: false
    })

    const [error, setError] = useState({
        name: "",
        userName: "",
        email: "",
        phone: "",
        checkbox: false
    })

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/     // a regular expression to check the validation of phone No
        return phoneRegex.test(phone)
    }

    function validate() {

        setError((error) => ({
            name: "",
            userName: "",
            email: "",
            phone: "",
            checkbox: false
        }))

        if (data.name.trim().length === 0) {
            console.warn("Name is required")
            setError((error) => { return { ...error, name: "Name is required" } })
        }

        if (data.userName.trim().length === 0) {
            console.warn("UserName is required")
            setError((error) => { return { ...error, userName: "UserName is required" } })
        }

        if (data.email.trim().length === 0) {
            console.warn("Email is required")
            setError((error) => { return { ...error, email: "Email is required" } })
        }

        if (data.phone.trim().length === 0 || !validatePhone(data.phone)) {
            console.warn("Phone number is either empty or invalid")
            setError((error) => { return { ...error, phone: "Phone number is either empty or invalid" } })
        }

        if (!data.checkbox) {
            console.warn("Checkbox is required")
            setError((error) => { return { ...error, checkbox: "Checkbox is required" } })
        }
    }


    return (
        <div style={{ display: 'flex', background: 'black', overflow: 'hidden' }}>

            <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', fontSize: '45px', color: 'white', zIndex: '1', fontFamily: 'Roboto', bottom: '8px', left: '120px' }}>Discover new things on <br />Superapp</p>
                <img src="../src/assets/image13.png" alt="MusicFestivalPhoto" style={{ width: '50vw', height: '100vh' }} />
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50vw',
                height: '100vh',
                overflow: 'hidden'
            }}>

                <h1 style={{ color: '#72DB73', fontFamily: 'Single Day' }}>Super App</h1>
                <h4 style={{ color: 'white', margin: '0px auto 50px auto' }}>Create your new account</h4>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    validate();
                }}

                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        margin: '0px auto',
                        overflow: 'hidden'
                    }}
                >
                    <input
                        type="text"
                        name="" id=""
                        placeholder='Name'
                        value={data.name}
                        onInput={(e) => setData({ ...data, name: e.target.value })}
                        style={{ padding: '12px', background: '#292929', border: '1px solid #292929', width: '300px' }}
                    />
                    <span style={{ color: 'red', fontSize: '0.8rem' }}>{error.name}</span>

                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder='UserName'
                        value={data.userName}
                        onInput={(e) => setData({ ...data, userName: e.target.value })}
                        style={{ padding: '12px', background: '#292929', border: '1px solid #292929', width: '300px' }}
                    />
                    <span style={{ color: 'red', fontSize: '0.8rem' }}>{error.userName}</span>

                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder='Email'
                        value={data.email}
                        onInput={(e) => setData({ ...data, email: e.target.value })}
                        style={{ padding: '12px', background: '#292929', border: '1px solid #292929', width: '300px' }}
                    />
                    <span style={{ color: 'red', fontSize: '0.8rem' }}>{error.email}</span>

                    <input
                        type="tel"
                        name=""
                        id=""
                        placeholder='Phone'
                        value={data.phone}
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        style={{ padding: '12px', background: '#292929', border: '1px solid #292929', width: '300px' }}
                    />
                    <span style={{ color: 'red', fontSize: '0.8rem' }}>{error.phone}</span>

                    <label style={{ width: '320px' }}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            checked={data.checkbox}
                            onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
                            style={{ margin: '12px auto' }} />
                        <p style={{ color: 'white', display: 'inline-block', margin: 'auto 5px' }}>Share my registration data with Superapp</p>
                    </label>
                    <span style={{ color: 'red', fontSize: '0.8rem' }}>{error.checkbox}</span>

                    <button type="submit" style={{ color: 'white', width: '320px', height: '40px', backgroundColor: '#72DB73', border: '1px solid #72DB73', borderRadius: '20px', fontSize: '20px' }}>Sign Up</button>
                </form>


                <p style={{ color: 'white', width: '320px', fontSize: '0.8rem' }}>By clicking on Sign up. you agree to Superapp <span style={{ color: '#72DB73' }}>Terms and Conditions of Use</span></p>


                <p style={{ color: 'white', width: '320px', fontSize: '0.8rem' }}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{ color: '#72DB73' }}>Privacy Policy</span></p>

            </div>
        </div>
    )
}

export default Form
