import React, { useEffect } from 'react';
import { loadTemplates } from '../../store/actions/templateActions';
import './TemplateApp.scss'
import { TemplateList } from '../../cmps/TemplateList/TemplateList';
import { useDispatch, useSelector } from 'react-redux';

export const TemplateApp = (props) => {
    const templates = useSelector(state => state.templateReducer.templates)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTemplates())
    }, [])

    return (
        templates && <section className='template-app'>
            <TemplateList templates={templates} />
        </section >
    )
}
