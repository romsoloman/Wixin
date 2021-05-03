import { FooterPreview } from '../FooterPreview/FooterPreview'
import './FooterList.scss'

export const FooterList = ({ props }) => {

    return (
        props && <section>
            <ul className="items-list-controller">
                {props.data.map((footer) => <FooterPreview footer={footer} key={footer.id} />)}
            </ul>
        </section>
    )
}
