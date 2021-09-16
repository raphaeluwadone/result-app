import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import infoReducer from '../features/info/infoSlice';
import firstReducer from '../features/firstSemester/firstSlice'
import secondReducer from '../features/secondSemester/secondSlice'
import scoreReducer from '../features/scores/scoresSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    finalData: infoReducer,
    firstSemester: firstReducer,
    secondSemester: secondReducer,
    score: scoreReducer
  },
});
