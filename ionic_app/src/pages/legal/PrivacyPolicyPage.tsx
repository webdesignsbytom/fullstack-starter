// src/pages/PrivacyPolicyPage.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Privacy Policy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. It is Cat App's policy to respect
          your privacy regarding any information we may collect from you across
          our website, <a href="http://yourwebsite.com">http://yourwebsite.com</a>,
          and other sites we own and operate.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We only collect information about you if we have a reason to do so—for
          example, to provide our services, to communicate with you, or to make
          our services better.
        </p>
        <h3>How We Use Information</h3>
        <p>
          We use the information we collect in various ways, including to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
        <h3>Cookies</h3>
        <p>
          We use cookies to improve your experience on our site. Cookies are small
          files that your browser stores on your computer. You can disable cookies
          through your browser settings, but this may impact your ability to use
          our site.
        </p>
        <h3>Third-Party Services</h3>
        <p>
          We may employ third-party companies and individuals due to the following
          reasons:
        </p>
        <ul>
          <li>To facilitate our Service</li>
          <li>To provide the Service on our behalf</li>
          <li>To perform Service-related services</li>
          <li>To assist us in analyzing how our Service is used</li>
        </ul>
        <p>
          These third parties have access to your Personal Information only to
          perform these tasks on our behalf and are obligated not to disclose or
          use it for any other purpose.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          [Your Contact Information]
        </p>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPolicyPage;
