import { RootState } from "store";

const selectError = (state: RootState) => state.user.error;
const selectData = (state: RootState) => state.user.data;
const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
const selectUser = (state: RootState) => state.user;
const selectLoading = (state: RootState) => state.user.loading;

export default { selectError, selectData, selectIsAuthenticated, selectUser, selectLoading };
