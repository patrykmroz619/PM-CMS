const name = (state: RootState) => state.currentProject.data?.name;

const contentModels = (state: RootState) => state.currentProject.data?.contentModels || [];
const selectedModelId = (state: RootState) => state.currentProject.selectedModelId;
const loading = (state: RootState) => state.currentProject.loading;
const id = (state: RootState) => state.currentProject.data?.id;
const recordsLoading = (state: RootState) => state.currentProject.recordsLoading;

export default { name, contentModels, selectedModelId, loading, id, recordsLoading };
