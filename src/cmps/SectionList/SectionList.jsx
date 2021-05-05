import { SectionPreview } from '../SectionPreview/SectionPreview'
import './SectionList.scss'
import Dropdown from 'react-bootstrap/Dropdown'

export const SectionList = ({ props, getCmp, templateId }) => {

    return (
        props && <section className="flex list-controller">

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="flex header-preview">
                        <div>
                            <div className="header-controller">
                                <i className="fas fa-ellipsis-h"></i>
                        Sections
                    </div>
                        </div>
                        <div className="arrow-icon"><i className="fas fa-arrow-right"></i></div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="item-list-controller">
                        {props.data.map((section) => <Dropdown.Item key={section.id}><SectionPreview section={section} templateId={templateId} getCmp={getCmp} tagName={props.tagName} /></Dropdown.Item>)}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}
