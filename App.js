import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Timer} from './src/components/Timer';
import {Notification} from './src/components/Notification';
import {ToastProvider} from 'react-native-toast-notifications';
import {AddtimerButton} from './src/components/AddtimerButton';

const App = () => {
  const [timer, setTimers] = useState([1]); //here i am storing timer count

  //function responsible for creating timer
  const addtoArray = toast => {
    if (timer.length == 5) {
      //this prevents user from creating more timers than 5
      toast.show(`Maximum timer limit had been reached`, {
        type: 'danger',
      });
      return;
    }
    const myarr = [...timer];
    myarr.push(1); //increasing the timer count by pushing a number to array
    setTimers(myarr);
  };

  return (
    <ToastProvider
      placement="top"
      renderType={{
        custom_type: Notification,
      }}>
      <SafeAreaView>
        <ScrollView style={styles.scrollviewStyle}>
          {timer.map((ele, ind) => (
            <Timer key={ind} index={ind + 1} />
          ))}
          <AddtimerButton addtoArray={addtoArray} />
        </ScrollView>
      </SafeAreaView>
    </ToastProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollviewStyle: {
    paddingBottom: 30,
  },
});
