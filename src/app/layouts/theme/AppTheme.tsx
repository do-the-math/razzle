import AppCssVars from './AppCssVars';
import { AppRootState } from 'app/redux/reducers/RootReducer';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';

interface Props {
  settings: AppRootState['layout']['settings'];
  children: any;
}

const AppTheme: React.FC<Props> = ({ children, settings }) => {
  let activeTheme = {
    ...settings.themes[settings.activeTheme]
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <AppCssVars> {children} </AppCssVars>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: AppRootState) => ({
  settings: state.layout.settings
});

export default connect(mapStateToProps, {})(AppTheme);
