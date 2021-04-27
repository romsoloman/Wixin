const INITIAL_STATE = {
  htmlTags: null,
  // currTemplate: null
}

export function htmlTagsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_HTML_TAGS':
      return {
        ...state,
        htmlTags: action.htmlTags
      }
    case 'SET_TEMPLATE':
      return {
        ...state,
        currTemplate: action.template
      }
    case 'ADD_TEMPLATE':
      return {
        ...state,
        templates: [...state.templates, action.template]
      }
    case 'REMOVE_TEMPLATE':
      return {
        ...state,
        templates: state.templates.filter(template => template._id !== action.templateId)
      }
    case 'UPDATE_TEMPLATE':
      const { updatedTemplate } = action
      return {
        ...state,
        templates: state.templates.map(template => template._id === updatedTemplate._id ? updatedTemplate : template)
      }
    default:
      return state
  }
}
