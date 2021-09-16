import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    information: {
        semester: "previous & Current",
        programme: 'Msc',
        year: '2020/2021',
        season: 'Harmattan',
        prog_type: 'Computer Science'
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
        },
        selectedType: (state, { payload }) => {
            state.information.prog_type = payload
        }
    }
});

export const {
    semesterCount,
    selectedSeason,
    selectedProgramme,
    selectedYear,
    selectedType
} = infoSlice.actions
export default infoSlice.reducer