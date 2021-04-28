import React, { useEffect } from 'react';
import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = ({navbars}) => {
    useEffect(() => {
        console.log('navbars',navbars );
        return () => {
        }
    }, [])
    return (
        <div></div>
    //    navbars && <ul className="navbar-list">
    //         {navbars.map((navbar) => <NavbarPreview navbar={navbar} key={navbar._id}/>)}
    //     </ul>
    )
}
