

import './SectionPreview.scss'

export const SectionPreview = ({ section }) => {

    return (
        section && <section className="item-controller">
            <img src={section.backgroundImage} alt="" />
        </section>
    )
}
