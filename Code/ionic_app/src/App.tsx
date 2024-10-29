// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { SplashScreen as CapacitorSplashScreen } from '@capacitor/splash-screen';

// Pages
import Home from './pages/home/HomePage';
import TestPage from './pages/test/TestPage';
import SplashScreen from './components/splash/SplashScreen';
import LoginPage from './user/LoginPage';
import CookieConsent from './components/modals/CookieConsent';
import UserAccountPage from './pages/user/UserAccountPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/legal/TermsAndConditionsPage';
import RegisterPage from './user/RegisterPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './styles/tailwind.css'; // <-- Import Tailwind CSS here
import './styles/general.css';

// Context
import { useUser } from './context/UserContext';

setupIonicReact();

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const { token } = useUser();

  const handleSplashLoaded = () => {
    setShowSplash(false);
  };

  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(true);
    }
  }, []);

  return (
    <IonApp>
      {!cookieConsent && <CookieConsent />}
      {showSplash ? (
        <SplashScreen onLoaded={handleSplashLoaded} />
      ) : (
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              {token ? (
                <>
                  <Route exact path='/account'>
                    <UserAccountPage />
                  </Route>
                </>
              ) : (
                <>
                  <Route exact path='/login'>
                    <LoginPage />
                  </Route>
                </>
              )}
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route exact path='/login'>
                <LoginPage />
              </Route>
              <Route exact path='/register'>
                <RegisterPage />
              </Route>
              <Route exact path='/test'>
                <TestPage />
              </Route>
              <Route exact path='/privacy-policy'>
                <PrivacyPolicyPage />
              </Route>
              <Route exact path='/terms-and-conditions'>
                <TermsAndConditionsPage />
              </Route>
              <Route exact path='/'>
                <Redirect to='/home' />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot='bottom'>
              <IonTabButton tab='home' href='/home'>
                <IonIcon aria-hidden='true' icon={triangle} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab='login' href='/login'>
                <IonIcon aria-hidden='true' icon={square} />
                <IonLabel>Login</IonLabel>
              </IonTabButton>
              <IonTabButton tab='register' href='/register'>
                <IonIcon aria-hidden='true' icon={square} />
                <IonLabel>Register</IonLabel>
              </IonTabButton>
              <IonTabButton tab='account' href='/account'>
                <IonIcon aria-hidden='true' icon={triangle} />
                <IonLabel>Account</IonLabel>
              </IonTabButton>
              <IonTabButton tab='privacy-policy' href='/privacy-policy'>
                <IonIcon aria-hidden='true' icon={ellipse} />
                <IonLabel>Privacy Policy</IonLabel>
              </IonTabButton>
              <IonTabButton
                tab='terms-and-conditions'
                href='/terms-and-conditions'
              >
                <IonIcon aria-hidden='true' icon={square} />
                <IonLabel>Terms</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
