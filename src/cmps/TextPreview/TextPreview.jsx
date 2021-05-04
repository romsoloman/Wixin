

import './TextPreview.scss'

export const TextPreview = ({ text, getCmp, templateId,tagName }) => {
    const clicked = () => {
        getCmp(templateId, text, tagName, 'main')
    }
    return (
        text && <section className="item-controller" onClick={clicked}>
            <img src={text.backgroundImage} alt="" />
        </section>
    )
}
