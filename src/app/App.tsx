import '../styles/_app.scss';

import AppContext from './AppContext';
import AppLayout from './layouts/AppLayout';
import AppTheme from './layouts/theme/AppTheme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { Store } from './redux/Store';
import routes from './RootRoutes';

const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <AppTheme>
          <BrowserRouter>
            <AppLayout />
          </BrowserRouter>
        </AppTheme>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
