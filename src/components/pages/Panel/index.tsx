import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "@routes";
import { setCurrentProject } from "@fetch";
import { currentProjectSelector } from "@selectors";

const ProjectsView = React.lazy(() => import("../../views/Projects"));
const ProjectFormView = React.lazy(() => import("../../views/ProjectForm"));
const ContentModelFormView = React.lazy(() => import("../../views/ContentModelForm"));
const ContentView = React.lazy(() => import("../../views/Content"));
const SingleRecordView = React.lazy(() => import("../../views/SingleRecord"));
const MediaView = React.lazy(() => import("../../views/Media"));
const ProfileView = React.lazy(() => import("../../views/Profile"));
const SettingsView = React.lazy(() => import("../../views/Settings"));
const LogoutView = React.lazy(() => import("../../views/Logout"));

import { PanelLayout } from "@layout";
import { ConditionalRoute, Spinner } from "@common";

const PanelPage = () => {
  const isProjectsRoutesAvailable = useSelector(currentProjectSelector.projectRoutesAvailable);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedProjectId = sessionStorage.getItem("selectedProjectId");
    if (selectedProjectId) {
      dispatch(setCurrentProject(selectedProjectId));
    }
  }, []);

  return (
    <PanelLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.projects}>
            <ProjectsView />
          </Route>
          <Route exact path={routes.newProject}>
            <ProjectFormView />
          </Route>
          <ConditionalRoute
            available={isProjectsRoutesAvailable}
            redirectTo={routes.projects}
            path={routes.content}
          >
            <ContentView />
          </ConditionalRoute>
          <ConditionalRoute
            available={isProjectsRoutesAvailable}
            redirectTo={routes.projects}
            exact
            path={routes.newContentModel}
          >
            <ContentModelFormView />
          </ConditionalRoute>
          <ConditionalRoute
            available={isProjectsRoutesAvailable}
            redirectTo={routes.projects}
            exact
            path={routes.singleRecord}
          >
            <SingleRecordView />
          </ConditionalRoute>
          <ConditionalRoute
            available={isProjectsRoutesAvailable}
            redirectTo={routes.projects}
            exact
            path={routes.media}
          >
            <MediaView />
          </ConditionalRoute>
          <Route exact path={routes.profile}>
            <ProfileView />
          </Route>
          <ConditionalRoute
            available={isProjectsRoutesAvailable}
            redirectTo={routes.projects}
            exact
            path={routes.settings}
          >
            <SettingsView />
          </ConditionalRoute>
          <Route exact path={routes.logout}>
            <LogoutView />
          </Route>
          <Route exact path={routes.panel}>
            <Redirect to={routes.projects} />
          </Route>
        </Switch>
      </Suspense>
    </PanelLayout>
  );
};

export default PanelPage;
