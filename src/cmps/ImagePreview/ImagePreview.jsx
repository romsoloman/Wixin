import './ImagePreview.scss'

export const ImagePreview = ({ image }) => {

    return (
        image && <section className="item-controller">
            <img src={image.backgroundImage} alt="" />
        </section>
    )
}
