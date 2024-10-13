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
import { Notification } from './src/components/Notification';
import { ToastProvider } from 'react-native-toast-notifications'
const App= () => {


  return (
    <ToastProvider
    placement="top"
    renderType={{
      custom_type: Notification
      
    }}
     >
    <SafeAreaView >
      <ScrollView>
      {/* <Notification /> */}
     <Timer index={1} notify={()=>{}} />
     <Timer index={2} notify={()=>{}} />
     <Timer index={3} notify={()=>{}} />
     <Timer index={4} notify={()=>{}} />
     <Timer index={5} notify={()=>{}} />
     
     </ScrollView>
    </SafeAreaView>
    </ToastProvider>
  );
};


export default App;
