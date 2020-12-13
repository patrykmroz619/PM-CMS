const error = (state: RootState) => state.user.error;
const data = (state: RootState) => state.user.data;
const isAuthenticated = (state: RootState) => state.user.isAuthenticated;
const user = (state: RootState) => state.user;
const loading = (state: RootState) => state.user.loading;

export default { error, data, isAuthenticated, user, loading };
