import React, { useState } from "react";
import {
  IonButtons,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonBackButton,
  IonButton,
  IonIcon,
} from "@ionic/react";

import {
  addCircleOutline,
  chevronBackOutline,
  saveOutline,
  trashOutline,
} from "ionicons/icons";

import AddNoteModal from "../components/AddNoteModal";
import FooterNav from "../components/FooterNav";

const ChecklistNotes: React.FC = () => {
  const [addNote, setAddNote] = useState(false);

  return (
    <IonPage>
      <AddNoteModal show={addNote} onClose={() => setAddNote(false)} />
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
          <IonButtons slot="end">
            <IonButton color="primary" onClick={() => setAddNote(true)}>
              <IonIcon size="large" icon={addCircleOutline} />
            </IonButton>
          </IonButtons>
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
};

export default ChecklistNotes;
