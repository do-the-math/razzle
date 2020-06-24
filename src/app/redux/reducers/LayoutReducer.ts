import { Action, AnyAction } from 'redux';
import {
  SET_DEFAULT_LAYOUT_SETTINGS,
  SET_LAYOUT_SETTINGS
} from '../actions/LayoutActions';

import AppLayoutSettings from '../../layouts/settings';

const initialState = {
  settings: {
    ...AppLayoutSettings
  }
};

const LayoutReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LAYOUT_SETTINGS:
      return {
        ...state,
        settings: { ...action.data }
      };
    case SET_DEFAULT_LAYOUT_SETTINGS:
      return {
        ...state,
        defaultSettings: { ...action.data }
      };
    default:
      return { ...state };
  }
};

export default LayoutReducer;
