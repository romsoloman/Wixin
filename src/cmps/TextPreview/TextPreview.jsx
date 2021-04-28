

import './TextPreview.scss'

export const TextPreview = ({ text }) => {

    return (
        text && <section className="item-controller">
            <img src={text.backgroundImage} alt="" />
        </section>
    )
}
