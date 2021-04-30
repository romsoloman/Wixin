import { AppHero } from '../../cmps/AppHero/AppHero'
import './Home.scss'

export const Home = (props) => {

    return (
        <section className="home-page container">
            <AppHero />
            <main>
                <h1>Built for SMB's, Freelancers, and basically any type of business initiative there is!</h1>
                <div className="h-p-card-1">
                    <div className="card-text">
                        <div className="tag">CREATION</div>
                        <div className="title">Fast & Easy Site Creation</div>
                        <p className="pa">Use our simplified content-editor in order to create your amazing site. Drag & Drop items to the center of the page to add them-in, click on the pretty bin icon to remove. Use the text deisgn option to make every sentence stand out.</p>
                        <button className="btn-pointer">Start Creating » </button>
                    </div>
                    <img src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607257356/homepage1_ojzkm6.png" alt="" />
                </div>
            </main>
        </section>
    )
}
