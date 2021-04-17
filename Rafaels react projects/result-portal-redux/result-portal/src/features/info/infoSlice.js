import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    information: {
        semester: "previous & Current",
        programme: 'Msc',
        year: '2020/2021',
        season: 'Harmattan'
    }
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        semesterCount: (state, { payload }) => {
           state.information.semester = payload
        },
        selectedProgramme: (state, { payload }) => {
            state.information.programme = payload
        },
        selectedYear: (state, { payload }) => {
            state.information.year = payload
        },
        selectedSeason: (state, { payload }) => {
            state.information.season = payload
        }
    }
});

export const {
    semesterCount,
    selectedSeason,
    selectedProgramme,
    selectedYear
} = infoSlice.actions
export default infoSlice.reducer