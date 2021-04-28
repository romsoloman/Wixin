import { NavbarPreview } from '../NavbarPreview/NavbarPreview'
import './NavbarList.scss'

export const NavbarList = ({props}) => {
    return (
       props && <ul className="items-list-controller">
            {props.data.map((navbar) => <NavbarPreview navbar={navbar} key={navbar._id}/>)}
        </ul>
    )
}
