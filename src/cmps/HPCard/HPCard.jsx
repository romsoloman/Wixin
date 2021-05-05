

import './HPCard.scss'

export const HPCard = ({tag,title,pa,btn,img,toRight}) => {

    const directionStyle = toRight ? "row-reverse" : "row";
    return (
         <section className="h-p-card" style={{"flexDirection":directionStyle}}>
            <div className="card-text">
                <div className="tag">{tag}</div>
                <div className="title">{title}</div>
                <p className="pa">{pa}</p>
                <button className="btn-pointer">{btn}</button>
            </div>
           <img src={img} alt="" />
        </section>
    )
}
