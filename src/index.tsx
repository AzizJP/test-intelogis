import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './app/store';
import App from './components/App/App';
import './index.scss';

const domContainer = document.getElementById('root')!;
const root = createRoot(domContainer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
