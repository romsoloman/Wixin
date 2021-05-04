import { SectionPreview } from '../SectionPreview/SectionPreview'
import './SectionList.scss'

export const SectionList = ({ props, getCmp, templateId }) => {

    return (
        props && <section>
            SECTION
            <ul className="items-list-controller">
                {props.data.map((section) => <SectionPreview section={section} key={section.id}  templateId={templateId} getCmp={getCmp} tagName={props.tagName} />)}
            </ul>
        </section>
    )
}
