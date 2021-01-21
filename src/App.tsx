import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet } from "@ionic/react";

import CheckList from "./pages/CheckList";
import HomePage from "./pages/HomePage";
import TodoTab from "./pages/TodoTab";
import CompletedTab from "./pages/CompletedTab";
import ChecklistNotes from "./pages/ChecklistNotes";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import QuestionPage from "./pages/QuestionPage";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/checklist/:id" component={CheckList}></Route>
        <Route path="/todo" component={TodoTab}></Route>
        <Route path="/completed" component={CompletedTab}></Route>
        <Route path="/checklist-notes/:id" component={ChecklistNotes}></Route>
        <Route path="/question-page" component={QuestionPage}></Route>
        <Redirect to="/" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
