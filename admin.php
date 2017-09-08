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
?>


<html>
<head>
  <link rel = "stylesheet" href="css/useradmin.css">
  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
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
      <br>
    </div>

    <div class="mainthree">
      <br><br>
      <center>Main Three</center>
    </div>

  </div>
</body>
</html>
