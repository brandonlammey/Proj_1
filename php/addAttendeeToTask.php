<?php
/////////////////////////////////////////////////////////////////////////////
///File: addAttendeeToTask.php
///Author: Brandon Lammey, Giovanni Artavia
///Purpose: Add a user to the task list of a given event
///Last Modified: 10/03/2017
/////////////////////////////////////////////////////////////////////////////

include 'header.php';
include 'getEventsFromDB.php';

///Decode JSON string from javascript xmlhttprequest
$task_list = json_decode("$_GET[task_list]");

///Decode JSON string from javascript xmlhttprequest
$user_name = json_decode("$_GET[user_name]");

///Escape characters not fit for sql statement
//$user_name = mysql_real_escape_string($user_name);

///Decode JSON string from javascript xmlhttprequest
$name = json_decode("$_GET[name]");

///Escape characters not fit for sql statement
//$name = mysql_real_escape_string($name);

///Decode JSON string from javascript xmlhttprequest
$event_name = json_decode("$_GET[event_name]");


///$events_arr is obtained from the include of getEventsFromDB.php

echo "<br><br><br><br><br><br><br><br>";
$user_name = mysql_real_escape_string($user_name);
$event_name = mysql_real_escape_string($event_name);
$name = mysql_real_escape_string($name);
$task_list = mysql_real_escape_string($task_list);

$sql30 = "UPDATE $tbl_name SET $tbl_name.`task_list` = '$task_list' WHERE `name` = '$name' AND `event_name` = '$event_name' ";

      ///Execute and check if the sql action was successful
if(mysql_query($sql30))
{
   echo "Records inserted successfully.";
}
else
{
   echo "ERROR: Could not execute ." ;
}


?>