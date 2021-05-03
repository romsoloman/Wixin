import { SectionPreview } from '../SectionPreview/SectionPreview'
import './SectionList.scss'

export const SectionList = ({ props }) => {

    return (
        props && <section>
            <ul className="items-list-controller">
                {props.data.map((section) => <SectionPreview section={section} key={section.id} />)}
            </ul>
        </section>
    )
}
