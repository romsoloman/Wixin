

import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd'
import { TemplateDetails } from '../TemplateDetails/TemplateDetails'
import './TemplateEditor.scss'

export const TemplateEditor = (props) => {

    return (
        <section className="editor-container templete-editor">
            <ControllerAdd />
        </section>
    )
}
