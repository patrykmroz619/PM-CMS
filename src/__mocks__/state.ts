const state: RootState = {
  user: {
    isAuthenticated: true,
    error: "",
    loading: false,
    data: {
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
        id: "1231ewad21313123",
        name: "Project 1",
        createdAt: "160799043",
        updatedAt: "160799043",
        endpoint: "project-1",
        published: true
      },
      {
        id: "1231ewad21313dsf",
        name: "Project 2",
        createdAt: "160797043",
        updatedAt: "160798043",
        endpoint: "project-2",
        published: true
      }
    ]
  },
  currentProject: {
    loading: false,
    data: {
      id: "1231ewad21313dsf",
      name: "Project 2",
      createdAt: "160797043",
      updatedAt: "160798043",
      endpoint: "project-2",
      published: true
    },
    error: ""
  }
};

export default state;
