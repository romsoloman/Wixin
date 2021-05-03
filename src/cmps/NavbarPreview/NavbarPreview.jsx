import './NavbarPreview.scss'

export const NavbarPreview = ({ navbar, getCmp }) => {
    const clicked = () => {
        getCmp(navbar.id)
    }
    return (
        navbar && <section className="item-controller" onClick={clicked}>
            <img src={navbar.backgroundImage} alt="" />
        </section>
    )
}
