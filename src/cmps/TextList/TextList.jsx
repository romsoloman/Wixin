import { TextPreview } from '../TextPreview/TextPreview'
import './TextList.scss'
import Dropdown from 'react-bootstrap/Dropdown'

export const TextList = ({ props, getCmp, templateId }) => {

    return (
        props && <section className="flex list-controller">

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="flex header-preview">
                        <div>
                            <div className="header-controller">
                                <i className="fas fa-dots"></i>
                        Texts
                    </div>
                        </div>
                        <div className="arrow-icon"><i className="fas fa-arrow-right"></i></div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="item-list-controller">
                        {props.data.map((text) => <Dropdown.Item key={text.id}><TextPreview text={text} templateId={templateId} getCmp={getCmp} tagName={props.tagName} /></Dropdown.Item>)}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}
