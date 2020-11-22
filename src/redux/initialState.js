import {defaultStyle, defaultTitle} from '@/constants';
import {clone} from '@core/utils';

export const defaultState ={
  rowState: {},
  colState: {},
  currentTest: '',
  dataState: {},
  stylesState: {},
  currentStyles: defaultStyle,
  title: defaultTitle,
  date: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyle,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}