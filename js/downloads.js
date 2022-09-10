/* I put your JSON into an external file, loaded from github */
var url = "https://raw.githubusercontent.com/PixelExtended/OTA/snow/builds/avicii.json";

/* this tells the page to wait until jQuery has loaded, so you can use the Ajax call */

$(document).ready(function(){
  $.ajax({
    url: url,
    dataType: 'json',
      error: function(){
        console.log('JSON FAILED for data');
      },
    success:function(results){
  /* the results is your json, you can reference the elements directly by using it here, without creating any additional variables */
  
      var deviceNames = document.getElementById("deviceName");
      var maintainerName = document.getElementById("maintainerName");
      var downloadLinkk = document.getElementById("downloadLink");

      
      results.forEach(function(element) {
      deviceNames.insertAdjacentHTML( 'afterbegin',element.device_name+"<br>"+"("+element.device+")");
      maintainerName.insertAdjacentHTML( 'afterbegin',element.tg_username);
      document.getElementById("downloadLink").href = element.url
      }); // end of forEach
    }  // end of success fn
   }) // end of Ajax call
 }) // end of $(document).ready() function