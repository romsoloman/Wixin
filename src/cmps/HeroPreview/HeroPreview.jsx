import './HeroPreview.scss'

export const HeroPreview = ({ hero, getCmp, templateId,tagName  }) => {
    const clicked = () => {
        getCmp(templateId, hero, tagName, 'header')
    }
    return (
        hero && <section className="item-controller" onClick={clicked}>
            <img src={hero.backgroundImage} alt="" />
        </section>
    )
}
