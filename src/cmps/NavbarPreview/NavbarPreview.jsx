import './NavbarPreview.scss'

export const NavbarPreview = ({ navbar, getCmp, templateId }) => {
    const clicked = () => {
        getCmp(templateId, navbar)
    }
    return (
        navbar && <section className="item-controller" onClick={clicked}>
            <img src={navbar.backgroundImage} alt="" />
        </section>
    )
}
