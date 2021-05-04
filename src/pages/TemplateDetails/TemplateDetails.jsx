import { useEffect } from 'react'
import { getTemplateById } from '../../store/actions/templateActions';
import { useSelector, useDispatch } from 'react-redux';
import './TemplateDetails.scss'
import { ControllerAdd } from '../../cmps/ControllerAdd/ControllerAdd';

export const TemplateDetails = ({ id }) => {
    const currTemplate = useSelector(state => state.templateReducer.currTemplate)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemplateById(id));
    }, [])
    return (
        currTemplate && <section className="template-container details-page">

            <header className="container hero" style={{ backgroundImage: `url(${currTemplate.backgroundImg})` }}>
                {currTemplate.addOns.header.navbar.map((nav, idx) => {
                    return (
                        <nav className="flex justify-between align-center nav-items" key={idx} style={nav.style}>
                            <h1 className="nav-logo">{nav.logo}</h1>
                            <div className="flex justify-between">
                                {nav.a.map((item, idx) => <a href="" key={idx} style={item.style}>{item.txt}</a>)}
                            </div>
                        </nav>
                    )
                })}
                {currTemplate.addOns.header.hero.map((hero, idx) => {
                    return (
                        <section className="hero" style={hero.style} key={idx}>
                            {hero.h1.map((h1, idx) => <h1 style={h1.style} key={idx}>{h1.txt}</h1>)}
                            {hero.p.map((p, idx) => <p style={p.style} key={idx}>{p.txt}</p>)}
                            {hero.button.map((button, idx) => <button style={button.style} key={idx}>{button.txt}</button>)}
                        </section>
                    )
                })}
            </header>
            <main className="main-container">
                {currTemplate.addOns.main.sections.map((section, idx) => {
                    return (
                        <div className="container flex section-details" key={idx}>
                            <div>
                                {section.h1.map((h1, idx) => <h1 key={idx} style={h1.style}>{h1.txt}</h1>)}
                                {section.p.map((p, idx) => <p style={p.style} key={idx}>{p.txt}</p>)}
                            </div>
                            {section.img.map((img, idx) => <img src={img.url} style={img.style} key={idx} />)}
                        </div>
                    )
                })}
                {/* {currTemplate.addOns.main.forms.map((form, idx) => {
                    return (
                        <form key={idx} style={form.style}>
                            {form.label.types.map((type, idx) => {
                                <div className={type} key={idx}>
                                    <label htmlFor={type} style={form.label.style}>{type}</label>
                                    <input type={type} name={type} style={form.input.style} />
                                </div>
                            })}
                        </form>
                    )
                })} */}
            </main>
            <footer>
                {currTemplate.addOns.footer.footer.map((footer, idx) => {
                    return (
                        <section className="container main-footer flex justify-between align-center" key={idx} style={footer.style}>
                            {footer.h3.map((h3, idx) => <h3 key={idx} style={h3.style}>{h3.txt}</h3>)}
                            <div className="flex align-center icons">
                                {footer.a.map((item, idx) => <a href="" key={idx} style={item.style}><i className={`fab fa-${item.txt}`}></i></a>)}
                            </div>
                        </section>
                    )
                })}
            </footer>
        </section>
    )
}
