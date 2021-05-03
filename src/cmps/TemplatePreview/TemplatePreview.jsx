
import { Link } from 'react-router-dom'
import './TemplatePreview.scss'

export const TemplatePreview = ({ template }) => {
    return (
        template &&
        <li className="template-preview">
            <header className="flex align-center justify-between header-template-preview">
                <div className="flex align-center justify-between dots">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h4>{template.name}</h4>
            </header>
            <main className="img-template-preview">
                <img src={template.previewImg} alt="" />
            </main>
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
