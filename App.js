import {StatusBar} from 'expo-status-bar';
import {MainProvider} from './components/contexts/MainContext';
import Navigator from './views/navigators/Navigator';

const App = () => {
  return (
    <>
      <MainProvider>
        <Navigator></Navigator>
      </MainProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
