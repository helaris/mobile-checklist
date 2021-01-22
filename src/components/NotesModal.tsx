import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
} from "@ionic/react";

const AddNoteModal: React.FC<{
  show: boolean;
  onClose: () => void;
  editedNote: { id: string; title: string; description: string } | null;
}> = (props) => {
  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontSize: "0.825rem" }}>
            {props.editedNote ? "EDIT" : "ADD"} NOTE
          </IonTitle>
          <IonButtons slot="end">
            <IonButton
              style={{ fontSize: "0.76rem" }}
              color="primary"
              onClick={props.onClose}
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className="p-20 br-10">
                <IonLabel position="floating">Note Title</IonLabel>
                <IonInput type="text" value={props.editedNote?.title} />
              </IonItem>
              <IonItem className="p-20 br-10">
                <IonLabel position="floating">Note description</IonLabel>
                <IonTextarea
                  rows={15}
                  cols={20}
                  value={props.editedNote?.description}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end">
            <IonCol>
              <IonButton>Save</IonButton>
              <IonButton onClick={props.onClose}>Cancel</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddNoteModal;
