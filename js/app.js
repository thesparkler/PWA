// check if the serviceWorker object exists in the navigtor object.
if('serviceWorker' in navigator)   
{
    // register serviceWorker with [sw.js] file
    navigator.serviceWorker.register('./sw.js')
    .then(res => {

        // Registration was successful :)
        console.info('SW registered');
     })
    .catch(err => {

        // Registration failed :(
        console.error("Error in registering SW", err)
     })
    }
else 
{
    console.log('SW not supported');
}



