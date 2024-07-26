// jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobDraft: {
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryMin: '',
    salaryMax: '',
    applicationDeadline: '',
    jobDescription: ''
  }
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobDraft: (state, action) => {
      state.jobDraft = action.payload;
    },
    clearJobDraft: (state) => {
      state.jobDraft = initialState.jobDraft;
    }
  }
});

export const { setJobDraft, clearJobDraft } = jobSlice.actions;

export default jobSlice.reducer;
