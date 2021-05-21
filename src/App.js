import Routes from './routes';

import {AlertProvider} from '../src/providers/alert';
import {LoadingProvider} from '../src/providers/loading';

function App() {
  return (
    <LoadingProvider>
      <AlertProvider>
        <Routes />
      </AlertProvider>
    </LoadingProvider>
  );
}

export default App;
