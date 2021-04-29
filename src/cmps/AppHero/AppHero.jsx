

import './AppHero.scss'

export const AppHero = (props) => {

    return (
        <section className='app-hero'>
            <div className="background-gradient"></div>
            <div className="flex column align-center justify-center text-center title">
                <h1>welcome to wixin, your free website builder</h1>
                <h3>In our app, you can create an amazing app just from scratch!</h3>
            </div>
            <div className="video-example">
                <video autoPlay loop>
                    <source src="videos/Fixerr-Video Review.mov" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}
