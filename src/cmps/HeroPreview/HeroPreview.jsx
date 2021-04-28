import './HeroPreview.scss'

export const HeroPreview = ({hero}) => {

    return (
       hero && <section className="item-controller">
           <img src={hero.imgUrl} alt=""/>
        </section>
    )
}
