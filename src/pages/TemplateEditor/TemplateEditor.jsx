

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd'
import { loadTemplates, getTemplateById, saveTemplate, getEmptyTemplate } from '../../store/actions/templateActions'
import { TemplateDetails } from '../TemplateDetails/TemplateDetails'
import './TemplateEditor.scss'

export const TemplateEditor = (props) => {
    const [isEditor, updateIsEditor] = useState(false);
    const templates = useSelector(state => state.templateReducer.templates)
    const currTemplate = useSelector(state => state.templateReducer.currTemplate)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTemplates())
        if (props.match.params.id) {
            updateIsEditor(prevState => prevState = true);
        } else dispatch(getEmptyTemplate())
    }, [])

    const getCmp = (templateId, item, tagName, section) => {
        dispatch(getTemplateById(templateId))
        currTemplate.addOns[section][tagName] = [...currTemplate.addOns[section][tagName], { ...item.html }];
        dispatch(saveTemplate(currTemplate));
        console.log(2);
        dispatch(loadTemplates())
        console.log(3);
    }
    return (
        <section className="container editor-container templete-editor">
            <ControllerAdd getCmp={getCmp} templateId={props.match.params.id} />
            {isEditor && <TemplateDetails {...props} />}
            {!isEditor &&
                (<section className="workspace">
                </section>)
            }
        </section>
    )
}
