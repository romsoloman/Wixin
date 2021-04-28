
import './CardPreview.scss'

export const CardPreview = ({card}) => {

    return (
        card && <section className="item-controller">
           <img src={card.imgUrl} alt=""/>
        </section>
    )
}
