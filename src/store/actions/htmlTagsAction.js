import { htmlTagsService } from '../../services/htmlTags.service.js';

// Thunk - Action Dispatcher
export function loadHtmlTags() {
  return async dispatch => {
    const htmlTags = await htmlTagsService.query()
    const action = {
      type: 'SET_HTML_TAGS',
      htmlTags
    }
    dispatch(action)
  }
}

// export function getTemplateById(templateId) {
//   return async dispatch => {
//     const template = await templateService.getById(templateId)
//     dispatch({ type: 'SET_TEMPLATE', template })
//   }
// }
// export function saveTemplate(template) {
//   return async dispatch => {
//     const isAdd = !template._id
//     const updatedTemplate = await templateService.save(template)

//     if (isAdd) dispatch({ type: 'ADD_TEMPLATE', template: updatedTemplate })
//     else dispatch({ type: 'UPDATE_TEMPLATE', updatedTemplate })
//   }
// }
// export function removeTemplate(templateId) {
//   return async dispatch => {
//     await templateService.remove(templateId)
//     dispatch({ type: 'REMOVE_TEMPLATE', templateId })
//   }
// }
