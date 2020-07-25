import thunk, { ThunkDispatch } from 'redux-thunk';

import { AppRootState } from '../reducers/RootReducer';
import { IAppLayoutSettings } from 'app/layouts/AppLayoutSettings';

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

export const setDefaultSettings = (data: AppRootState) => (dispatch: any) => {
  dispatch({
    type: SET_DEFAULT_LAYOUT_SETTINGS,
    data: data
  });
};
