import thunk, { ThunkDispatch } from 'redux-thunk';

import { IAppLayoutSettings } from 'app/layouts/settings';
import { RootState } from '../reducers/RootReducer';

export const SET_LAYOUT_SETTINGS = 'LAYOUT_SET_SETTINGS';
export const SET_DEFAULT_LAYOUT_SETTINGS = 'LAYOUT_SET_DEFAULT_SETTINGS';

export const setLayoutSettings = (data: IAppLayoutSettings) => (
  dispatch: any
) => {
  dispatch({
    type: SET_LAYOUT_SETTINGS,
    data: data
  });
};

export const setDefaultSettings = (data: RootState) => (dispatch: any) => {
  dispatch({
    type: SET_DEFAULT_LAYOUT_SETTINGS,
    data: data
  });
};
