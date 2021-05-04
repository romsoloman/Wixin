import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = ({ props, getCmp,templateId }) => {
    return (
        props && <section>
            NAVBAR
            <ul className="items-list-controller">
                {props.data.map((navbar) => <NavbarPreview navbar={navbar} key={navbar.id} templateId={templateId} getCmp={getCmp} tagName={props.tagName} />)}
            </ul>
        </section>
    )
}
