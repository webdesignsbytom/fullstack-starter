import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
// Images
import CatAppLogo from '../../assets/images/logos/CAT APP-01.svg';

const TestPage: React.FC = () => {
  return (
    <IonPage>
      <div>
        <header>
          <h1>TestPage</h1>
        </header>

        <main>
          <section>
            <article>
              <h2>Welcome to cat app</h2>
              <div>
                <img src={CatAppLogo} alt="" />
              </div>
            </article>
          </section>
        </main>
      </div>
    </IonPage>
  );
};

export default TestPage;
