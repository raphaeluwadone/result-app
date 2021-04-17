import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    finalInfo: []
}


const scoresSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        inputedData: (state, { payload }) => {
            state.finalInfo.push(payload)
        }
    }
});

export const {
    inputedData
} = scoresSlice.actions
export default scoresSlice.reducer