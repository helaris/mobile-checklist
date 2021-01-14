import React from "react";
import { IonTabButton, IonIcon, IonLabel, IonTabBar } from "@ionic/react";

interface FooterProps {
  lIcon: string;
  lLabel: string;
  rIcon: string;
  rLabel: string;
}

const FooterNav = (props: FooterProps) => (
  <IonTabBar className="ion-justify-content-between ion-padding-vertical">
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

export default FooterNav;

{
  /* <IonButtons className="ion-justify-content-between">
        <IonButton className="lol">
          <div className="custom-button-content">
            <IonIcon color="secondary" size="large" icon={props.lIcon} />
            <IonLabel color="secondary">{props.lLabel}</IonLabel>
          </div>
        </IonButton>
        <IonButton size="large">
          <div className="custom-button-content">
            <IonIcon color="secondary" size="large" icon={props.rIcon} />
            <IonLabel color="secondary">{props.rLabel}</IonLabel>
          </div>
        </IonButton>
      </IonButtons> */
}
