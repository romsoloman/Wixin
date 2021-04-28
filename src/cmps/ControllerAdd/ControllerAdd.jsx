import React, { useEffect } from 'react';
import { loadHtmlTags } from '../../store/actions/htmlTagsAction';
import { useDispatch, useSelector } from 'react-redux';
import './ControllerAdd.scss'
import { NavbarList } from '../NavbarList/NavbarList';
const cmpMap = {
    'navBars': NavbarList,
}

export const ControllerAdd = (props) => {
    const htmlTags = useSelector(state => state.htmlTagsReducer.htmlTags)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadHtmlTags())
    }, [])

    function getDynamicCmp(tagName, props) {
        var DynamicCmp = cmpMap[tagName]
        return <DynamicCmp props={props} />
    }
    return (
        htmlTags && <section className="controller-add">
            <button className="add-button">Add</button>
            <button className="edit-button">Edit</button>
            {htmlTags.map((tag) =>
                tag.tagName === 'Navbars' && <NavbarList navbars={tag} key={tag._id} />)}
            {/* <HeadersController/> */}
            {/* <SectionsController/> */}
            {/* <CardsController/> */}
            {/* <TextsController/> */}
            {/* <MapsController/> */}
            {/* <ImagesController/> */}
            {/* <VideosController/> */}
            {/* <FormsController/> */}
            {/* <FootersController/> */}
        </section>
    )
}

