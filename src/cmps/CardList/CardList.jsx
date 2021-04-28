import { CardPreview } from '../CardPreview/CardPreview'
import './CardList.scss'

export const CardList = ({props}) => {

    return (
       props &&  <section>
            <h1>Cards</h1>
            <ul className="items-list-controller">
                {props.data.map((card) => <CardPreview card={card} key={card.id}/>)}
            </ul>
        </section>
    )
}
