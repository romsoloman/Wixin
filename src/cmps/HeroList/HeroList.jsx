import { HeroPreview } from '../HeroPreview/HeroPreview'
import './HeroList.scss'

export const HeroList = ({ props, getCmp, templateId  }) => {

    return (
        props && <section>
            HERO
            <ul className="items-list-controller">
                {props.data.map((hero) => <HeroPreview hero={hero} key={hero.id} templateId={templateId} getCmp={getCmp} tagName={props.tagName} />)}
            </ul>
        </section>
    )
}
