
import {TemplatePreview} from '../TemplatePreview/TemplatePreview'
import './TemplateList.scss'

export const TemplateList = ({templates}) => {
    return (
        <ul className="template-list">
            {templates.map((template) => <TemplatePreview template={template} key={template._id}/>)}
        </ul>
    )
}
