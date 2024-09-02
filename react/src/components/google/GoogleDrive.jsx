import React, { useContext, useEffect, useState } from 'react';
// API
import client from '../../api/client';
// Components
import LoadingSpinner from '../utils/LoadingSpinner';
import JSZip, { forEach } from 'jszip';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import {
  ALL_BUILD_API_URL,
  GOOGLE_API_URL,
  GOOGLE_GSI_URL,
} from '../../utils/Constants';
// Constants ENV
const clientIdEnv = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const googleApi = process.env.REACT_APP_GOOGLE_API_KEY;
const devopsUrl = process.env.REACT_APP_DEVOPS_URL;
const googleDriveId = process.env.REACT_APP_GOOGLE_DRIVE_ID;

function BuildDataContainer() {
  const {
    setgoogleDriveFileIsDownloading,
    foundBuildsList,
    currentPage,
    displayedBuilds,
    setDisplayedBuilds,
  } = useContext(ToggleContext);

  const [secretClient] = useState(clientIdEnv);
  const [googleApiKey] = useState(googleApi);
  const [devopsReportUrl] = useState(devopsUrl);
  const [devopsReportUrlMiddleString] = useState(
    '/artifacts?artifactName=Code%20Coverage%20Report_'
  );
  const [devopsReportUrlEndString] = useState('&api-version=4.1&%24format=zip');

  // Codebase
  const [codebaseCommitUrl] = useState(
    'https://code.silhouettesoftware.com/projects/silhouette-suite/repositories/suite/commit/'
  );

  // Google API
  const [tokenClient, setTokenClient] = useState(null);
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [discoveryDocs] = useState(
    'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
  );
  // Permissions
  const [scopes] = useState('https://www.googleapis.com/auth/drive.readonly');

  // Downloads
  const [prefixUrl] = useState('Code Coverage Report_');
  const [downloadingReportInProgress, setDownloadingReportInProgress] =
    useState(false);

  useEffect(() => {
    loadBasicScripts();
    fetchBuilds();
  }, [currentPage]);

  // Function to fetch the full list of builds
  const fetchBuilds = () => {
    client
      .get(ALL_BUILD_API_URL)
      .then((res) => {
        setDisplayedBuilds(res.data.data.foundBuilds);
      })
      .catch((err) => {
        console.error('Unable to get projects', err);
      });
  };

  // Function to load builds for the current page

  // Import scripts from google and load functionallity
  function loadBasicScripts() {
    const loadScript = (url, callback) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = callback;
      document.body.appendChild(script);
    };

    // Load the scripts
    loadScript(GOOGLE_API_URL, gapiLoaded);
    loadScript(GOOGLE_GSI_URL, gisLoaded);
  }

  // Connect to the google API client
  function gapiLoaded() {
    window.gapi.load('client', initializeGapiClient);
  }

  // Connect to the google ID services
  function gisLoaded() {
    let initTokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: secretClient,
      scope: scopes,
      callback: '', // defined later
    });

    setTokenClient(initTokenClient);
    setGisInited(true);
  }

  // Connect to the google API client
  async function initializeGapiClient() {
    await window.gapi.client.init({
      apiKey: googleApiKey,
      discoveryDocs: [discoveryDocs],
    });

    setGapiInited(true);
  }

  // Connect to api for download
  function handleAuthForFile(fileName) {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      await findSpecificFile(fileName);
    };

    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
    setgoogleDriveFileIsDownloading(true);
  }

  async function findSpecificFile(fileName) {
    let response;
    let folderId = "'1ddcQN6lQpGpQ6y4o7h2r1vRamdEzLrEv'";
    let hardFileName = `'SCM_0.1.36_A.apk'`; // TODO: fix this download url

    try {
      response = await window.gapi.client.drive.files.list({
        pageSize: 10,
        fields: 'files(id, name)',
        q: `${folderId} in parents and name = ${hardFileName}`, // Query for specific file by name and ID
        driveId: googleDriveId, // Replace <shared_drive_id> with the actual Shared Drive ID
        includeItemsFromAllDrives: true,
        supportsAllDrives: true,
        corpora: 'drive',
      });
    } catch (err) {
      alert('Error getting list of files: ', err.message);
      setgoogleDriveFileIsDownloading(false);
      return;
    }

    const files = response.result.files;

    if (!files || files.length === 0) {
      alert('File not found');
      setgoogleDriveFileIsDownloading(false);
      return;
    }

    let fileFoundId;

    // Flatten to string to display
    const output = files.reduce((str, file) => {
      // Set the global variable with the file ID
      fileFoundId = file.id;
      return `${str}${file.name} (${file.id})\n`;
    }, 'Specific File Found:\n');

    downloadFile(fileFoundId, hardFileName);
  }

  function downloadFile(fileFoundId, hardFileName) {
    // Remove end quotes from name of file
    hardFileName = hardFileName.replace(/^'|'$/g, '');

    if (!fileFoundId) {
      console.log('File ID is required to download a file.');
      setgoogleDriveFileIsDownloading(false);
      alert('File ID is required to download a file.');
      return;
    }

    // Construct the download URL
    const downloadUrl = `https://www.googleapis.com/drive/v3/files/${fileFoundId}?alt=media`;
    console.log('downloadUrl', downloadUrl);

    // Use the access token to authorize the download
    const accessToken = window.gapi.auth.getToken().access_token;
    if (!accessToken) {
      console.log('Access token is missing, please authorize first.');
      setgoogleDriveFileIsDownloading(false);
      alert('Access token is missing, please authorize first.');
      return;
    }

    // Perform the download
    fetch(downloadUrl, {
      headers: new Headers({ Authorization: 'Bearer ' + accessToken }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create a link to download the file
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${hardFileName}`; // You can set a specific file name here
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setgoogleDriveFileIsDownloading(false);
        alert('File Download Success');
      })

      .catch((error) =>
        console.error(
          'Error downloading "color:rgb(224,108,117)">error,
          setgoogleDriveFileIsDownloading(false)
        )
      );
  }

  // BUILD DOWNLOADS
  // Connect downloads
  const downloadConnectWin64 = (build) => {
    let lockstepId = build.name;
    let fileName = `SCON_${lockstepId}_W6.msix`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Arm download
  const downloadConnectArm = (build) => {
    let lockstepId = build.name;
    let fileName = `SCON_${lockstepId}_W6.msix`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Connect Mac download
  const downloadConnectMac = (build) => {
    let lockstepId = build.name;
    let fileName = `SCON_${lockstepId}_MA.pkg`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Connect Mac Am download
  const downloadConnectMacArm = (build) => {
    let lockstepId = build.name;
    let fileName = `SCON_${lockstepId}_MA.pkg`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Creative downloads
  const downloadCreativeWin64 = (build) => {
    let lockstepId = build.name;
    let fileName = `SCD_${lockstepId}_W6.msix`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Creative ARM download
  const downloadCreativeArm = (build) => {
    let lockstepId = build.name;
    let fileName = `SCD_${lockstepId}_W6.msix`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Creative Mac download
  const downloadCreativeMac = (build) => {
    let lockstepId = build.name;
    let fileName = `SCD_${lockstepId}_MA.pkg`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Go Android downloads
  const downloadGoAndroid = (build) => {
    let lockstepId = build.name;
    let fileName = `SCM_${lockstepId}_A.apk`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Go iOS download
  const downloadGoiOS = (build) => {
    let lockstepId = build.name;
    let fileName = `SCM_${lockstepId}_I.ipa`;

    // Conenct to api
    handleAuthForFile(fileName);
  };

  // Whats this??
  // Changes
  const openPrivateChanges = (build) => {
    let lockstepId = build.name;
    let commitId = build.commitId;
  };

  const openPublicChanges = (build) => {
    let lockstepId = build.name;
    let commitId = build.commitId;
  };

  // Open report as HTML page
  const viewHtml = (fileContent) => {
    // Create a new window or tab
    const newWindow = window.open();
    if (newWindow) {
      // Write the HTML content to the new window
      newWindow.document.write(fileContent);
      newWindow.document.close();
    } else {
      alert('Failed to open HTML file in new window');
      console.error('Failed to open new window');
      return;
    }
  };

  // Download html report
  function fetchAndUnzipFullReport(build, index) {
    setDownloadingReportInProgress(true);

    if (!build.id) {
      console.error('No build ID found');
      return;
    }

    fetch(
      `${devopsReportUrl}${build.id}${devopsReportUrlMiddleString}${build.id}${devopsReportUrlEndString}`,
      {
        headers: {
          Authorization:
            'Basic Omd6NXYyeHg0MzR3dDJhZ3l3cTV1cnV3ZnBocmh0NWpwdXlhaXplZ3FybTZ4N2hxenJ3aHE=',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          setDownloadingReportInProgress(false);

          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(JSZip.loadAsync)
      .then((zip) => {
        // Modify this based on the actual file you need from the ZIP
        const fileToExtract = `${prefixUrl}${build.id}/index.html`;
        return zip.file(fileToExtract).async('string');
      })
      .then((fileContent) => {
        // Process or display the content
        setDownloadingReportInProgress(false);
        viewHtml(fileContent);
      })
      .catch((err) => {
        console.error('Error fetching or unzipping "color:rgb(224,108,117)">err);
        alert('Error fetching or unzipping file');
        return;
      });
    }}

