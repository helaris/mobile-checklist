import React from "react";
import {
  IonButtons,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

import { chevronBackOutline, saveOutline, trashOutline } from "ionicons/icons";
import FooterNav from "../components/FooterNav";

const QuestionPage: React.FC = () => (
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
        <IonTitle style={{ fontSize: "0.825rem" }}>DYNAMIC DATA HERE</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Question</h2>
      <p>Is permanent and safe access to the workspace has been provided?</p>
      <IonItem className="ion-justify-content-between ion-padding">
        <IonLabel>CEILING DISTANCE</IonLabel>
        <IonInput slot="end"></IonInput>
      </IonItem>
    </IonContent>
    <FooterNav
      lIcon={saveOutline}
      lLabel="SAVE"
      rIcon={trashOutline}
      rLabel="DELETE"
    />
  </IonPage>
);

export default QuestionPage;
