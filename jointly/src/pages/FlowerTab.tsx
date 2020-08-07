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
  IonLabel, IonCard, IonImg
} from "@ionic/react";
import { pin, wifi, wine, warning, walk, flowerOutline } from "ionicons/icons";
import "./FlowerTab.css";

const FlowerTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={flowerOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="no-left-padding no-weight">Board</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonImg src="./assets/board-back.png"></IonImg>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default FlowerTab;
