import { createSlice } from "@reduxjs/toolkit";
import hc from '../server/hc'

const getInialState = () => ({
  initialUsers: [],
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
      users,
      initialUsers: users
    })
  );
};

export const loadById = (id) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  try {
    const user = await hc.get(`/users/${id}`);

    dispatch(setState({ loading: false, user }));
  } catch (err) {
    console.log(err);
    setState({ loading: false })
  }

};

export const remove = (id) => async (dispatch, getState) => {
  try {
    await hc.delete(`/users/${id}`);
    let { users, initialUsers } = getState().users;
    users = users.filter(user => user.id !== id);
    initialUsers = initialUsers.filter(user => user.id !== id);

    dispatch(setState({ users, initialUsers }));
  } catch (err) {
    console.log(err);
  }
};

export const setActiveUser = (data) => async (dispatch, getState) => {
  const { user } = getState().users;
  dispatch(setState({ loading: true }));
  await dispatch(
    setState({
      user: { ...user, ...data },
      loading: false
    })
  );
}

export const setUserNewData = (data) => async (dispatch, getState) => {
  let { users, initialUsers } = getState().users;

  let user = users.find(u => u.id === data.id);
  user = { ...user, ...data };

  users = users.map(u => {
    return (u.id === data.id ? user : u)
  });

  initialUsers = initialUsers.map(u => {
    return (u.id === data.id ? user : u)
  });

  try {
    await hc.patch(`/users/${user.id}`, user);
    await dispatch(setState({ user, users, initialUsers }));
  } catch (err) {
    console.log(err);
  }
};

export const createNewUser = data => async (dispatch, getState) => {
  let { user, users, initialUsers } = getState().users;
  data.id = Math.max(...users.map(user => user.id)) + 1
  user = { ...user, ...data };
  users = [...users, user]
  initialUsers = [...initialUsers, user]
  try {
    await hc.post(`/users`, user);
    await dispatch(setState({ user, users, initialUsers }));
  } catch (err) {
    console.log(err);
  }
}

export const filterUsersByName = (name) => (dispatch, getState) => {
  const { initialUsers } = getState().users;
  if (name.length < 3) {
    dispatch(setState({ users: initialUsers }));
  } else {
    const filteredUsers = initialUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    dispatch(setState({ users: filteredUsers }));
  }
};
