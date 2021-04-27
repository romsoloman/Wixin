
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TemplatePreview.scss'

export const TemplatePreview = ({ template }) => {
    return (
        template &&
        <li className="template">
            <main>
                <img src={template.imgUrl} alt="" />
            </main>
            <footer>{template.name}</footer>
            <div className="edit-preview">
                <Link to={'/editor/' + template._id}>
                    Edit
            </Link>
                <Link to={'/preview/' + template._id}>
                    View
            </Link>
            </div>
        </li>
    )
}
