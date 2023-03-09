(function (global) {
  let ajaxUtility = {};

  function getHttpRequestObject() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      global.alert("Ajax is not supported!");
      return null;
    }
  }

  ajaxUtility.sendGetRequest = function (
    requestUrl,
    responseHandler,
    isJsonResponse
  ) {
    let request = getHttpRequestObject();

    request.onreadystatechange = function () {
      handleResponse(request, responseHandler, isJsonResponse);
    };
    request.open("GET", requestUrl, true);
    request.send(null);
  };
  function handleResponse(request, responseHandler, isJsonResponse) {
    if (request.readyState == 4 && request.status == 200) {
      if (isJsonResponse == undefined) {
        isJsonResponse = true;
      }
      if (isJsonResponse) {
        responseHandler(JSON.parse(request.responseText));
      } else {
        responseHandler(request.responseText);
      }
    }
  }

  global.$ajaxUtility = ajaxUtility;
})(window);
