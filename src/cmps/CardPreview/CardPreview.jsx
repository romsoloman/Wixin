
import './CardPreview.scss'

export const CardPreview = ({ card, getCmp, templateId,tagName  }) => {
    const clicked = () => {
        getCmp(templateId, card, tagName, 'main')
    }
    return (
        card && <section className="item-controller" onClick={clicked}>
            <img src={card.backgroundImage} alt="" />
        </section>
    )
}
