import {createSlice} from "@reduxjs/toolkit";
import hc from '../server/hc'

const getInialState = () => ({
  users: [],
  loading: false,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: getInialState(),
  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    }
  }
});

export const { setState } = usersSlice.actions;

export default usersSlice.reducer;


export const loadAll = (params) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  const users = await hc.get("/users", params);

  setTimeout(()=> {
    dispatch(
      setState({
        loading: false,
        users
      })
    );
  }, 3000)
  
};
