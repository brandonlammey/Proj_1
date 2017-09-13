<?php
session_start();
ob_start();
include "php/header.php";
?>


<html>
<head>
  <link rel = "stylesheet" href="css/useradmin.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src = "js/admin.js"></script>

</head>
<body>

  <div class="mainwrap">
    <div class="mainone">
      <center>
        <br><br><br>
        <h1> Admin Event Planner </h1>
        <h6> by <span class="groupname">Purple C#bras</span></h6>

      </center>
    </div>

    <div class="maintwo">
      <br><br>
      <p id = "Events"></p>
      <button type="button" id="create_event" class="side_menu">Create New Event</button>
      <button type="button" id="review_event" class="side_menu">Review Event</button>
      <br>
    </div>

    <div class="mainthree">

      <br><br>
      <center>
        <p>
          <form name = "event_details" id="event_form" action = "" method = "GET">
          User Name: <input type = "text" id = "admin_name" name = "admin_name">
          <br><br>
          Event Name: <input type = "text" id = "event_name" name = "event_name">
          <br><br>
          Date: <input type = "date" id = "datepicker" name = "event_date">
          <br>

        </p>
        Event Time:

        <input type = "button" name = "12_time_select" id = "time_select_12" value = "12 Hour Format">
        <input type = "button" name = "24_time_select" id = "time_select_24" value = "24 Hour Format">
        <br><br>

        <p id = "event_time"></p>
        <input type = "button" name = "submit" id="submit_button" value = "Submit" onClick = "formData(this.form)"></form>

        <p>
          <form name = "review" id = "review">
          User Name: <input type = "text" id = "review_admin_name" name = "review_admin_name">
          <br><br>
          Event Name: <input type = "text" id = "review_event_name" name = "review_event_name">
          <br><br>
          <input type = "button" id = "review_submit" name = "review_submit" value = "Submit"></form> 
        </p>
        <p id = "event_review"></p>
      </center>


    </div>

  </div>
</body>
</html>
