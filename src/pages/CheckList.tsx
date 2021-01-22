import React, { useEffect, useState } from "react";
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
  IonButton,
  IonIcon,
} from "@ionic/react";
import {
  downloadOutline,
  checkmarkOutline,
  chevronBackOutline,
  documentTextOutline,
} from "ionicons/icons";
import { useParams } from "react-router-dom";
import FooterNav from "../components/FooterNav";

import backend from "../api";
import mockData from "../mockdata";

interface IInfo {
  id: string;
  City: string;
  country: string;
  countryCode: string;
  email: string;
  phone: string;
  postalCode: string;
  state: string;
  street: string;
  address: string;
}

const CheckList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IInfo[]>();
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<IInfo[]>("/");
      setData(request.data);
      return request;
    }
    fetchData();
  }, []);

  const info = data?.find((p) => p.id === id);

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
          <IonButtons slot="end">
            <IonButton color="primary" routerLink={`/checklist-notes/${id}`}>
              <IonIcon size="large" icon={documentTextOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2 className="checklist-location">
          {info?.City} - {info?.country}
        </h2>
        <p className="checklist-address">
          {info?.address}, {info?.postalCode} {info?.City}
        </p>
        <IonList
          lines="full"
          className="ion-padding no-bottom-border"
          style={{ borderRadius: "10px" }}
        >
          {/* {data?.checkList?.map((item, i) => (
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
          ))} */}
        </IonList>
      </IonContent>
      <FooterNav
        lIcon={downloadOutline}
        lLabel="EXPORT"
        rIcon={checkmarkOutline}
        rLabel="SIGN"
      />
    </IonPage>
  );
};

export default CheckList;
