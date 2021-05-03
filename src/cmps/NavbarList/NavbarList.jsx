import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = ({ props, getCmp }) => {
    return (
        props && <section>
            <ul className="items-list-controller">
                {props.data.map((navbar) => <NavbarPreview navbar={navbar} key={navbar.id} getCmp={getCmp} />)}
            </ul>
        </section>
    )
}
