
import './CardPreview.scss'

export const CardPreview = ({ card, getCmp }) => {
    const clicked = () => {
        getCmp(card)
    }
    return (
        card && <section className="item-controller" onClick={clicked}>
            <img src={card.backgroundImage} alt="" />
        </section>
    )
}
