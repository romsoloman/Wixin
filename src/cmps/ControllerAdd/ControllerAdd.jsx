import React, { useEffect } from 'react';
import { loadHtmlTags } from '../../store/actions/htmlTagsActions';
import { useDispatch, useSelector } from 'react-redux';
import './ControllerAdd.scss'

export const ControllerAdd = (props) => {
    const htmlTags = useSelector(state => state.htmlTagsReducer.htmlTags)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadHtmlTags())
        console.log('htmlTags',htmlTags );
    }, [])

    return (
        <section className="controller-add">
            <button className="add-button">Add</button>
            <button className="add-button">Edit</button>
            {/* <NavbarsController/> */}
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
