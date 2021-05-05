
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
            <main className="img-template-preview" style={{ backgroundImage: `url(${template.previewImg})` }}>
                {/* <img src={template.previewImg} alt="" /> */}
            <div className="edit-preview">
                <Link to={'/editor/' + template._id}>
                    Choose <i class="fas fa-arrow-right"></i>
                </Link>
                <Link to={'/preview/' + template._id}>
                    <i class="far fa-eye"></i> preview
                </Link>
            </div>
            </main>
        </li>
    )
}
