
import { Link } from 'react-router-dom'
import { TemplatePreview } from '../TemplatePreview/TemplatePreview'
import './TemplateList.scss'

export const TemplateList = ({ templates }) => {
    return (
        <ul className="template-list">
            <Link to={'/editor/'}>
                <li className="template-preview">
                    <header className="flex align-center justify-between header-template-preview">
                        <div className="flex align-center justify-between dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h4>Create new website</h4>
                    </header>
                    <main className="empty-template-preview">
                        <i className="fas fa-plus"></i>
                    </main>
                </li>
            </Link>
            {templates.map((template) => <TemplatePreview template={template} key={template._id} />)}
        </ul>
    )
}
