import React from "react";
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonTabButton,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { location, call } from "ionicons/icons";

import mockData from "../mockdata";

const WorkCard: React.FC = () => (
  <>
    {mockData.map((job) => (
      <IonCard className="card-container" key={job.id}>
        <div className="card-content-container">
          <div>
            <p className="card-installation">Installation</p>
            <div className="card-content-left">
              <IonIcon icon={location} />
              <div>
                <h6 className="card-location-name">{job.locationName}</h6>
                <p className="card-location-address">{job.address}</p>
                <p className="card-order">
                  {job.orders} Orders | {job.distance} away
                </p>
              </div>
            </div>
          </div>
          <div className="card-content-right">
            <p className="card-due">Due</p>
            <p className="card-due-date">{job.dueDate}</p>
            <p className="card-completion">Checklist Completion</p>
            <p className="card-completion-percentage">60%</p>
          </div>
        </div>
        <IonButton
          expand="block"
          fill="solid"
          color="primary"
          className="ion-no-margin"
          routerLink="/checklist"
        >
          checklist
        </IonButton>
        <IonFooter>
          <IonToolbar className="toolbar">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonTabButton>
                    <IonIcon className="card-cta-icon" icon={location} />
                  </IonTabButton>{" "}
                </IonCol>
                <IonCol>
                  <IonTabButton>
                    <IonIcon className="card-cta-icon" icon={call} />
                  </IonTabButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonFooter>
      </IonCard>
    ))}
  </>
);

export default WorkCard;
