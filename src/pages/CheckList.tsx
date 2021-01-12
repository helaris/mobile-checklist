import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonBackButton,
  IonButtons,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
} from "@ionic/react";
import { useParams } from "react-router-dom";

import mockData from "../mockdata";

const CheckList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const checklist = mockData.find((job) => +job.id === +id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Checklist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2 className="checklist-location">{checklist?.locationName}</h2>
        <p className="checklist-address">{checklist?.address}</p>
        <IonList lines="full" className="ion-padding">
          {checklist?.checkList?.map((item) => (
            <IonItem className="test">
              <IonLabel>{item}</IonLabel>
              <IonCheckbox />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CheckList;
