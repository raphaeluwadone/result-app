import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    secondSemesterCourses: []
}

const secondSlice = createSlice({
    name: 'secondSemester',
    initialState,
    reducers: {
        secondCourseList: (state, { payload }) => {
            state.secondSemesterCourses = payload
        }
    }
});

export const {
    secondCourseList
} = secondSlice.actions
export default secondSlice.reducer