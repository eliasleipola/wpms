import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.droidSafeArea}>
        <List></List>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#14065B',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});

export default App;
