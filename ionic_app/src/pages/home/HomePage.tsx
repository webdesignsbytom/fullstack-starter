// src/pages/Home.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="p-4">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to Ionic with Tailwind CSS</h1>
        <IonButton expand="full" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
