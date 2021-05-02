import { useEffect } from 'react'
import { getTemplateById } from '../../store/actions/templateActions';
import { useSelector, useDispatch } from 'react-redux';
import './TemplateDetails.scss'
import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd';

export const TemplateDetails = (props) => {
    const currTemplate = useSelector(state => state.templateReducer.currTemplate)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemplateById(props.match.params.id));
    }, [])
    return (
        currTemplate && <section className="template-container details-page">
            <header className="container hero" style={{ backgroundImage: `url(${currTemplate.backgroundImg})` }}>
                {currTemplate.addOns.header.navbar.map((nav, idx) => {
                    return (
                        <nav className="flex justify-between align-center nav-items" key={idx}>
                            <h1>{nav.logo}</h1>
                            <div className="flex justify-between">
                                {nav.a.map((item, idx) => <a href="#" key={idx}>{item}</a>)}
                            </div>
                        </nav>
                    )
                })}
                {currTemplate.addOns.header.hero.map((hero, idx) => {
                    return (
                        <section className="hero" key={idx}>
                            <h1 className="hero-title">{hero.h1}</h1>
                            <p className="hero-subtitle">{hero.p}</p>
                            <button className="hero-action-btn">{hero.button}</button>
                        </section>
                    )
                })}
            </header>
            <main>
                {currTemplate.addOns.main.sections.map((section, idx) => {
                    return (
                        <div className="flex column" key={idx}>
                            <img src={section.img} alt="" />
                            <h1>{section.h1}</h1>
                            <p>{section.p}</p>
                        </div>
                    )
                })}
                {currTemplate.addOns.main.forms.map((form, idx) => {
                    return (
                        <form key={idx}>
                            {form.lables.map((label, idx) => {
                                return (
                                    <div className={label} key={idx}>
                                        <label name={label}>{label}</label>
                                        <input name={label} type={label} />
                                    </div>
                                )
                            })}
                        </form>
                    )
                })}
            </main>
            <footer>
                {currTemplate.addOns.footer.map((footer, idx) => {
                    <section className="main-footer" key={idx}>
                        <h3>{footer.h3}</h3>
                        {footer.a.map((item, idx) => <a href="#" key={idx}>{item}</a>)}
                    </section>
                })}
            </footer>
        </section>
    )
}
