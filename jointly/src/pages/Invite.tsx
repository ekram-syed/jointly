import React from "react";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonIcon,
  IonButton,
  IonTitle,
  IonFooter,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButtons,
  IonHeader,
} from "@ionic/react";
import {
  shieldCheckmarkOutline,
  personAddOutline,
  helpBuoyOutline,
  logInOutline,
  keyOutline,
  atOutline,
  pin,
  wifi,
  wine,
  warning,
  walk,
  gitCompareOutline,
  gitMergeOutline,
  flowerOutline
} from "ionicons/icons";
import "./Invite.css";

const Invite: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={gitCompareOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="no-left-padding no-weight">
            Invaitation Required
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="ion-text-center ">
          <IonIcon
            size="large"
            color="primary"
            className="loginIconBig"
            icon={gitMergeOutline}
          ></IonIcon>
          <IonCardHeader>
            <IonCardSubtitle className="ion">Welcome</IonCardSubtitle>
            <IonCardTitle>Joint.ly for people like you</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            At the moment we only accept registration by community invaitation.
            If you know someone please communicate with hin to send you a
            reference link.
          </IonCardContent>
        </IonCard>

        <IonCard className="ion-text-center">
          <IonIcon
            size="large"
            color="success"
            className="loginIconBig"
            icon={flowerOutline}
          ></IonIcon>
          <IonCardHeader>
            <IonCardTitle>Joint.ly is all about trust and social banking</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton href="/login" slot="end" fill="clear" color="primary">
            <IonIcon slot="start" icon={personAddOutline}></IonIcon>
            Login
          </IonButton>
          <IonButton href="/forget" slot="start" fill="clear" color="medium">
            <IonIcon slot="start" icon={helpBuoyOutline}></IonIcon>
            Forget
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default Invite;
