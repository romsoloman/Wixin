import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = ({props}) => {
    return (
        props && <section>
            <h1>Navbar</h1>
            <ul className="items-list-controller">
                {props.data.map((navbar) => <NavbarPreview navbar={navbar} key={navbar.id}/>)}
            </ul>
        </section>
    )
}
