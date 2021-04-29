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
        currTemplate && <section className='editor-container details-page'>
            <header>
                <nav>
                    <h1>{currTemplate.addOns.header.navbar.logo}</h1>
                    <div>
                        {currTemplate.addOns.header.navbar.a.map(item => <a href="#">{item}</a>)}
                    </div>
                </nav>
                <section>
                    <h1>{currTemplate.addOns.header.hero.h1}</h1>
                    <p>{currTemplate.addOns.header.hero.p}</p>
                    <button>{currTemplate.addOns.header.hero.button}</button>
                </section>
            </header>
            <main>
                {currTemplate.addOns.main.sections.map(section => {
                    return (
                        <div>
                            <img src={section.img} alt="" />
                            <h1>{section.h1}</h1>
                            <p>{section.p}</p>
                        </div>
                    )
                })}
                {currTemplate.addOns.main.forms.map(form => {
                    return(
                        <form>
                            <label name={form.lables[0]}>{form.lables[0]}</label>
                            <input name={form.lables[0]} type="text"/>
                            <label name={form.lables[1]}>{form.lables[1]}</label>
                            <input name={form.lables[1]} type="text"/>
                            <label name={form.lables[2]}>{form.lables[2]}</label>
                            <input name={form.lables[2]} type="text"/>
                        </form>
                    )
                })}
            </main>
            <footer>
                <h3>{currTemplate.addOns.footer.h3}</h3>
                {currTemplate.addOns.footer.a.map(item => <a href='#'>{item}</a>)}
            </footer>
        </section>
    )
}
