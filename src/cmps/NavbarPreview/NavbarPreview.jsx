import './NavbarPreview.scss'

export const NavbarPreview = ({ navbar }) => {
    return (
        navbar && <section className="item-controller">
            <img src={navbar.backgroundImage} alt="" />
        </section>
    )
}
