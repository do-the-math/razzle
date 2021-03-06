import LayoutReducer from './LayoutReducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  layout: LayoutReducer
});

export default RootReducer;
export type AppRootState = ReturnType<typeof RootReducer>;
