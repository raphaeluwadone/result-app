import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstSemesterCourses: []
}

const firstSlice = createSlice({
    name: 'firstSemester',
    initialState,
    reducers: {
        firstCourseList: (state, { payload } ) => {
            state.firstSemesterCourses = [...payload]
        }
    }
});

export const {
    firstCourseList
} = firstSlice.actions
export default firstSlice.reducer