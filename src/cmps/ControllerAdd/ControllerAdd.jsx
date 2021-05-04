import React, { useEffect, useState } from 'react';
import { loadHtmlTags } from '../../store/actions/htmlTagsAction';
import { useDispatch, useSelector } from 'react-redux';
import './ControllerAdd.scss'
import { NavbarList } from '../NavbarList/NavbarList';
import { HeroList } from '../HeroList/HeroList';
import { SectionList } from '../SectionList/SectionList';
import { CardList } from '../CardList/CardList';
import { TextList } from '../TextList/TextList';
import { ImageList } from '../ImageList/ImageList';
import { FormList } from '../FormList/FormList';
import { FooterList } from '../FooterList/FooterList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const cmpMap = {
    'navbar': NavbarList,
    'hero': HeroList,
    'sections': SectionList,
    'cards': CardList,
    'texts': TextList,
    'images': ImageList,
    'forms': FormList,
    'footer': FooterList,
}

export const ControllerAdd = (props) => {
    const [arr2, updateArr2] = useState(arr);
    const htmlTags = useSelector(state => state.htmlTagsReducer.htmlTags)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadHtmlTags())
    }, [])
    function getDynamicCmp(tagName, props, getCmp,templateId) {
        var DynamicCmp = cmpMap[tagName]
        return <DynamicCmp props={props} key={props._id} getCmp={getCmp} templateId={templateId}/>
    }
    function handleOnDragEnd(result) {
        if (!result.destination) return;
        console.log(result)
        const items = Array.from(arr2);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateArr2(items);
    }

    return (
        htmlTags && <section className="controller-add">
            <button className="add-button">Add</button>
            <button className="add-button">Edit</button>
            <div className="tags-list">
                {htmlTags.map((tag) => getDynamicCmp(tag.tagName, tag, props.getCmp,props.templateId))}
            </div>
            {/* <DragDropContext>
                <Droppable droppableId="numbers">
                    {(provided) => (
                        <ul className="nubmers" {...provided.droppableProps} ref={provided.innerRef}>
                            {htmlTags.map((tag, idx) => {
                                return (
                                    <Draggable key={idx} draggableId={`${idx}`} index={idx}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {getDynamicCmp(tag.tagName, tag)}
                                            </li>
                                        )}
                                    </Draggable>
                                )
                            })}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext> */}
        </section>
    )
}

var arr = [1, 2, 3, 4, 5, 6]
