import React from "react";
import { IonIcon, IonLabel, IonFooter, IonButton } from "@ionic/react";

interface FooterProps {
  lIcon: string;
  lLabel: string;
  rIcon: string;
  rLabel: string;
}

const FooterNav = (props: FooterProps) => (
  <IonFooter className="footer-flex">
    <IonButton fill="clear" expand="block" className="custom-button-content">
      <div className="custom-button-content">
        <IonIcon color="secondary" size="large" icon={props.lIcon} />
        <IonLabel color="secondary">{props.lLabel}</IonLabel>
      </div>
    </IonButton>
    <IonButton fill="clear" expand="block" className="custom-button-content">
      <div className="custom-button-content">
        <IonIcon color="secondary" size="large" icon={props.rIcon} />
        <IonLabel color="secondary">{props.rLabel}</IonLabel>
      </div>
    </IonButton>
  </IonFooter>
);

export default FooterNav;
