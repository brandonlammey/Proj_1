<?php
session_start();
ob_start();
include 'php/header.php'
?>

<html>
  <head>

    <!--Referencing the CSS Styling for the page-->
    <link rel = "stylesheet" href="css/useradmin.css">
    <!--Importing jquery-->
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <!--Importing Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
  </head>

  <!--Body-->
  <body>
    <script src="js/user.js"></script>
    <script src="js/chalk.js"></script>
    <div class="mainwrap">

      <!--Main One is the Top of the Page that makes it look pretty-->
      <div class="mainone">
      <br><a href = "../">Back To Home</a>
        <center>
          <br>
          <h1> User Event Planner </h1>
          <h6> by <span class="groupname">Purple C#bras</span> </h6>
        </center>
      </div>

      <!--Main Two is the Side Menu that contains
      all the buttons that create events,
      view events, and expand events-->
      <div class="maintwo">
        <br><br>
        <button id="date_event" class="side_menu">Search Events by Date</button>
        <button id="all_event" class="side_menu">See all Events</button>

        <br>
      </div>

      <!--Main Three is in charge of displaying all the events-->
      <div class="mainthree">

        <br>
        <center><h1 id="Info_Title"></h1></center>
        <br>

        <center>
        <p id="date_select">

        <form id = "date_form">
        Name: &nbsp;<input type = "text" id = "event_name" name = "event_name" placeholder = "(required)"><br><br>
        Date: &nbsp;<input type = "date" id = "event_date" name = "event_date"><br><br>
        <input type = "button" id = "date_submit" value = "Submit">
        </form>

        </p>

        <form id="name_form">
        Name: &nbsp;<input type="text" id="name" name="name" placeholder="(required)"><br><br>
        <input type = "button" id = "name_submit" value = "Submit">
        </form>

        <p id="event_list"></p>

        <p id="event_info"></p>

        <p id="event_time">
          Select Time Display<br><br>
          <button type = 'button' name = '12_time_select' id = 'time_select_12'>12 Hour Format</button>
          <button type = 'button' name = '24_time_select' id = 'time_select_24'>24 Hour Format</button>
          <br><br><br>
          <p id = "user_table_12"></p>
          <p id = "user_table_24"></p>
          <p id = "time_submit"></p>
        </p>
        </center>

      </div>

    </div>
  </body>
</html>
