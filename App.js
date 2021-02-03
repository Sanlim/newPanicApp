import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = () => {
  return(
    <View style={styles.container}>
      <Text>
        Sanlim Nisoy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;