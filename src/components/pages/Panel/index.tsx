import React, { Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "@routes";

import { PanelLayout } from "@layout";
import { Spinner } from "@common";
import { useDispatch } from "react-redux";
import { setCurrentProject } from "store/fetch/projectsFetch";
const ProjectsView = React.lazy(() => import("../../views/Projects"));
const ProjectFormView = React.lazy(() => import("../../views/ProjectForm"));
const ContentModelFormView = React.lazy(() => import("../../views/ContentModelForm"));
const ContentView = React.lazy(() => import("../../views/Content"));
const SingleRecordView = React.lazy(() => import("../../views/SingleRecord"));
const MediaView = React.lazy(() => import("../../views/Media"));
const ProfileView = React.lazy(() => import("../../views/Profile"));
const SettingsView = React.lazy(() => import("../../views/Settings"));
const LogoutView = React.lazy(() => import("../../views/Logout"));

const PanelPage = () => {
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
          <Route path={routes.content}>
            <ContentView />
          </Route>
          <Route exact path={routes.newContentModel}>
            <ContentModelFormView />
          </Route>
          <Route exact path={routes.singleRecord}>
            <SingleRecordView />
          </Route>
          <Route exact path={routes.media}>
            <MediaView />
          </Route>
          <Route exact path={routes.profile}>
            <ProfileView />
          </Route>
          <Route exact path={routes.settings}>
            <SettingsView />
          </Route>
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
