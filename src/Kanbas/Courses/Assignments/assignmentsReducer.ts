import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
interface Assignment{
      _id: string,
      title: string,
      course: string,
      dueDate: any,
      points: any,
      availableFromDate: any,
      availableUntilDate: any,
}
const initialState = {
    assignments: [] as Assignment[], 
    assignment: { 
      _id: "new",
      title: "",
      course: "",
      dueDate: "",
      points: "",
      availableFromDate: "",
      availableUntilDate: "",
    },
  };
  
  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
        ];
      },
      
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => 
          {if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
         }); 
      },
      
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  
  export const { addAssignment, deleteAssignment, updateAssignment,
     setAssignment,setAssignments } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;