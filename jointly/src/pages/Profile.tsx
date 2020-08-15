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
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
} from "@ionic/react";

import { 
  personCircleOutline, 
  createOutline 
} from "ionicons/icons";

import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon size="large" icon={personCircleOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="no-left-padding no-weight">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg className="profileImage" src="./assets/avatar.svg"></IonImg>

          <IonCardHeader>
            <IonCardTitle>
              <IonText>Emon Ekram </IonText>
              <IonIcon
                className="ion-padding-start"
                icon={createOutline}
              />
            </IonCardTitle>

            <IonCardSubtitle>JOINED: April 20, 2020</IonCardSubtitle>

            <IonCardSubtitle>BIRTHDAY: April 20, 1985</IonCardSubtitle>

            <IonCardSubtitle>EMAIL: emon@email.com</IonCardSubtitle>

            <IonCardContent></IonCardContent>
            
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
