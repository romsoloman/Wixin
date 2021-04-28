import React, { useEffect } from 'react';
import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = (props) => {
    useEffect(() => {
        console.log('props',props );
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
