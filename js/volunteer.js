
function getVolunteers (func) {

	var getVolunteersUrl = "http://localhost:53177/api/volunteer";

     $.ajax({
         type: "GET",
         url: getVolunteersUrl,
         dataType: "json",

         success: function (data, status, jqXHR) {
             func(data);
         },

         error: function (jqXHR, status) {
             alert(status);
         }
     });
};