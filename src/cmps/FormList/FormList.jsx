import { FormPreview } from '../FormPreview/FormPreview'
import './FormList.scss'
import Dropdown from 'react-bootstrap/Dropdown'

export const FormList = ({ props, getCmp, templateId }) => {

    return (
        props && <section className="flex list-controller">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="flex header-preview">
                        <div>
                            <div className="header-controller">
                                <i className="fas fa-ellipsis-h"></i>
                        Forms
                    </div>
                        </div>
                        <div className="arrow-icon"><i className="fas fa-arrow-right"></i></div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="item-list-controller">
                        {props.data.map((form) => <Dropdown.Item key={form.id}><FormPreview form={form} templateId={templateId} getCmp={getCmp} tagName={props.tagName} /></Dropdown.Item>)}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}
