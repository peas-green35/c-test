(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    // req.open("GET","http://127.0.0.1:5000/")
    // req.setRequestHeader("Allow-Control-Allow-Origin","*");
    // req.setRequestHeader("Allow-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler) {
    var request = getRequestObject();
    //request.open("GET","https://cors-anywhere.herokuapp.com http://127.0.0.1:5000/")
    // request.setRequestHeader("Allow-Control-Allow-Origin","*");
    // request.setRequestHeader("Allow-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler); 
      };
    request.open("GET", "https://cors-anywhere.herokuapp.com/file:///D:/OnlineWork/Coursera_1/Practise/Week5/index.html", true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }
}

// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
})(window);

