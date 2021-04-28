import React, { useEffect } from 'react';
import { loadHtmlTags } from '../../store/actions/htmlTagsAction';
import { useDispatch, useSelector } from 'react-redux';
import './ControllerAdd.scss'
import {NavbarList} from '../NavbarList/NavbarList';
const cmpMap = {
    'Navbars': NavbarList,
}

export const ControllerAdd = (props) => {
    const htmlTags = useSelector(state => state.htmlTagsReducer.htmlTags)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadHtmlTags())
    }, [])

    function getDynamicCmp(tagName, props){
        var DynamicCmp = cmpMap[tagName]
        console.log('DynamicCmp', DynamicCmp);
       return  <DynamicCmp props={props} key={props._id}/>
    }
    return (
        htmlTags && <section className="controller-add">
            <button className="add-button">Add</button>
            <button className="add-button">Edit</button>
            {htmlTags.map((tag) =>
            getDynamicCmp(tag.tagName,tag))}
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
