

import './HeroPreview.scss'

export const HeroPreview = ({ hero }) => {
    console.log('hero', hero);
    return (
        hero && <section className="item-controller">
            <img src={hero.html.backgroundImage} alt="" />
        </section>
    )
}

