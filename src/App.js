import { Routes } from './routes';

import 'antd/dist/antd.css';
import './styles/global.scss';
import { UserContextProvider } from './contexts/User';

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
   
  );
}

export default App;
