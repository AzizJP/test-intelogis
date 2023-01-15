import {FC, memo} from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';

const App: FC = memo(() => {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
});

export default App;
