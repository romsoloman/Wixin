import React, { useEffect } from 'react';
import { getEmptyTemplate, loadTemplates } from '../../store/actions/templateActions';
import './TemplateApp.scss'
import { TemplateList } from '../../cmps/TemplateList/TemplateList';
import { useDispatch, useSelector } from 'react-redux';

export const TemplateApp = (props) => {
    const templates = useSelector(state => state.templateReducer.templates)
    const currTemplate = useSelector(state => state.templateReducer.currTemplate)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTemplates())
    }, [])

    return (
        templates && <section className='container template-app'>
            <h1 className="template-app-header">Select a template or create a site from scratch</h1>
            <TemplateList templates={templates} />
        </section >
    )
}
