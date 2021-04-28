import { ImagePreview } from '../ImagePreview/ImagePreview'
import './ImageList.scss'

export const ImageList = ({props}) => {

    return (
        props &&  <section>
            <h1>Images</h1>
            <ul className="items-list-controller">
                {props.data.map((image) => <ImagePreview image={image} key={image.id}/>)}
            </ul>
        </section>
    )
}
