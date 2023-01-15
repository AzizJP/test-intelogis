import {FC, memo} from 'react';

import Content from '../Content/Content';
import Sider from '../Sider/Sider';
import './Main.scss';

const Main: FC = memo(() => {
  return (
    <main className="main">
      <Sider />
      <Content />
    </main>
  );
});

export default Main;
