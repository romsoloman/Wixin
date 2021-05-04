import { FooterPreview } from '../FooterPreview/FooterPreview'
import './FooterList.scss'

export const FooterList = ({ props, getCmp, templateId }) => {

    return (
        props && <section>
            FOOTER
            <ul className="items-list-controller">
                {props.data.map((footer) => <FooterPreview footer={footer} key={footer.id} templateId={templateId} getCmp={getCmp} tagName={props.tagName}  />)}
            </ul>
        </section>
    )
}
