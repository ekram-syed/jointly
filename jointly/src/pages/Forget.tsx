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
import { personAddOutline, logInOutline, atOutline, cogOutline, lockOpenOutline } from "ionicons/icons"
import "./Forget.css";

const Forget: React.FC = () => {
  return (
    <IonPage className="ion-padding-top">
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center ion-padding-top ion-padding-bottom">
              <IonIcon size="large" color="primary" className="loginIconBig" icon={lockOpenOutline}></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className="ion-text-center ion-padding-bottom" size="large" color="medium">Don’t panic! we are here to help</IonTitle>
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
              </IonList>
              <IonButton size="large" expand="block">
                <IonIcon slot="start" icon={cogOutline}></IonIcon>
                Retrive
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton slot="end" fill="clear" color="primary">
            <IonIcon slot="start" icon={personAddOutline}></IonIcon>
            Register
            </IonButton>
          <IonButton slot="start" fill="clear" color="success">
            <IonIcon slot="start" icon={logInOutline}></IonIcon>
            Login
            </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default Forget;
