import {createSlice} from "@reduxjs/toolkit";
import hc from '../server/hc'

const getInialState = () => ({
  users: [],
  loading: false,
  user: null
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

    dispatch(
      setState({
        loading: false,
        users
      })
    );
};

export const loadById = (id) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  const user = await hc.get(`/users/${id}`);

  dispatch(
    setState({
      loading: false,
      user
    })
  );
};

export const create = (params) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  const user = await hc.post("/users", params);

  dispatch(
    setState({
      loading: false,
      user
    })
  );
};

export const remove = (id) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  await hc.delete(`/users/${id}`);

  dispatch(setState({ loading: false }));
};

export const setUserNewData = (data) => (dispatch, getState) => {
  const { user } = getState().users;
  console.log('user', user);
  console.log('data', data);
  dispatch(setState({ user: {...user, ...data} }));
};



