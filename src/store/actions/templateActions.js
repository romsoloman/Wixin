import { templateService } from '../../services/template.service.js';

// Thunk - Action Dispatcher
export function loadTemplates(filterBy) {
  return async dispatch => {
    const templates = await templateService.query(filterBy)
    const action = {
      type: 'SET_TEMPLATES',
      templates
    }
    dispatch(action)
  }
}

export function getTemplateById(templateId) {
  return async dispatch => {
    const template = await templateService.getById(templateId)
    dispatch({ type: 'SET_TEMPLATE', template })
  }
}

export function getEmptyTemplate() {
  return async dispatch => {
    const emptyTemplate = await templateService.getEmptyTemplate()
    dispatch({ type: 'SET_EMPTY_TEMPLATE', emptyTemplate })
  }
}
export function saveTemplate(template) {
  return async dispatch => {
    const isAdd = !template._id
    const updatedTemplate = await templateService.save(template)
    if (isAdd) dispatch({ type: 'ADD_TEMPLATE', template: updatedTemplate })
    else dispatch({ type: 'UPDATE_TEMPLATE', updatedTemplate })
  }
}
export function removeTemplate(templateId) {
  return async dispatch => {
    await templateService.remove(templateId)
    dispatch({ type: 'REMOVE_TEMPLATE', templateId })
  }
}
