<?php
session_start();
ob_start();

$host="sql9.freemysqlhosting.net"; // Host name
$username="sql9193383"; // Mysql username
$password="5Die3BXFPm"; // Mysql password
$db_name="sql9193383"; // Database name
$tbl_name="Project_1_Table_1"; // Table name

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");


include 'php/DB.php'; //Methods to interact with the db

//getFromDB(NULL,NULL,NULL);    //Will test the case in which no good information was given. Echos error message
?>



<html>
<head>
  <link rel = "stylesheet" href="css/useradmin.css">
  <link rel = "stylesheet" href = "css/jquery.timepicker.css">
  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="styleshee" type="text/css" href="css/jquery.timepicker.css" />
  <!--<link rel="stylesheet" href="/resources/demos/style.css">-->
  <link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
  
</head>
<body>
  
  <div class="mainwrap">
    <div class="mainone">
      <center>
        <br><br><br>
        <h1> Admin Event Planner </h1>
        <h6> by Purple C#bras </h6>
        
      </center>
    </div>

    <div class="maintwo">
      <br><br>
      <center>Main Two</center>
      <p id = "Events"> </p>
      <br>
    </div>

    <div class="mainthree">
      <script>
        function formData(form)
        {
          var name = form.admin_name.value;
          var ev_name = form.event_name.value;
          var date = form.event_date.value;
          var s_time = form.start_time.value;
          var e_time = form.end_time.value;

          form.reset();

          $("#Events").append("Admin Name: "+name+"<br>");
          $("#Events").append("Event Name: "+ev_name+"<br>");
          $("#Events").append("Event Date: "+date+"<br>");
          $("#Events").append("Event Time: "+s_time+" to "+e_time+"<br>");
          $("#Events").append("<br><br><br>");
        }
      </script>
      <br><br>
      <center>
        <p>
          <form name = "event_details" action = "" method = "GET">
          User Name: <input type = "text" id = "admin_name" name = "admin_name">
          <br><br>
          Event Name: <input type = "text" id = "event_name" name = "event_name">
          <br><br>
          Date: <input type = "date" id = "datepicker" name = "event_date">
          <br>
        </p>
        <p id="event_time">
          Event Time:
          <input type="text" class="time start" name="start_time" /> to
          <input type="text" class="time end" name="end_time" />
        </p>

        <!-- include input widgets; this is independent of Datepair.js -->
        <link rel="styleshee" type="text/css" href="css/jquery.timepicker.css" />
        <script type="text/javascript" src="js/jquery.timepicker.js"></script>
        <script type="text/javascript" src="js/datepair.js"></script>
        <script>
            // initialize input widgets first
            $("#event_time .time").timepicker({
                "showDuration": true,
                "timeFormat": "H:i",
                "show2400": true,
                "maxTime": "24:00"
            });

            // initialize datepair
            var event_timeEl = document.getElementById("event_time");
            var datepair = new Datepair(event_timeEl);
        </script>

        <br>
        <input type="button" name = "submit" value = "Submit" onClick = "formData(this.form)">
        </form>
            
      </center>

      
    </div>

  </div>
</body>
</html>
