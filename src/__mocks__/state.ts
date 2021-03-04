const state: RootState = {
  user: {
    isAuthenticated: true,
    error: "",
    loading: false,
    data: {
      id: "asdqweqwe",
      email: "email@example.com",
      name: "Name",
      surname: "Surname",
      company: "Company"
    }
  },
  projects: {
    loading: false,
    error: "",
    data: [
      {
        userId: "asdqweqw",
        id: "1231ewad21313123",
        name: "Project 1",
        createdAt: "160799043",
        published: true
      },
      {
        id: "1231ewad21313dsf",
        userId: "dqwseqwe41243",
        name: "Project 2",
        createdAt: "160797043",
        published: true
      }
    ]
  },
  currentProject: {
    loading: false,
    data: {
      id: "1231ewad21313dsf",
      userId: "dqwseqwe41243",
      name: "Project 2",
      createdAt: "160797043",
      published: true,
      contentModels: []
    },
    selectedModelId: null,
    recordsError: false,
    recordsLoading: false,
    error: ""
  },
  notifications: {
    notifications: []
  }
};

export default state;
