async function isAppInstalled(appScheme, studio3File, machine) {

    const url = `${appScheme}?machine=${encodeURIComponent(machine)}&data=${encodeURIComponent(studio3File)}`;
  
    // Open the appScheme URL
    try {
        window.location.href = url;
  
        // Wait for a short duration
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        // Check if the page visibility changes
        const isInstalled = await new Promise(resolve => {
            const visibilityHandler = () => {
                // Check if the page becomes hidden
                if (document.visibilityState === 'hidden') {
                    console.log("SGO DEEMED AS INSTALLED");
                    resolve(true);
                } else {
                    console.log("SGO DEEMED AS NOT INSTALLED");
                    resolve(false);
                }
                // Remove the event listener
                document.removeEventListener('visibilitychange', visibilityHandler);
            };
  
            // Listen for visibility change
            document.addEventListener('visibilitychange', visibilityHandler);
        });
  
        // Check if the page visibility changed
        if (!isInstalled) {
            //window.location.href = "https://apps.apple.com/gb/app/silhouette-go/id1501803589";
            return false;
        }
  
        // Wait for a short duration to ensure the page has finished loading
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        // Check if the current URL matches the appScheme
        if (window.location.href.startsWith(url)) {
            // Navigation to appScheme was successful
            return true;
        }
        else {
            // Navigation failed, redirect to fallback URL
            //window.location.href = "https://apps.apple.com/gb/app/silhouette-go/id1501803589";
            return false;
        }
    }
    catch (error) {
        // An error occurred, redirect to fallback URL
        //window.location.href = "https://apps.apple.com/gb/app/silhouette-go/id1501803589";
        return false;
    }  
  }