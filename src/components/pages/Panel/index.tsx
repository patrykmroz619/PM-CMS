import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "@routes";

import { PanelLayout } from "@layout";
import { Spinner } from "@common";
const ProjectsView = React.lazy(() => import("../../views/Projects"));
const NewProjectFormView = React.lazy(() => import("../../views/NewProjectForm"));
const ContentView = React.lazy(() => import("../../views/Content"));
const MediaView = React.lazy(() => import("../../views/Media"));
const ProfileView = React.lazy(() => import("../../views/Profile"));
const SettingsView = React.lazy(() => import("../../views/Settings"));

const PanelPage = () => {
  return (
    <PanelLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.projects}>
            <ProjectsView />
          </Route>
          <Route path={routes.newProject}>
            <NewProjectFormView />
          </Route>
          <Route path={routes.content}>
            <ContentView />
          </Route>
          <Route path={routes.media}>
            <MediaView />
          </Route>
          <Route path={routes.profile}>
            <ProfileView />
          </Route>
          <Route path={routes.settings}>
            <SettingsView />
          </Route>
        </Switch>
      </Suspense>
    </PanelLayout>
  );
};

export default PanelPage;
