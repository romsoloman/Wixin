import { AppHero } from '../../cmps/AppHero/AppHero'
import { HPCard } from '../../cmps/HPCard/HPCard'
import React, { useEffect } from 'react';
import { loadTemplates } from '../../store/actions/templateActions';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss'
import { TemplateList } from '../../cmps/TemplateList/TemplateList';

export const Home = (props) => {
     const templates = useSelector(state => state.templateReducer.templates)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTemplates())
    }, [])

    const templetesToShow = templates && templates.slice(1,4)
    return (
        <section className="home-page container">
            <AppHero />
            <main>
                <h1>Built for SMB's, Freelancers, and basically any type of business initiative there is!</h1>
                <HPCard tag={"CREATION"} title={"Fast & Easy Site Creation"}
                pa={"Use our simplified content-editor in order to create your amazing site. Drag & Drop items to the center of the page to add them-in, click on the pretty bin icon to remove. Use the text deisgn option to make every sentence stand out."}
                btn={"Start Creating » "} img={"https://res.cloudinary.com/dksmeovlj/image/upload/v1607257356/homepage1_ojzkm6.png"}/>

                <HPCard tag={"DESIGN"} title={"Design Like a Pro"}
                pa={"Our Ready-made Palette-Picker turns the design expirence to become as easy as a Google search, pick your favorite palette and start giving life to your site!"}
                btn={"Let's Design » "} img={"https://res.cloudinary.com/dksmeovlj/image/upload/v1607256243/homepage2_frsgvg.png"} toRight={true}/>

                 <HPCard tag={"COMFORT"} title={"Add Whole Sections With One Simple Click"}
                pa={"Our Ready-made Palette-Picker turns the design expirence to become as easy as a Google search, pick your favorite palette and start giving life to your site!"}
                btn={"Learn More » "} img={"https://res.cloudinary.com/dksmeovlj/image/upload/v1607257774/homepage3_cz0n8d.png"}/>

                <section className="h-p-card-txt">
                    <h1 className="title">Your Dream Site Is Just A Few Clicks Away...!</h1>
                    <p>Webix was built for freelancers, SMB's, and basically anyone who has a dream about an amazing website that is waiting to come-alive!</p>
                    <button>Start Creating Now »</button>
                </section>
                <section className="img-container">
                    <img src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607258094/homepage4_xdifqx.png" alt=""/>
                </section>
                <section className="h-p-card-txt">
                    <h1 className="title">Outstanding Templates</h1>
                    <p>Make your brand standout with our amazing tempaltes.</p>
                </section>
               {templetesToShow && <section className="h-p-templete-list container">
                    {console.log('templetesToShow', templetesToShow)}
                <TemplateList templates={templetesToShow} isHomePage={true} />
                </section>}
                <footer className="footer">
                    <h1>Coonect with us</h1>
                    <div className="items">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-whatsapp"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </footer>

            </main>
        </section>
    )
}
