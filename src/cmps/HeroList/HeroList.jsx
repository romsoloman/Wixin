import { HeroPreview } from '../HeroPreview/HeroPreview'
import './HeroList.scss'

export const HeroList = ({ props }) => {

    return (
        props && <section>
            <ul className="items-list-controller">
                {props.data.map((hero) => <HeroPreview hero={hero} key={hero.id} />)}
            </ul>
        </section>
    )
}
