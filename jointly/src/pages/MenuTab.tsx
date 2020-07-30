import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel
} from "@ionic/react";
import { menuOutline, pin, wifi, wine, warning, walk, filterOutline, personCircleOutline, walletOutline, clipboardOutline, logOutOutline, repeatOutline } from "ionicons/icons";
import "./MenuTab.css";

const MenuTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={filterOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="no-left-padding no-weight">Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem href="#">
          <IonIcon icon={personCircleOutline} />
          <IonLabel className="ion-padding-start">Profile</IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonIcon icon={walletOutline}  />
          <IonLabel className="ion-padding-start">Wallet</IonLabel>
        </IonItem>

        <IonItem>
          <IonIcon icon={clipboardOutline} />
          <IonLabel className="ion-padding-start">Report</IonLabel>
        </IonItem>

        <IonItem>
          <IonIcon icon={logOutOutline}  />
          <IonLabel className="ion-padding-start">Logout</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default MenuTab;
