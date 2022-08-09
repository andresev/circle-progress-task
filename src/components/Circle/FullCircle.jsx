import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CircleProgress from './CircleProgress';

const FullCircle = ({}) => {
  const outerCircleTask = [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 1
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 2
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 3
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ];

  const innerCircleTask = [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 1
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 2
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 3
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ];

  const middleCircleTask = [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 1
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 2
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], //DEPARTMENT 3
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ];

  const [phase, setPhase] = useState(1);

  const [department, setDepartment] = useState(0);
  const [task, setTask] = useState(0);
  const [subtask, setSubtask] = useState(0);

  const [outerCircleArray, setOuterCircleArray] = useState([
    ...outerCircleTask,
  ]);
  const [innerCircleArray, setInnerCircleArray] = useState([
    ...innerCircleTask,
  ]);
  const [middleCircleArray, setMiddleCircleArray] = useState([
    ...middleCircleTask,
  ]);

  const handleChange = () => {
    if (parseInt(phase) === 1) {
      if (parseInt(department) === 0) {
        const newArr = [...outerCircleArray];
        newArr[department][task][subtask] = 100;
        setOuterCircleArray(newArr);
      } else if (parseInt(department) === 1) {
        const newArr = [...outerCircleArray];
        newArr[department][task][subtask] = 100;
        setOuterCircleArray(newArr);
      } else if (parseInt(department) === 2) {
        const newArr = [...outerCircleArray];
        newArr[department][task][subtask] = 100;
        setOuterCircleArray(newArr);
      }
    } else if (parseInt(phase) === 2) {
      if (parseInt(department) === 0) {
        const newArr = [...innerCircleArray];
        newArr[department][task][subtask] = 100;
        setInnerCircleArray(newArr);
      } else if (parseInt(department) === 1) {
        const newArr = [...innerCircleArray];
        newArr[department][task][subtask] = 100;
        setInnerCircleArray(newArr);
      } else if (parseInt(department) === 2) {
        const newArr = [...innerCircleArray];
        newArr[department][task][subtask] = 100;
        setInnerCircleArray(newArr);
      }
    } else if (parseInt(phase) === 3)
      if (parseInt(department) === 0) {
        const newArr = [...middleCircleArray];
        newArr[department][task][subtask] = 100;
        setMiddleCircleArray(newArr);
      } else if (parseInt(department) === 1) {
        const newArr = [...middleCircleArray];
        newArr[department][task][subtask] = 100;
        setMiddleCircleArray(newArr);
      } else if (parseInt(department) === 2) {
        const newArr = [...middleCircleArray];
        newArr[department][task][subtask] = 100;
        setMiddleCircleArray(newArr);
      }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 3 DEPARTMENTS */}
      <View>
        <View style={styles.circle}>
          <CircleProgress
            size={800}
            width={70}
            backgroundWidth={80}
            task={1}
            subtask={outerCircleArray[0]}
            departmentNum={1}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={9}
            tintColor="#06D6A0"
          />
          <CircleProgress
            size={800}
            width={70}
            backgroundWidth={80}
            task={2}
            subtask={outerCircleArray[1]}
            departmentNum={2}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={2}
            tintColor="#EFEA5A"
          />
          <CircleProgress
            size={800}
            width={70}
            backgroundWidth={80}
            task={3}
            subtask={outerCircleArray[2]}
            departmentNum={3}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={7}
            tintColor="#F29E4C"
          />
        </View>

        <View style={styles.circle}>
          <CircleProgress
            size={600}
            width={50}
            backgroundWidth={60}
            task={1}
            subtask={innerCircleArray[0]}
            departmentNum={1}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={5}
            tintColor="#06D6A0"
          />
          <CircleProgress
            size={600}
            width={50}
            backgroundWidth={60}
            task={2}
            subtask={innerCircleArray[1]}
            departmentNum={2}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={3}
            tintColor="#EFEA5A"
          />
          <CircleProgress
            size={600}
            width={50}
            backgroundWidth={60}
            task={3}
            subtask={innerCircleArray[2]}
            departmentNum={3}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={5}
            tintColor="#F29E4C"
          />
        </View>
        <View style={styles.circle}>
          <CircleProgress
            size={400}
            width={30}
            backgroundWidth={40}
            task={1}
            subtask={middleCircleArray[0]} //ORIGINAL: middleCircleArray[2].subtask1
            departmentNum={1}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={2}
            tintColor="#06D6A0"
          />
          <CircleProgress
            size={400}
            width={30}
            backgroundWidth={40}
            task={2}
            subtask={middleCircleArray[1]} //ORIGINAL: middleCircleArray[2].subtask2
            departmentNum={2}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={3}
            tintColor="#EFEA5A"
          />
          <CircleProgress
            size={400}
            width={30}
            backgroundWidth={40}
            task={3}
            subtask={middleCircleArray[2]} //ORIGINAL: middleCircleArray[2].subtask3
            departmentNum={3}
            numOfDepartments={3} // Default: 3; Only supports 3 Departments ATM
            numOfSubtask={1}
            tintColor="#F29E4C"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputText}>Phase</Text>
          <TextInput
            style={styles.input}
            value={phase}
            onChangeText={setPhase}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Department</Text>
          <TextInput
            style={styles.input}
            value={department}
            onChangeText={setDepartment}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Task</Text>
          <TextInput style={styles.input} value={task} onChangeText={setTask} />
        </View>
        <View>
          <Text style={styles.inputText}>Subtask</Text>
          <TextInput
            style={styles.input}
            value={subtask}
            onChangeText={setSubtask}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChange}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '-25%',
    justifyContent: 'center',
  },
  circle: {},
  buttonContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 75,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'lightgreen',
    paddingVertical: 20,
    paddingHorizontal: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  inputContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    //justifyContent: 'flex-end',
    bottom: 175,
  },
  input: {
    textAlignVertical: 'center',
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputText: {
    textAlign: 'center',
  },
});

export default FullCircle;
