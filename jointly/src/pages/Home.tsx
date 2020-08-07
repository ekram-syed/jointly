import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import {  flowerOutline, menuOutline, homeOutline } from 'ionicons/icons';
import { IonPage } from '@ionic/react';
import './Home.css';
import DashboardTab from './DashboardTab';
import FlowerTab from './FlowerTab';
import MenuTab from './MenuTab';
import Profile from './Profile';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/dashboard" component={DashboardTab} exact={true} />
          <Route path="/flower" component={FlowerTab} exact={true} />
          <Route path="/menu" component={MenuTab} />   
          <Route path="/profile" component={Profile} />   
          <Route path="/home" render={() => <Redirect to="/dashboard" />} exact={true} />       
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/dashboard">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="flower" href="/flower">
            <IonIcon icon={flowerOutline} />
            <IonLabel>Board</IonLabel>
          </IonTabButton>
          <IonTabButton tab="menu" href="/menu">
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
