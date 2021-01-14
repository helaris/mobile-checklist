import React from "react";
import {
  IonButtons,
  IonMenuButton,
  IonToolbar,
  IonIcon,
  IonHeader,
  IonContent,
  IonPage,
} from "@ionic/react";

import WorkCard from "../components/WorkCard";
import HomeTab from "../components/HomeTab";
// import Footer from "../components/Footer";

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
