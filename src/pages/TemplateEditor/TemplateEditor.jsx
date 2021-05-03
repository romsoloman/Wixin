

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd'
import { loadTemplates,getTemplateById, saveTemplate } from '../../store/actions/templateActions'
import { TemplateDetails } from '../TemplateDetails/TemplateDetails'
import './TemplateEditor.scss'

export const TemplateEditor = (props) => {
    const [isEditor, updateIsEditor] = useState(false);
    const templates = useSelector(state => state.templateReducer.templates)
    const currTemplate = useSelector(state=>state.templateReducer.currTemplate)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTemplates())
        if (props.match.params.id) {
            updateIsEditor(prevState => prevState = true);
        }
    }, [])

    const getCmp = (templateId, item) => {
        dispatch(getTemplateById(templateId))
        currTemplate.addOns.header = {...item};
        dispatch(saveTemplate(currTemplate));
    }
    return (
        <section className="container editor-container templete-editor">
            <ControllerAdd getCmp={getCmp} templateId={props.match.params.id}/>
            {isEditor && <TemplateDetails {...props} />}
            {!isEditor &&
                (<section className="workspace">

                </section>)
            }
        </section>
    )
}
