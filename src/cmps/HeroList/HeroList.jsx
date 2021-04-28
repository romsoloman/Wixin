import { HeroPreview } from '../HeroPreview/HeroPreview'
import './HeroList.scss'

export const HeroList = ({props}) => {

    return (
       props && <section>
            <h1>Heroes</h1>
            <ul className="items-list-controller">
                {props.data.map((hero) => <HeroPreview hero={hero} key={hero.id}/>)}
            </ul>
        </section>
    )
}
