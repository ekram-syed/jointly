import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
} from "@ionic/react";
import { 
  flowerOutline, 
  menuOutline, 
  homeOutline 
} from "ionicons/icons";

import DashboardTab from "./DashboardTab";
import FlowerTab from "./FlowerTab";
import MenuTab from "./MenuTab";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/home/:tab(dashboard)"
              component={DashboardTab}
              exact={true}
            />
            <Route 
              path="/home/:tab(flower)" 
              component={FlowerTab} 
              exact={true} 
            />
            <Route 
              path="/home/:tab(menu)" 
              component={MenuTab}
              exact={true} 
            />
            <Route
              path="/home"
              render={() => <Redirect to="/home/dashboard" />}
              exact={true}
            />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            <IonTabButton tab="dashboard" href="/home/dashboard">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="flower" href="/home/flower">
              <IonIcon icon={flowerOutline} />
              <IonLabel>Board</IonLabel>
            </IonTabButton>

            <IonTabButton tab="menu" href="/home/menu">
              <IonIcon icon={menuOutline} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};
export default Home;
