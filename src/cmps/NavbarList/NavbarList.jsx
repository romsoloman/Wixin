import React, { useEffect } from 'react';
import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = ({props}) => {
    useEffect(() => {
        console.log('props',props );
        return () => {
        }
    }, [])
    return (
       props && <ul className="items-list-controller">
            {props.data.map((navbar) => <NavbarPreview navbar={navbar} key={navbar._id}/>)}
        </ul>
    )
}
