<?php

$host="sql9.freemysqlhosting.net"; // Host name
$username="sql9193383"; // Mysql username
$password="5Die3BXFPm"; // Mysql password
$db_name="sql9193383"; // Database name
$tbl_name="Project_1_Table_1"; // Table name

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");
/////////////////////////////////////////////////////////////////////////////

function getFromDB($creator, $event_name, $event_time)
{
  if( !($creator === NULL) )
  {
    //TODO
  }
  else if( !($event_name === NULL) )
  {
    //TODO
  }
  else if( !($event_time === NULL) )
  {
    //TODO
  }
  else
  {
    echo "Could not execute command: getFromDB";
  }
}

function saveEventToDB($creatorName, $event_name, $event_date, $event_start_time, $event_end_time)
{
  echo "hey";
  $sql = "INSERT INTO $tbl_name (name, event_name, event_date, event_start_time, event_end_time, )
          VALUES ($creatorName, $event_name, $event_date, $event_start_time, $event_end_time)";
}
?>
