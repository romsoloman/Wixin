const INITIAL_STATE = {
  templates: null,
  currTemplate: null
}

export function templateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TEMPLATES':
      return {
        ...state,
        templates: action.templates
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