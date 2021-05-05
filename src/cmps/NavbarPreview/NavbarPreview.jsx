import './NavbarPreview.scss'

export const NavbarPreview = ({ navbar, getCmp, templateId, tagName }) => {
    const clicked = () => {
        getCmp(templateId, navbar, tagName, 'header')
    }
    return (
        navbar && <li className="item-controller" onClick={clicked}>
            <img src={navbar.backgroundImage} alt="" />
        </li>
    )
}
