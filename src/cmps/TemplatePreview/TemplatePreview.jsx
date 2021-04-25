
import { useEffect } from 'react'
import './TemplatePreview.scss'

export const TemplatePreview = ({template}) => {
    useEffect(() => {
        console.log('template', template);
    }, [])

    return (
       template && <li className="template">
            <main>
                <img src={template.imgUrl} alt=""/>
            </main>
            <footer>{template.name}</footer>
        </li>
    )
}
