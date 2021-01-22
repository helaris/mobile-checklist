import React from "react";
import {
  IonButtons,
  IonMenuButton,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
} from "@ionic/react";

import WorkCard from "../components/WorkCard";
import HomeTab from "../components/HomeTab";

const HomePage: React.FC = () => (
  <IonPage>
    <IonHeader className="ion-padding-top">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton color="primary" autoHide={false}></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent scrollY={true}>
      <WorkCard />
    </IonContent>
    <HomeTab />
  </IonPage>
);

export default HomePage;
