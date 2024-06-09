// src/components/CookieConsent.tsx
import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import './cookieConsent.css';

const CookieConsent: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    setShowModal(false);
    localStorage.setItem('cookieConsent', 'true');
  };

  return (
    <IonModal isOpen={showModal} className="cookie-consent-modal">
      <IonContent className="cookie-consent-content">
        <h3>We use cookies</h3>
        <p>
          Our website uses cookies to improve your experience. By continuing to use
          this site, you accept our use of cookies.
        </p>
        <IonButton expand="full" onClick={handleAccept}>
          Accept
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default CookieConsent;
