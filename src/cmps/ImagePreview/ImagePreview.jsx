import './ImagePreview.scss'

export const ImagePreview = ({ image, getCmp, templateId,tagName  }) => {
    const clicked = () => {
        getCmp(templateId, image, tagName, 'main')
    }
    return (
        image && <section className="item-controller" onClick={clicked}>
            <img src={image.backgroundImage} alt="" />
        </section>
    )
}
