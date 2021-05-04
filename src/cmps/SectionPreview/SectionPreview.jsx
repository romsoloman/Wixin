

import './SectionPreview.scss'

export const SectionPreview = ({ section, getCmp, templateId,tagName }) => {
    const clicked = () => {
        getCmp(templateId, section, tagName, 'main')
    }
    return (
        section && <section className="item-controller" onClick={clicked}>
            <img src={section.backgroundImage} alt="" />
        </section>
    )
}
