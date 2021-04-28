

import './FooterPreview.scss'

export const FooterPreview = ({footer}) => {

    return (
        footer && <section className="item-controller">
            <img src={footer.backgroundImage} alt="" />
        </section>
    )
}
