// src/pages/UserAccountPage.tsx
import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
  IonLoading,
} from '@ionic/react';
// Context
import { useUser } from '../../context/UserContext';

const UserAccountPage: React.FC = () => {
  const { token, logout } = useUser();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    // Fetch user information using the token
    const fetchUserData = async () => {
      setShowLoading(true);
      try {
        const response = await fetch('/api/user-info', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        setToastMessage('Failed to load user data');
        setShowToast(true);
      } finally {
        setShowLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const handleSave = async () => {
    setShowLoading(true);
    try {
      const response = await fetch('/api/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user information');
      }

      setToastMessage('User information updated successfully');
      setShowToast(true);
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

  const handleLogout = () => {
    logout();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='floating'>Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            type='text'
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            type='email'
            required
          />
        </IonItem>
        <IonButton
          expand='full'
          onClick={handleSave}
          className='ion-margin-top'
        >
          Save
        </IonButton>
        <IonButton
          expand='full'
          onClick={handleLogout}
          color='danger'
          className='ion-margin-top'
        >
          Logout
        </IonButton>
        <IonLoading isOpen={showLoading} message={'Please wait...'} />
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

export default UserAccountPage;
