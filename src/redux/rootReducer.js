import {CHANGE_TEXT, TABLE_RESIZE} from '@/redux/types';

export function rootReducer(state, action) {
  let prevSate
  let field
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      prevSate = state[field] || {}
      prevSate[action.data.id] = action.data.value
      return {
        ...state, [field]: prevSate
      }
    case CHANGE_TEXT:
      prevSate = state['dataState'] || {}
      prevSate[action.data.id] = action.data.value
      return {
        ...state, currentText: action.data.value, dataState: prevSate
      }
    default: return state
  }
}