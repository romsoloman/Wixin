import { SectionPreview } from '../SectionPreview/SectionPreview'
import './SectionList.scss'

export const SectionList = ({props}) => {

    return (
        props && <section>
            <h1>Sections</h1>
            <ul className="items-list-controller">
                {props.data.map((section) => <SectionPreview section={section} key={section.id}/>)}
            </ul>
        </section>
    )
}
