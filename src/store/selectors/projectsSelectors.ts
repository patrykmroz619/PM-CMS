const projects = (state: RootState) => state.projects.data;
const loading = (state: RootState) => state.projects.loading;

export default { projects, loading };
