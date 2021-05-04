import './NavbarPreview.scss'

export const NavbarPreview = ({ navbar, getCmp, templateId,tagName }) => {
    const clicked = () => {
        getCmp(templateId, navbar, tagName, 'header')
    }
    return (
        navbar && <section className="item-controller" onClick={clicked}>
            <img src={navbar.backgroundImage} alt="" />
        </section>
    )
}
