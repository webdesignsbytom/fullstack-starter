// src/pages/RegisterPage.tsx
import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonLoading,
  IonToast,
  IonCheckbox,
  IonText,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setToastMessage('Passwords do not match');
      setShowToast(true);
      return;
    }

    if (!termsAccepted || !privacyAccepted) {
      setToastMessage('You must accept the terms and privacy policy');
      setShowToast(true);
      return;
    }

    setShowLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          password,
          country,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setToastMessage('Registration successful');
      setShowToast(true);
      history.push('/login');
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
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            type="email"
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput
            value={firstName}
            onIonChange={(e) => setFirstName(e.detail.value!)}
            type="text"
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput
            value={lastName}
            onIonChange={(e) => setLastName(e.detail.value!)}
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
        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
            type="password"
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel>Country</IonLabel>
          <IonSelect
            value={country}
            placeholder="Select your country"
            onIonChange={(e) => setCountry(e.detail.value)}
          >
            <IonSelectOption value="USA">USA</IonSelectOption>
            <IonSelectOption value="Canada">Canada</IonSelectOption>
            <IonSelectOption value="UK">UK</IonSelectOption>
            <IonSelectOption value="Australia">Australia</IonSelectOption>
            <IonSelectOption value="Germany">Germany</IonSelectOption>
            <IonSelectOption value="France">France</IonSelectOption>
            <IonSelectOption value="Other">Other</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem lines="none">
          <IonCheckbox
            checked={termsAccepted}
            onIonChange={(e) => setTermsAccepted(e.detail.checked)}
          />
          <IonLabel className="ion-padding-start">
            I accept the <a href="/terms-and-conditions">terms and conditions</a>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonCheckbox
            checked={privacyAccepted}
            onIonChange={(e) => setPrivacyAccepted(e.detail.checked)}
          />
          <IonLabel className="ion-padding-start">
            I accept the <a href="/privacy-policy">privacy policy</a>
          </IonLabel>
        </IonItem>
        <IonButton expand="full" onClick={handleRegister} className="ion-margin-top">
          Register
        </IonButton>
        <IonLoading isOpen={showLoading} message={'Registering...'} />
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

export default RegisterPage;
