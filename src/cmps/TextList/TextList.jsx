import { TextPreview } from '../TextPreview/TextPreview'
import './TextList.scss'

export const TextList = ({props}) => {

    return (
       props &&  <section>
            <h1>Texts</h1>
            <ul className="items-list-controller">
                {props.data.map((text) => <TextPreview text={text} key={text.id}/>)}
            </ul>
        </section>
    )
}
