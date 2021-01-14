import React from "react";
import {
  IonButtons,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonBackButton,
} from "@ionic/react";

import { chevronBackOutline } from "ionicons/icons";
import HomeTab from "../components/HomeTab";

const TodoTab: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton
            defaultHref="/"
            icon={chevronBackOutline}
            color="primary"
          />
        </IonButtons>
        <IonTitle style={{ fontSize: "0.825rem" }}>TO DO</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent scrollY={true}>
      <h2>To Do Stuff</h2>
    </IonContent>
    <HomeTab />
  </IonPage>
);

export default TodoTab;
