import React from "react";
import {
  IonFooter,
  IonInput,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
} from "@ionic/react";
import {
  personAddOutline,
  keyOutline,
  atOutline,
  arrowForwardCircleOutline,
  medalOutline,
  personOutline
} from "ionicons/icons";
import "./Register.css";

const Register: React.FC = () => {
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
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center ion-padding-top ion-padding-bottom">
              <IonIcon
                size="large"
                color="primary"
                className="loginIconBig"
                icon={medalOutline}
              ></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className="ion-text-center ion-padding-bottom">
                Jahid invite you to Joint.ly
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon
                      color="primary"
                      slot="start"
                      icon={personOutline}
                    ></IonIcon>
                    Type your name
                  </IonLabel>
                  <IonInput type="text"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon
                      color="primary"
                      slot="start"
                      icon={atOutline}
                    ></IonIcon>
                    Your Email
                  </IonLabel>
                  <IonInput
                    disabled={true}
                    type="email"
                    value="rahat@gmail.com"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon
                      color="primary"
                      slot="start"
                      icon={keyOutline}
                    ></IonIcon>
                    Choose a Password
                  </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon
                      color="primary"
                      slot="start"
                      icon={keyOutline}
                    ></IonIcon>
                    <IonIcon
                      color="primary"
                      slot="start"
                      icon={keyOutline}
                    ></IonIcon>
                    Retype the Password
                  </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton slot="end" className="ion-margin-end" color="primary">
            <IonIcon slot="end" icon={arrowForwardCircleOutline}></IonIcon>
            Go
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
