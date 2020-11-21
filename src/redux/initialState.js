import {storage} from '@core/utils';
import {defaultStyle, defaultTitle} from '@/constants';

export const defaultState ={
  rowState: {},
  colState: {},
  currentTest: '',
  dataState: {},
  stylesState: {},
  currentStyles: defaultStyle,
  title: defaultTitle
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyle,
  currentText: ''
})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState