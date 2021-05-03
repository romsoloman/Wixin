import { FormPreview } from '../FormPreview/FormPreview'
import './FormList.scss'

export const FormList = ({ props }) => {

    return (
        props && <section>
            <ul className="items-list-controller">
                {props.data.map((form) => <FormPreview form={form} key={form.id} />)}
            </ul>
        </section>
    )
}
