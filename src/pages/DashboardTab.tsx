import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonButtons,
  IonAvatar,
  IonImg,
  IonBadge,
  IonChip,
} from "@ionic/react";
import {
  homeOutline,
  bonfireOutline,
  flowerOutline,
  arrowUpCircleOutline,
  gitMergeOutline,
  personAddOutline,
} from "ionicons/icons";
import "./DashboardTab.css";
import Home from "./Home";


const DashboardTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={homeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="no-left-padding no-weight">Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard color="primary">
          <IonCardHeader>
            <IonItem color="primary" lines="full">
              <IonAvatar slot="start">
                <IonImg src="./assets/avatar.svg"></IonImg>
              </IonAvatar>
              <IonCardTitle>Emon Ekram</IonCardTitle>
            </IonItem>
            <IonCardSubtitle>Joined: April 20, 2020</IonCardSubtitle>
            <IonCardTitle>
              Current Board:
              <IonChip color="light" outline={true}>
                <IonIcon icon={flowerOutline} />
                <IonLabel>#65</IonLabel>
              </IonChip>
            </IonCardTitle>

            <IonCardTitle>
              Stage: <IonBadge color="success">FIRE</IonBadge>{" "}
              <IonBadge color="light"> AIR </IonBadge>{" "}
              <IonBadge color="light"> EARTH </IonBadge>{" "}
              <IonBadge color="light"> WATER </IonBadge>{" "}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonItem lines="full">
            <IonIcon
              color="primary"
              size="large"
              icon={arrowUpCircleOutline}
              slot="start"
            />
            <IonLabel>UPLINK</IonLabel>
          </IonItem>

          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="./assets/avatar.svg"></IonImg>
              </IonAvatar>
              <IonLabel>Arman A</IonLabel>
              <IonChip color="danger" outline={true}>
                <IonIcon icon={bonfireOutline} />
                <IonLabel>FIRE</IonLabel>
              </IonChip>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem lines="full">
            <IonIcon
              color="primary"
              size="large"
              icon={gitMergeOutline}
              slot="start"
            />
            <IonLabel>DOWN LINKS</IonLabel>
          </IonItem>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="./assets/avatar.svg"></IonImg>
              </IonAvatar>
              <IonLabel>Jahid J</IonLabel>
              <IonChip color="danger" outline={true}>
                <IonIcon icon={bonfireOutline} />
                <IonLabel>FIRE</IonLabel>
              </IonChip>
            </IonItem>

            <IonButton expand="block" color="primary">
              <IonIcon slot="start" icon={personAddOutline}></IonIcon>
              Invite
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DashboardTab;
