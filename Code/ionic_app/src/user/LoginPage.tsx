import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonLoading,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
// Context
import { useUser } from '../context/UserContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { login } = useUser();
  const history = useHistory();

  const handleLogin = async () => {
    setShowLoading(true);
    try {
      await login(username, password);
      setToastMessage('Login successful');
      setShowToast(true);
      history.push('/home');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setToastMessage(error.message);
      } else {
        setToastMessage('An unknown error occurred');
      }
      setShowToast(true);
    } finally {
      setShowLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            type="text"
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            type="password"
            required
          />
        </IonItem>
        <IonButton expand="full" onClick={handleLogin} className="ion-margin-top">
          Login
        </IonButton>
        <IonLoading isOpen={showLoading} message={'Logging in...'} />
        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
