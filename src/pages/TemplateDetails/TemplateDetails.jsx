import { useEffect } from 'react'
import { getTemplateById } from '../../store/actions/templateActions';
import { useSelector, useDispatch } from 'react-redux';
import './TemplateDetails.scss'

export const TemplateDetails = (props) => {
    const currTemplate = useSelector(state => state.templateReducer.currTemplate)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemplateById(props.match.params.id));
    }, [])
    return (
        currTemplate && <section className='details-page'>
        </section>
    )
}

