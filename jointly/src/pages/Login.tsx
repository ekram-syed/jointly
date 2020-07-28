import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonInput,
  IonButton
} from "@ionic/react";
//import ExploreContainer from '../components/ExploreContainer';
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Email</IonLabel>
              <IonInput type="email" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Password</IonLabel>
              <IonInput type="password" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton>Login</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
