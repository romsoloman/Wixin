import { CardPreview } from '../CardPreview/CardPreview'
import './CardList.scss'

export const CardList = ({ props, getCmp }) => {
    return (
        props && <section>
            <ul className="items-list-controller">
                {props.data.map((card) => <CardPreview card={card} key={card.id} getCmp={getCmp} />)}
            </ul>
        </section>
    )
}
