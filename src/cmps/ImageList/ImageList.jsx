import { ImagePreview } from '../ImagePreview/ImagePreview'
import './ImageList.scss'

export const ImageList = ({ props, getCmp, templateId }) => {

    return (
        props && <section>
            IMAGE
            <ul className="items-list-controller">
                {props.data.map((image) => <ImagePreview image={image} key={image.id} templateId={templateId} getCmp={getCmp} tagName={props.tagName} />)}
            </ul>
        </section>
    )
}
