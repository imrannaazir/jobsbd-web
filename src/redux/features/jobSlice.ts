import { TSearchParams } from "@/type";
import { createSlice } from "@reduxjs/toolkit";


type TInitialState = {
  filter: TSearchParams | null;
};

const initialState: TInitialState = {
  // {{url}}/job/get-all?query=sde&location=dhaka&industry=it&department=tech&minExperience=10&minSalary=30&maxSalary=650&negotiable=true
  filter: {
    query: "",
    location: "",
    industry: "",
    department: "",
    minExperience: "",
    minSalary: "",
    maxSalary: "",
    negotiable: "",
  },
};

const jobSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log(action?.payload, 'from state');
      state.filter = { ...action.payload };
    },
    clearFilter: (state) => {
      state.filter = null;
    },
  },
});

export const { setFilter, clearFilter } = jobSlice.actions;

export default jobSlice.reducer;
