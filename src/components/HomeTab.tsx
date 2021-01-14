import React from "react";
import { IonTabButton, IonLabel, IonTabBar, IonIcon } from "@ionic/react";

import { documentTextOutline, checkboxOutline } from "ionicons/icons";

const HomeTab: React.FC = () => (
  <IonTabBar className="ion-padding-vertical ion-justify-content-between">
    <IonTabButton tab="todo" href="/todo">
      <IonIcon color="secondary" size="large" icon={documentTextOutline} />
      <IonLabel color="secondary">TO DO</IonLabel>
    </IonTabButton>{" "}
    <IonTabButton tab="completed" href="/completed">
      <IonIcon color="secondary" size="large" icon={checkboxOutline} />
      <IonLabel color="secondary">COMPLETED</IonLabel>
    </IonTabButton>
  </IonTabBar>
);

export default HomeTab;
