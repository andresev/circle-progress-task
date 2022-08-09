import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
//import CircleProgress from './src/components/Circle/CircleProgress';
import FullCircle from './src/components/Circle/FullCircle';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'lightgray',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <FullCircle />
    </SafeAreaView>
  );
};

export default App;
