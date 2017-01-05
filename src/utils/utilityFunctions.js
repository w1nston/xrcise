const randomChar = c => {
  const r = (Math.random() * 16) | 0;
  const v = c === 'x' ? r : ((r & 0x3) | 0x8);
  return v.toString(16);
};

const mergeObjects = (acc, x) => Object.assign({}, acc, x);

const mergeEvenObjects = (acc, x, i) => {
  if ((i + 1) % 2 === 0) {
    const head = acc.pop();
    acc.push(Object.assign({}, head, x));
  } else {
    acc.push(x);
  }
  return acc;
};

export const generateGUID = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, randomChar);

export function transformToWorkoutSession(values) {
  const workoutSetsObject = Object.keys(values)
    .map(key => key.split('_'))
    .filter(splitKey => splitKey.length > 1)
    .map(splitKey => ({
      [splitKey[1]]:  {
        workoutDate: values.workoutDate,
        exerciseName: values[`exercise_${splitKey[1]}`].value,
        workoutSets: Object.keys(values)
          .map(key => key.split('_'))
          .filter(s => s.length > 2)
          .filter(s => s[1] === splitKey[1])
          .map(s => s.join('_'))
          .map((key, i) => (i % 2 === 0) ? ({ weight: values[key] }) : ({ reps: values[key] }))
          .reduce(mergeEvenObjects, [])
      }
    }))
    .reduce(mergeObjects, {});

  return Object.keys(workoutSetsObject)
    .map(key => workoutSetsObject[key]);
}