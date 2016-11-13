'use strict';

this.addEventListener("click", postSearchString);
this.addEventListener("keyup", postSearchString);

function postSearchString(clickEvent) {
  var searchString = document.getElementById("searchString").value;
  if ((clickEvent.target.id === 'submitButton' && clickEvent.key === undefined) || 
      (clickEvent.target.id === 'submitButton' && clickEvent.key === 'Enter')) {
    $.ajax({
      url: 'test.php',
      type: 'post',
      dataType: 'json',
      data: {input: searchString},
      success: function (result) {
        var resultSpan = document.getElementById("resultSpan");
        resultSpan.innerHTML = result.response;
      },
      error: function(xhr, desc, err) {
        console.log(xhr + '\n' + err);
      }
    });
  }
}