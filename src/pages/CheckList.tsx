import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonContent,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonPage,
} from "@ionic/react";
import {
  downloadOutline,
  checkmarkOutline,
  chevronBackOutline,
} from "ionicons/icons";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

import mockData from "../mockdata";

const CheckList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = mockData.find((job) => +job.id === +id);

  return (
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
          <IonTitle style={{ fontSize: "0.825rem" }}>CHECKLIST</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2 className="checklist-location">{data?.locationName}</h2>
        <p className="checklist-address">{data?.address} </p>
        <IonList
          lines="full"
          className="ion-padding no-bottom-border"
          style={{ borderRadius: "10px" }}
        >
          {data?.checkList?.map((item, i) => (
            <IonItem className="test" key={item.id}>
              <IonLabel
                className="ion-text-wrap"
                style={{
                  fontSize: "14px",
                  padding: "10px",
                  textTransform: "uppercase",
                }}
              >
                {i + 1}. {item.title}
              </IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <Footer
        lIcon={downloadOutline}
        lLabel="EXPORT"
        rIcon={checkmarkOutline}
        rLabel="SIGN"
      />
    </IonPage>
  );
};

export default CheckList;
