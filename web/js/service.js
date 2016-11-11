'use strict';

this.addEventListener("click", postSearchString);
this.addEventListener("keyup", postSearchString);

function postSearchString(clickEvent) {
  var searchString = document.getElementById("searchString").value;
  console.log('clickEvent: ', clickEvent);
  console.log('clickEvent.target.id', clickEvent.target.id);
  console.log('clickEvent.key', clickEvent.key);
  if ((clickEvent.target.id === 'submitButton' && clickEvent.key === undefined) || 
      (clickEvent.target.id === 'submitButton' && clickEvent.key === 'Enter')) {
    console.log('searchString: ', searchString);
    $.ajax({
      url: 'test.php',
      type: 'post',
      dataType: 'json',
      data: {input: searchString},
      success: function (result) {
        console.log('result: ', result);
        var resultSpan = document.getElementById("resultSpan");
        resultSpan.innerHTML = result.response;
      },
      error: function(xhr, desc, err) {
        console.log(xhr + '\n' + err);
      }
    });
  }
}