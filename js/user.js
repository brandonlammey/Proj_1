$(document).ready(function(){
  $("#Info_Title").html("Events");

  //Action: When clicking the create event button, creates dummy event baseball
  //Post: Event added to ev_list array and is displayed on page

  $("#create").click(
    function(){
      $("#Events_List").html("Created is clicked");

    }
  );

  $("#view_all").click(
    function(){
      $("#Events_List").html("View all is clicked");

    }
  );

});
