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
 IonButton, IonTitle, IonFooter, IonToolbar
} from "@ionic/react";
import { shieldCheckmarkOutline, personAddOutline, helpBuoyOutline, logInOutline, keyOutline, atOutline } from "ionicons/icons"
//import ExploreContainer from '../components/ExploreContainer';
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage className="ion-padding-top">
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center ion-padding-top ion-padding-bottom">
              <IonIcon size="large" color="primary" className="loginIconBig" icon={shieldCheckmarkOutline}></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className="ion-text-center ion-text-uppercase ion-padding-bottom" size="large" color="danger">Joint.ly</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon color="primary" slot="start" icon={atOutline}></IonIcon>
                    Email
                    </IonLabel>
                  <IonInput type="email"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon color="primary" slot="start" icon={keyOutline}></IonIcon>
                    Password
                    </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonList>
              <IonButton href="/home" size="large" expand="block">
                <IonIcon slot="start" icon={logInOutline}></IonIcon>
                Login
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton href="/invite" slot="end" fill="clear" color="primary">
            <IonIcon slot="start" icon={personAddOutline}></IonIcon>
            Register
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
export default Login;
