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

import { chevronBackOutline, saveOutline, trashOutline } from "ionicons/icons";
import FooterNav from "../components/FooterNav";

const ChecklistNotes: React.FC = () => (
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
        <IonTitle style={{ fontSize: "0.825rem" }}>NOTES</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent scrollY={true}>
      <h2>Checklist notes</h2>
    </IonContent>
    <FooterNav
      lIcon={saveOutline}
      lLabel="SAVE"
      rIcon={trashOutline}
      rLabel="DELETE"
    />
  </IonPage>
);

export default ChecklistNotes;
