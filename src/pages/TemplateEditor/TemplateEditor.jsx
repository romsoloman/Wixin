

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd'
import { loadTemplates } from '../../store/actions/templateActions'
import { TemplateDetails } from '../TemplateDetails/TemplateDetails'
import './TemplateEditor.scss'

export const TemplateEditor = (props) => {
    const [isEditor, updateIsEditor] = useState(false);
    const templates = useSelector(state => state.templateReducer.templates)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTemplates())
        if (props.match.params.id) {
            updateIsEditor(prevState => prevState = true);
        }
    }, [])

    const getCmp = (id) => {
    }
    return (
        <section className="container editor-container templete-editor">
            <ControllerAdd getCmp={getCmp} />
            {isEditor && <TemplateDetails {...props} />}
            {!isEditor &&
                (<section className="workspace">

                </section>)
            }
        </section>
    )
}
