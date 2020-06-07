// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = res.firstName+ " "+ res.lastName
              if(res.likesChineseFood){
                message += "likes Chinese Food";
              }
              else{
                message += "doesn't like Chinese Food";
              }
              message += " and uses ";
              message += res.numberOfDisplays;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + message + "!</h2>";
            });

        
      });
  }
);





