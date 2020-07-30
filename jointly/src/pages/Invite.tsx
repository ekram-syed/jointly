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
  IonHeader
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
  walk
} from "ionicons/icons";
import "./Invite.css";

const Invite: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={personAddOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="no-left-padding no-weight">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-cardContent element.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
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
