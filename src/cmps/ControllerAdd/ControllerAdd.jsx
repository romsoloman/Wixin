import React, { useEffect } from 'react';
import { loadHtmlTags } from '../../store/actions/htmlTagsAction';
import { useDispatch, useSelector } from 'react-redux';
import './ControllerAdd.scss'
import {NavbarList} from '../NavbarList/NavbarList';
import {HeroList} from '../HeroList/HeroList';
import {SectionList} from '../SectionList/SectionList';
import {CardList} from '../CardList/CardList';
import {TextList} from '../TextList/TextList';
import {ImageList} from '../ImageList/ImageList';
import {FormList} from '../FormList/FormList';
import {FooterList} from '../FooterList/FooterList';

const cmpMap = {
    'Navbars': NavbarList,
    'Heroes': HeroList,
    'Sections':SectionList,
    'Cards':CardList,
    'Texts':TextList,
    'Images':ImageList,
    'Forms':FormList,
    'Footers':FooterList,

}

export const ControllerAdd = (props) => {
    const htmlTags = useSelector(state => state.htmlTagsReducer.htmlTags)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadHtmlTags())
    }, [])

    function getDynamicCmp(tagName, props) {
        var DynamicCmp = cmpMap[tagName]
        return <DynamicCmp props={props} key={props._id} />
    }
    return (
        htmlTags && <section className="controller-add">
            <button className="add-button">Add</button>
            <button className="add-button">Edit</button>
            {htmlTags.map((tag) =>
                getDynamicCmp(tag.tagName, tag))}
        </section>
    )
}
