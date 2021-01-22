import React, { useState, useEffect } from "react";
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonButton,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { location, call } from "ionicons/icons";

import backend from "../api";
// import mockData from "../mockdata";

//GETTING DATA THROUGH API WITH TS
interface contactCard {
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

const WorkCard: React.FC = () => {
  //GETTING DATA THROUGH API
  const [data, setData] = useState<contactCard[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<contactCard[]>("/");
      setData(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      {data.map((info) => (
        <IonCard className="card-container" key={info.id}>
          <section className="card-content-container">
            <div>
              <IonCardSubtitle className="card-installation ion-text-center">
                Installation
              </IonCardSubtitle>
              <div className="card-content-left">
                <IonIcon icon={location} />
                <div>
                  <IonCardTitle className="card-location-name">
                    {info.City} - {info.country}
                  </IonCardTitle>
                  <p className="card-location-address">
                    {info.address}, {info.postalCode} {info.City}
                  </p>
                  <p className="card-order">
                    1 Order | 15km away
                    {/* {job.orders} {job.orders === 1 ? "Order" : "Orders"} |{" "}
                    {job.distance} away */}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-content-right">
              <p className="card-due">Due</p>
              <p className="card-due-date">18 December</p>
              <p className="card-completion">Checklist Completion</p>
              <p className="card-completion-percentage">60%</p>
            </div>
          </section>
          <IonButton
            expand="full"
            fill="solid"
            color="primary"
            className="ion-no-margin"
            routerLink={`/checklist/${info.id}`}
          >
            CHECKLIST
          </IonButton>
          <IonFooter>
            <IonToolbar className="card-toolbar-color">
              <IonGrid className="ion-text-center ion-no-padding">
                <IonRow>
                  <IonCol style={{ borderRight: "1px solid #d9d9d9" }}>
                    <IonButton fill="clear" expand="block">
                      <IonIcon icon={location} />
                    </IonButton>{" "}
                  </IonCol>
                  <IonCol>
                    <IonButton fill="clear" expand="block">
                      <IonIcon icon={call} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonFooter>
        </IonCard>
      ))}
    </>
  );
};

export default WorkCard;
