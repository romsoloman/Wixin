import React, { useEffect } from 'react';
import './NavbarPreview.scss'

export const NavbarPreview = ({navbar}) => {
   useEffect(() => {
        console.log('navbar',navbar );
        return () => {
        }
    }, [])
    return (
       navbar && <section className="item-controller">
            <div>{navbar.logo}</div>
            <div>
                {navbar.a.map((aItem) =>
                    <a href="#">{aItem}</a>
                )}
            </div>
        </section>
    )
}
