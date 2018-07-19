// // 1: SIMPLEST FORM
// // ----------------
// // Assign handlers immediately after making the request,
// // and remember the jqxhr object for this request
// var jqxhr = $.get("example.php", function () {
//         alert("success");
//     })
//     .done(function () {
//         alert("second success");
//     })
//     .fail(function () {
//         alert("error");
//     })
//     .always(function () {
//         alert("finished");
//     });

// // Perform other work here ...

// // Set another completion function for the request above
// jqxhr.always(function () {
//     alert("second finished");
// });

// // Note: Due to browser security restrictions, most "Ajax" requests 
// // are subject to the same origin policy; the request can not 
// // successfully retrieve data from a different domain, subdomain, 
// // port, or protocol. 


// 2: WITH HEADERS
// ----------------

$(document).ready(function () {
    $.ajax({
        // https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings 
        url: 'service.svc/Request',
        type: 'GET',
        dataType: 'json',
        success: function () {
            alert('hello!');
        },
        error: function () {
            alert('boo!');
        },
        xhrFields: {
            withCredentials: true // set withCredentials to true for cross-domain requests
        },
        beforeSend: setHeader
    });
});

function setHeader(xhr) {
    xhr.setRequestHeader('securityCode', 'Foo');
    xhr.setRequestHeader('passkey', 'Bar');
}

// contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8')
// Note: For cross-domain requests, setting the content type to anything
// other than application/x-www-form-urlencoded, multipart/form-data, or 
// text/plain will trigger the browser to send a preflight OPTIONS request 
// to the server