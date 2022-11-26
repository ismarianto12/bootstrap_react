

import { useState } from 'react'
import * as Icon from 'react-feather';
import { Navigate, useNavigate, NavLink, redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Login() {
    const navigate = useNavigate()

    const [value, Setvalue] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        if (value.username === 'admin') {
            Swal.fire('Success', 'Username dan password Cocok', 'success')
            localStorage.setItem('mytime', 'red');
            return navigate("/");
        } else {
            Swal.fire('error', 'Username dan password salah', 'error')
        }
    }
    const divStyle = {
        height: '100vh',
        display: 'grid',
        background: '#fff'
    };

    const divStyleright = {
        height: '100vh',
        display: 'grid',
        background: 'url("../2391523603cbd5153d7eb4e37eb3c882.png")',
        backgroundSize: 'cover',
    };


    const onChange = (e) => {
        Setvalue({
            ...value,
            [e.target.id]: e.target.value
        })
    }
    const reset = (e) => {
        Setvalue({
            username: '',
            password: ''
        })
    }
    return (

        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" style={divStyleright} />
                <div className="col-md-8 col-lg-6" style={divStyle}>
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4"><Icon.Users /> Login </h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="username" onChange={onChange} value={value.username} placeholder="" />
                                            <label htmlFor="floatingInput">Username</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="password" onChange={onChange} value={value.password} placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" defaultValue id="rememberPasswordCheck" />
                                            <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-md btn-primary btn-login text-uppercase fw-bold mb-2" type="submit"><Icon.Users />Sign in</button>
                                            &nbsp;&nbsp;<button className="btn btn-md btn-danger btn-login text-uppercase fw-bold mb-2" type="reset" onClick={reset}><Icon.Users />Cancel</button>
                                            <div className="text-center">
                                                <br />
                                                <NavLink
                                                    to='/forget'
                                                    className={'small'}
                                                >
                                                    Forget Password
                                                </NavLink>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

