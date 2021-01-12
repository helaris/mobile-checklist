import React from "react";
import {
  IonButtons,
  IonMenuButton,
  IonToolbar,
  IonIcon,
  IonHeader,
  IonContent,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonTabButton,
  IonLabel,
  IonButton,
  IonPage,
} from "@ionic/react";

import {
  addCircleOutline,
  documentTextOutline,
  checkboxOutline,
} from "ionicons/icons";

import WorkCard from "../components/WorkCard";

const HomePage: React.FC = () => (
  <IonPage>
    <IonHeader className="ion-padding-top">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonIcon color="primary" size="large" icon={addCircleOutline} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent scrollY={true}>
      <WorkCard />
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonTabButton>
                <IonIcon
                  color="secondary"
                  size="large"
                  icon={documentTextOutline}
                />
                <IonLabel color="secondary">TO DO</IonLabel>
              </IonTabButton>{" "}
            </IonCol>
            <IonCol>
              <IonTabButton>
                <IonIcon
                  color="secondary"
                  size="large"
                  icon={checkboxOutline}
                />
                <IonLabel color="secondary">COMPLETED</IonLabel>
              </IonTabButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default HomePage;
