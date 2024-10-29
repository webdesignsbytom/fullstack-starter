// src/pages/TermsAndConditionsPage.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Terms and Conditions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Terms and Conditions</h2>
        <p>Welcome to Cat App!</p>
        <p>
          These terms and conditions outline the rules and regulations for the use of Cat App's Website, located at <a href="http://yourwebsite.com">http://yourwebsite.com</a>.
        </p>
        <h3>By accessing this website we assume you accept these terms and conditions. Do not continue to use Cat App if you do not agree to take all of the terms and conditions stated on this page.</h3>
        <h3>Cookies</h3>
        <p>
          We employ the use of cookies. By accessing Cat App, you agreed to use cookies in agreement with the Cat App's Privacy Policy.
        </p>
        <h3>License</h3>
        <p>
          Unless otherwise stated, Cat App and/or its licensors own the intellectual property rights for all material on Cat App. All intellectual property rights are reserved. You may access this from Cat App for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <h3>You must not:</h3>
        <ul>
          <li>Republish material from Cat App</li>
          <li>Sell, rent or sub-license material from Cat App</li>
          <li>Reproduce, duplicate or copy material from Cat App</li>
          <li>Redistribute content from Cat App</li>
        </ul>
        <h3>Comments</h3>
        <p>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Cat App does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Cat App, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.
        </p>
        <h3>Hyperlinking to our Content</h3>
        <p>
          The following organizations may link to our Website without prior written approval:
        </p>
        <ul>
          <li>Government agencies</li>
          <li>Search engines</li>
          <li>News organizations</li>
          <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
          <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site</li>
        </ul>
        <h3>Content Liability</h3>
        <p>
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
        </p>
        <h3>Reservation of Rights</h3>
        <p>
          We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
        </p>
        <h3>Removal of links from our website</h3>
        <p>
          If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at:
        </p>
        <p>
          [Your Contact Information]
        </p>
      </IonContent>
    </IonPage>
  );
};

export default TermsAndConditionsPage;
