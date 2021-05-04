import { TextPreview } from '../TextPreview/TextPreview'
import './TextList.scss'

export const TextList = ({ props, getCmp, templateId }) => {

    return (
        props && <section>
            TEXT
            <ul className="items-list-controller">
                {props.data.map((text) => <TextPreview text={text} key={text.id}  templateId={templateId} getCmp={getCmp} tagName={props.tagName} />)}
            </ul>
        </section>
    )
}
