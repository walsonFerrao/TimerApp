import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
export const Timer = ({index}) => {
  const [time, setTime] = useState(0); //this is time
  const [isItActive, setIsItActive] = useState(false); //this refers if timer is running or not
  const [isPaused, setIsPaused] = useState(false); //pause value
  const [inputValue, setInputValue] = useState(3); //this is input value
  const [timeInterval, setTimeInterval] = useState(false); //this is for to know if the time has been started or not so that we can prevent pause button from starting interval
  const toast = useToast();

  // Function to handle the interval countdown
  const setIntervalFunction = intervalfun => {
    setTime(prev => {
      if (prev <= 1) {
        // Show a notification when time reaches zero
        toast.show(`Timer ${index} has been reached zero`, {
          type: 'custom_type',
        });
        clearInterval(intervalfun);
        return 0; // Setting time to zero
      }
      return prev - 1;
    });
  };

  // Effect to handle starting, stopping, and clearing the timer
  const timerFunction = () => {
    let interval = null;
    if (isItActive && time > 0) {
      interval = setInterval(() => setIntervalFunction(interval), 1000);
    } else if (!isItActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Clean up interval on component unmount
  };

  // Function to start the timer
  const startTimer = () => {
    if (isItActive) {
      // If the timer is already active, show a notification
      toast.show(`timer is already started in timer ${index}`, {
        type: 'danger',
      });
      return;
    } else if (time > 0) {
      // Start the timer if time is greater than 0
      setIsItActive(true);
      setTimeInterval(true);
    }
  };

  // Effect runs when isItActive or time changes
  useEffect(timerFunction, [isItActive, time]);

  // Function to pause or resume the timer
  const pauseTimer = () => {
    if (time == 0 || !timeInterval) {
      //either if timer is zero or timer is not startedYet, pause button should not work
      return;
    }
    setIsItActive(prev => !prev);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsItActive(false);
    setTime(0);
    setIsPaused(false);
  };

  // Function to set the timer's input time
  const setInputTime = () => {
    setTime(inputValue);
    setIsItActive(false);
    setIsPaused(true);
    setTimeInterval(false)
  };


  const textInputCondition=()=>{
   return isNaN(Number(inputValue)) || Number(inputValue) < 1
  }

  return (
    <View style={styles.timerContainer}>
      <Text>Timer number: {index}</Text>
      <Text style={styles.timeDev}> {time}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={String(inputValue)}
          defaultValue={3}
          keyboardType="numeric"
          onChangeText={text => setInputValue(text)}
          placeholder="Set Time "
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity
          disabled={textInputCondition()}
          style={[
            styles.button,
            {
              backgroundColor:
              textInputCondition()
                  ? 'grey'
                  : 'blue',
            },
          ]}
          onPress={setInputTime}>
          <Text style={styles.buttonText}>AddTime</Text>
        </TouchableOpacity>
      </View>
      {(textInputCondition()) && (
        <Text style={{color: 'red'}}>
          Input time should be more than 0 or a valid number
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: time == 0 ? 'grey' : 'blue'},
          ]}
          disabled={time == 0}
          onPress={startTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: time == 0 ? 'grey' : 'blue'},
          ]}
          onPress={pauseTimer}>
          <Text style={styles.buttonText}>
            {isItActive ? 'Pause' : 'resume'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeDev: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '70%',
    marginRight: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Timer;
