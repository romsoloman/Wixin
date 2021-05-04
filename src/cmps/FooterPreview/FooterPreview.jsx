

import './FooterPreview.scss'

export const FooterPreview = ({footer, getCmp, templateId,tagName }) => {
    const clicked = () => {
        getCmp(templateId, footer, tagName, 'footer')
    }
    return (
        footer && <section className="item-controller" onClick={clicked}>
            <img src={footer.backgroundImage} alt="" />
        </section>
    )
}
