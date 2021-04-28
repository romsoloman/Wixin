

import './TextPreview.scss'

export const TextPreview = ({text}) => {

    return (
        text && <section className="item-controller">
           <img src={text.imgUrl} alt=""/>
        </section>
    )
}
