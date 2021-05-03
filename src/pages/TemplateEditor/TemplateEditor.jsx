

import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd'
import { TemplateDetails } from '../TemplateDetails/TemplateDetails'
import './TemplateEditor.scss'

export const TemplateEditor = (props) => {
    console.log('props.match.params', props.match.params.id);
    return (
        <section className="container editor-container templete-editor">
            <ControllerAdd />
            <TemplateDetails {...props} />
        </section>
    )
}
