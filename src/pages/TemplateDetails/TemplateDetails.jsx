

import { useEffect, useState } from 'react'
import { getTemplateById } from '../../store/actions/templateActions';
import './TemplateDetails.scss'

export const TemplateDetails = (props) => {
    const [currTemplate, setCurrTemplate] = useState(null);
    useEffect(() => {
        setCurrTemplate(prevState => prevState = getTemplateById(props.match.params.id))
    })
    return (
        <div>

        </div>
    )
}

