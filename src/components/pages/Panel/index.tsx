import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { PanelLayout } from "@layout";
import { Spinner } from "@common";

const ProjectsView = React.lazy(() => import("../../views/Projects"));
const ContentView = React.lazy(() => import("../../views/Content"));
const MediaView = React.lazy(() => import("../../views/Media"));
const ProfileView = React.lazy(() => import("../../views/Profile"));
const SettingsView = React.lazy(() => import("../../views/Settings"));

const PanelPage = () => {
  return (
    <PanelLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/panel">
            <ProjectsView />
          </Route>
          <Route path="/panel/content">
            <ContentView />
          </Route>
          <Route path="/panel/media">
            <MediaView />
          </Route>
          <Route path="/panel/profile">
            <ProfileView />
          </Route>
          <Route path="/panel/settings">
            <SettingsView />
          </Route>
        </Switch>
      </Suspense>
    </PanelLayout>
  );
};

export default PanelPage;
