

import './FormPreview.scss'

export const FormPreview = ({form}) => {

    return (
        form && <section className="item-controller">
            <img src={form.backgroundImage} alt="" />
        </section>
    )
}
