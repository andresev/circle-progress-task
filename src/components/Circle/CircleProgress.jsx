import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
// import {Svg, Path, G} from 'react-native-svg';
// import {Circle} from 'react-native-svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CircleProgress = ({
  numOfDepartments,
  departmentNum,
  numOfSubtask,
  size,
  width,
  task,
  subtask,
  tintColor,
  backgroundWidth,
  backgroundColor,
}) => {
  let rotationLength = 0;

  departmentNum = departmentNum ? departmentNum : 1;
  numOfDepartments = numOfDepartments ? numOfDepartments : 3;
  numOfSubtask = numOfSubtask ? numOfSubtask : 1;

  const phase = [
    {
      task: 1,
      subtask: Array.from(Array(numOfSubtask).keys()).map(value => value === 0),
      subtaskCount: 0,
    },
    {
      task: 2,
      subtask: Array.from(Array(numOfSubtask).keys()).map(value => value === 0),
      subtaskCount: 0,
    },
    {
      task: 3,
      subtask: Array.from(Array(numOfSubtask).keys()).map(value => value === 0),
      subtaskCount: 0,
    },
  ];
  if (phase[0].task === task) {
    phase[0].subtask[0] = subtask[0][0];
    phase[0].subtask[1] = subtask[0][1];
    phase[0].subtask[2] = subtask[0][2];
    phase[0].subtask[3] = subtask[0][3];
    phase[0].subtask[4] = subtask[0][4];
    phase[0].subtask[5] = subtask[0][5];
    phase[0].subtask[6] = subtask[0][6];
    phase[0].subtask[7] = subtask[0][7];
    phase[0].subtask[8] = subtask[0][8];
  } else if (phase[1].task === task) {
    phase[0].subtask[0] = subtask[1][0];
    phase[0].subtask[1] = subtask[1][1];
    phase[0].subtask[2] = subtask[1][2];
    phase[0].subtask[3] = subtask[1][3];
    phase[0].subtask[4] = subtask[1][4];
    phase[0].subtask[5] = subtask[1][5];
    phase[0].subtask[6] = subtask[1][6];
    phase[0].subtask[7] = subtask[1][7];
    phase[0].subtask[8] = subtask[1][8];
  } else if (phase[2].task === task) {
    phase[0].subtask[0] = subtask[2][0];
    phase[0].subtask[1] = subtask[2][1];
    phase[0].subtask[2] = subtask[2][2];
    phase[0].subtask[3] = subtask[2][3];
    phase[0].subtask[4] = subtask[2][4];
    phase[0].subtask[5] = subtask[2][5];
    phase[0].subtask[6] = subtask[2][6];
    phase[0].subtask[7] = subtask[2][7];
    phase[0].subtask[8] = subtask[2][8];
  }

  // phase[0].subtask[0] = subtask[0][0];
  // phase[0].subtask[1] = subtask[0][1];
  // phase[0].subtask[2] = subtask[0][2];

  // phase[0].subtask[3] = subtask[1][0];
  // phase[0].subtask[4] = subtask[1][1];   //////// ORIGINAL
  // phase[0].subtask[5] = subtask[1][2];

  // phase[0].subtask[6] = subtask[2][0];
  // phase[0].subtask[7] = subtask[2][1];
  // phase[0].subtask[8] = subtask[2][2];

  const slicedSubtask = phase[0].subtask.slice(0, numOfSubtask);

  const Arc = slicedSubtask.map(value => {
    phase[0].subtaskCount++;
    rotationLength = 360 / (slicedSubtask.length * numOfDepartments);
    rotationExtended = rotationLength * phase[0].subtaskCount;

    if (departmentNum === 1) {
      //SWITCH CASE STATEMENTS
      switch (slicedSubtask.length) {
        case 2:
          rotationExtended += 60;
          break;
        case 3:
          rotationExtended += 80;
          break;
        case 4:
          rotationExtended += 90;
          break;
        case 5:
          rotationExtended += 96;
          break;
        case 6:
          rotationExtended += 100;
          break;
        case 7:
          rotationExtended += 103;
          break;
        case 8:
          rotationExtended += 105;
          break;
        case 9:
          rotationExtended += 106.5;
          break;
      }
    } else if (departmentNum === 2) {
      //SWITCH CASE STATEMENTS
      switch (slicedSubtask.length) {
        case 2:
          rotationExtended += 180;
          break;
        case 3:
          rotationExtended += 200;
          break;
        case 4:
          rotationExtended += 210;
          break;
        case 5:
          rotationExtended += 216;
          break;
        case 6:
          rotationExtended += 220;
          break;
        case 7:
          rotationExtended += 223;
          break;
        case 8:
          rotationExtended += 225;
          break;
        case 9:
          rotationExtended += 226.5;
          break;
        default:
          rotationExtended += 120;
      }
    } else if (departmentNum === 3) {
      //SWITCH CASE STATEMENTS
      switch (slicedSubtask.length) {
        case 2:
          rotationExtended -= 60;
          break;
        case 3:
          rotationExtended -= 40;
          break;
        case 4:
          rotationExtended -= 30;
          break;
        case 5:
          rotationExtended -= 24;
          break;
        case 6:
          rotationExtended -= 20;
          break;
        case 7:
          rotationExtended -= 17;
          break;
        case 8:
          rotationExtended -= 15;
          break;
        case 9:
          rotationExtended -= 13.5;
          break;
        default:
          rotationExtended -= 120;
      }
    }

    return (
      <View style={styles.circle}>
        <AnimatedCircularProgress
          size={size}
          width={width}
          fill={value} //
          lineCap="butt"
          rotation={rotationExtended}
          arcSweepAngle={
            phase[0].subtaskCount === 0 ||
            phase[0].subtaskCount === slicedSubtask.length
              ? rotationLength - 3
              : rotationLength - 0.75
          }
          tintColor={tintColor}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={backgroundColor ? backgroundColor : '#3d5875'}
          padding={45}
          backgroundWidth={backgroundWidth}
        />
      </View>
    );
  });

  return <View style={styles.container}>{Arc}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    position: 'absolute',
    top: 5,
  },
});

export default CircleProgress;
