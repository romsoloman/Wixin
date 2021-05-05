import { FooterPreview } from '../FooterPreview/FooterPreview'
import './FooterList.scss'
import Dropdown from 'react-bootstrap/Dropdown'

export const FooterList = ({ props, getCmp, templateId }) => {

    return (
        props && <section className="flex list-controller">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="flex header-preview">
                        <div>
                            <div className="header-controller">
                                <i className="fas fa-ellipsis-h"></i>
                        Cards
                    </div>
                        </div>
                        <div className="arrow-icon"><i className="fas fa-arrow-right"></i></div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="item-list-controller">
                        {props.data.map((footer) => <Dropdown.Item key={footer.id}><FooterPreview footer={footer} templateId={templateId} getCmp={getCmp} tagName={props.tagName} /></Dropdown.Item>)}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}
