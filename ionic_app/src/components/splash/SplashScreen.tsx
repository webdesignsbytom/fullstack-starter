// src/components/SplashScreen.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  IonPage,
  IonContent,
  IonProgressBar,
  IonText,
  IonSpinner,
} from '@ionic/react';
import './splash.css';

const SplashScreen: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [downloadingProgress, setDownloadingProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadApp = async () => {
  //     // Check for updates
  //     const updatesAvailable = await checkForUpdates(setLoadingProgress);

  //     // Download updates if available
  //     if (updatesAvailable) {
  //       await downloadUpdates(setDownloadingProgress);
  //     }

  //     setLoading(false);
  //     onLoaded();
  //   };

  //   loadApp();
  // }, [onLoaded]);

  useEffect(() => {
    const loadApp = async () => {
      // Simulate server connection and check for updates
      await simulateLoading(setLoadingProgress);

      // Simulate downloading updates if available
      await simulateDownloading(setDownloadingProgress);

      setLoading(false);
      onLoaded();
    };

    loadApp();
  }, [onLoaded]);

  return (
    <IonPage>
      <IonContent className="splash-content">
        <div className="splash-container">
          <img src="assets/splash-logo.png" alt="Logo" className="splash-logo" />
          {loading ? (
            <>
              <IonText>Loading...</IonText>
              <IonProgressBar value={loadingProgress} />
              <IonText>Downloading updates...</IonText>
              <IonProgressBar value={downloadingProgress} />
            </>
          ) : (
            <IonSpinner name="crescent" color="primary" />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

const checkForUpdates = async (setProgress: (value: number) => void): Promise<boolean> => {
  setProgress(0.3); // Simulating some progress for checking updates
  try {
    const response = await axios.get('/api/check-updates');
    const data = response.data;

    setProgress(0.7); // Further progress in checking updates

    if (response.status === 200 && data.updatesAvailable) {
      setProgress(1);
      return true;
    } else {
      setProgress(1);
      return false;
    }
  } catch (error) {
    console.error('Failed to check updates', error);
    setProgress(1);
    return false;
  }
};

const downloadUpdates = async (setProgress: (value: number) => void): Promise<void> => {
  try {
    const response = await axios.get('/api/download-updates', {
      responseType: 'blob', // Adjust as necessary depending on the type of updates
      onDownloadProgress: (progressEvent) => {
        const total = progressEvent.total || 1; // Avoid division by zero
        setProgress(progressEvent.loaded / total);
      }
    });

    // Handle the downloaded data (e.g., save to file system, cache, etc.)
    // For example:
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'update.zip'); // Adjust the file name and extension as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to download updates', error);
  }
};

const simulateLoading = (setProgress: (value: number) => void) => {
  return new Promise<void>((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      setProgress(progress);
      if (progress >= 1) {
        clearInterval(interval);
        resolve();
      }
    }, 300);
  });
};

const simulateDownloading = (setProgress: (value: number) => void) => {
  return new Promise<void>((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      setProgress(progress);
      if (progress >= 1) {
        clearInterval(interval);
        resolve();
      }
    }, 500);
  });
};

export default SplashScreen;
