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
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

import {
  addCircleOutline,
  chevronBackOutline,
  saveOutline,
  trash,
  trashOutline,
  create,
} from "ionicons/icons";

import { useParams } from "react-router-dom";
import mockData from "../mockdata";

import AddNoteModal from "../components/NotesModal";
import FooterNav from "../components/FooterNav";

const notes = [
  {
    id: "n1",
    title: "Remember to measure ceiling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac commodo neque, vel consequat sem.",
  },
  {
    id: "n2",
    title: "Contact building",
    description:
      "Praesent lacinia rhoncus hendrerit. Nunc sit amet laoreet lorem, ut vehicula felis.",
  },
  {
    id: "n3",
    title: "Next inspection details",
    description:
      "Donec at velit et odio lacinia vulputate ac vehicula libero. ",
  },
];

const ChecklistNotes: React.FC = () => {
  const [noteModal, setNoteModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<any>();
  const { id } = useParams<{ id: string }>();
  const data = mockData.find((job) => +job.id === +id);

  const noteModalHandler = (noteId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const note = notes.find((n: any) => n.id === noteId);
    if (!note) return;
    setNoteModal(true);
    setSelectedNote(note);
  };

  const startAddNoteHandler = () => {
    setNoteModal(true);
    setSelectedNote(null);
  };

  const cancelNoteModalHandler = () => {
    setNoteModal(false);
    setSelectedNote(null);
  };
  return (
    <IonPage>
      <AddNoteModal
        show={noteModal}
        onClose={cancelNoteModalHandler}
        editedNote={selectedNote}
      />
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
            <IonButton color="primary" onClick={startAddNoteHandler}>
              <IonIcon size="large" icon={addCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={true} className="ion-padding">
        <h2 className="checklist-location">{data?.locationName}</h2>
        <p className="checklist-address">{data?.address} </p>
        <h2>Checklist notes</h2>
        <IonList className="br-10 ion-no-padding">
          {notes.map((note) => (
            <IonItemSliding key={note.id}>
              <IonItemOptions side="start">
                <IonItemOption className="danger-color">
                  <IonIcon color="danger" slot="icon-only" icon={trash} />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions>
                <IonItemOption
                  color="medium"
                  onClick={noteModalHandler.bind(null, note.id)}
                >
                  <IonIcon slot="icon-only" icon={create} />
                </IonItemOption>
              </IonItemOptions>
              <IonItem>
                <IonLabel>{note.title}</IonLabel>
              </IonItem>
            </IonItemSliding>
          ))}
        </IonList>
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
