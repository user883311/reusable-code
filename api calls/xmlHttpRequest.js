// No headers, free access

// ref https://jsonplaceholder.typicode.com/
var url1 = "https://jsonplaceholder.typicode.com/posts"; 


// // 1: SIMPLEST FORM
// // -------------------
// function reqListener() {
//     console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", url1);
// oReq.send(); // sends the request to the server


// // 2: WITH STATUS UPDATES
// // -------------------
// var oReq = new XMLHttpRequest();

// oReq.addEventListener("progress", updateProgress);
// oReq.addEventListener("load", transferComplete);
// oReq.addEventListener("error", transferFailed);
// oReq.addEventListener("abort", transferCanceled);

// oReq.open("GET", url1);
// oReq.send();

// // progress on transfers from the server to the client (downloads)
// function updateProgress(oEvent) {
//     if (oEvent.lengthComputable) {
//         var percentComplete = oEvent.loaded / oEvent.total * 100;
//         // ...
//     } else {
//         // Unable to compute progress information since the total size is unknown
//     }
// }

// function transferComplete(evt) {
//     console.log("The transfer is complete.");
//     console.log("The response is:", this.responseText);
// }

// function transferFailed(evt) {
//     console.log("An error occurred while transferring the file.");
// }

// function transferCanceled(evt) {
//     console.log("The transfer has been canceled by the user.");
// }


// // 3: WITH CREDENTIALS
// // -------------------
// // With credentials, just need to add the withCredentials property 
// // before sending the XMLHttpRequest

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://example.com/', true);
// xhr.withCredentials = true; //indicates whether or not cross-site 
// // Access-Control requests should be made using credentials such as 
// // cookies, authorization headers or TLS client certificates. 

// xhr.send(null);


// // 4: WITH HEADERS
// // -------------------
// // With credentials, just need to add the withCredentials property 
// // before sending the XMLHttpRequest but after open
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://example.com/', true);
// xhr.setRequestHeader(header, value)
// xhr.send(null);
