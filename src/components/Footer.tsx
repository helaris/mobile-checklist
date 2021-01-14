import React from "react";
import { IonTabButton, IonIcon, IonLabel, IonTabBar } from "@ionic/react";

interface FooterProps {
  lIcon: string;
  lLabel: string;
  rIcon: string;
  rLabel: string;
}

const Footer = (props: FooterProps) => (
  <IonTabBar className="ion-padding-vertical ion-justify-content-between">
    <IonTabButton>
      <IonIcon color="secondary" size="large" icon={props.lIcon} />
      <IonLabel color="secondary">{props.lLabel}</IonLabel>
    </IonTabButton>{" "}
    <IonTabButton>
      <IonIcon color="secondary" size="large" icon={props.rIcon} />
      <IonLabel color="secondary">{props.rLabel}</IonLabel>
    </IonTabButton>
  </IonTabBar>
);

export default Footer;
