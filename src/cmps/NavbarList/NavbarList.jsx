import { useState } from 'react'
import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss';
import Dropdown from 'react-bootstrap/Dropdown'


export const NavbarList = ({ props, getCmp, templateId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => prevState = !prevState)
    }
    return (
        props && <ul className="flex column lists-controller" onClick={toggleMenu}>
            {/* <div className="flex header-preview">
                <div>
                    <div className="header-controller">
                        <i className="fas fa-ellipsis-h"></i>
                        Navbars
                    </div>
                </div>
                <div className="arrow-icon"><i className="fas fa-arrow-right"></i></div>
            </div> */}
            {/* <div className="item-list-controller">
                {props.data.map((navbar) => <NavbarPreview navbar={navbar} key={navbar.id} templateId={templateId} getCmp={getCmp} tagName={props.tagName} />)}
            </div> */}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="flex header-preview">
                        <div>
                            <div className="header-controller">
                                <i className="fas fa-ellipsis-h"></i>
                        Navbars
                    </div>
                        </div>
                        <div className="arrow-icon"><i className="fas fa-arrow-right"></i></div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="item-list-controller">
                        {props.data.map((navbar) => <Dropdown.Item key={navbar.id}><NavbarPreview navbar={navbar} templateId={templateId} getCmp={getCmp} tagName={props.tagName} /></Dropdown.Item>)}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </ul>
    )
}
