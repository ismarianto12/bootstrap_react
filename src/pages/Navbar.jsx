import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { useNavigate, NavLink } from 'react-router-dom'

import { SidebarData } from '../components/SidebarData';
import style from '../../src/components/template/assets/css/style.css'

function Navbar() {

    const [state, setState] = useState({});
    useEffect((e) => {
        console.log(e)

    }, [])
    const handleClick = (e, item) => {
        e.preventDefault();
        setState((state) => ({
            ...state,
            [item]: !state[item]
        }));
    };


    return (<nav className={`fixed_navbar sidebar sidebar-offcanvas`} id="sidebar">
        <ul className="nav">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                    <Icon.Home />
                    <span className="menu-title">Dashboard</span>
                </NavLink>
            </li>

            {
                SidebarData.map((a, b) => {
                    if (a.subNav != null) {
                        return (<li className="nav-item" onClick={e => handleClick(e, a.title)} key={b}>
                            <NavLink className={state[a.title] ? "nav-link collapsed active" : "nav-link"} data-toggle="collapse" href="#ui-basic" aria-expanded={state[a.title] ? true : false} aria-controls="ui-basic">
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                                <i className='menu-arrow'>
                                    {state[a.title]}
                                </i>
                            </NavLink>
                            <div className={state[a.title] ? "collapse show" : 'collapse'} id="ui-basic" style={{}}>
                                <ul className={state[a.title] ? "nav flex-column sub-menu show" : "nav flex-column sub-menu"}>
                                    {a.subNav.map((gg, listdata) => {
                                        return (<li className="nav-item"> <NavLink className="nav-link" to={gg.path}>{gg.title}</NavLink></li>)
                                    })
                                    }
                                </ul>
                            </div>
                        </li>)
                    } else {
                        return (<li className={(a.title ? 'nav-item active' : 'nav-item')}>
                            <NavLink className="nav-link" to={a.path}>
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                            </NavLink>
                        </li>)
                    }
                })
            }


        </ul>
    </nav >);

}

export default Navbar