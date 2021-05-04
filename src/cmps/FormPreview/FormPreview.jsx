

import './FormPreview.scss'

export const FormPreview = ({form, getCmp, templateId,tagName }) => {
    const clicked = () => {
        getCmp(templateId, form, tagName, 'main')
    }
    return (
        form && <section className="item-controller" onClick={clicked}>
            <img src={form.backgroundImage} alt="" />
        </section>
    )
}
