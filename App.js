/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Timer } from './src/components/Timer';


const App= () => {


  return (
    <SafeAreaView >
      <ScrollView>
     <Timer index={1} notify={()=>{}} />
     <Timer index={1} notify={()=>{}} />
     <Timer index={1} notify={()=>{}} />
     <Timer index={1} notify={()=>{}} />
     <Timer index={1} notify={()=>{}} />
     </ScrollView>
    </SafeAreaView>
  );
};


export default App;
