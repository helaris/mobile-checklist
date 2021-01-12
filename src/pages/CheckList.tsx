import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonBackButton,
  IonButtons,
} from "@ionic/react";

const CheckList: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>Checklist</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>
);

export default CheckList;
