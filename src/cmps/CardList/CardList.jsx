import { CardPreview } from '../CardPreview/CardPreview'
import './CardList.scss'

export const CardList = ({ props, getCmp, templateId }) => {
    return (
        props && <section>
            CARD
            <ul className="items-list-controller">
                {props.data.map((card) => <CardPreview card={card} key={card.id} templateId={templateId} getCmp={getCmp} tagName={props.tagName}  />)}
            </ul>
        </section>
    )
}
