<?php
//assign from url
$name = "$_GET[name]";
$event_name = "$_GET[event_name]";
$date = "$_GET[date]";
$s_time = "$_GET[s_time]";
$e_time = "$_GET[e_time]";

//connection variables
$host="sql9.freemysqlhosting.net"; // Host name
$username="sql9193383"; // Mysql username
$password="5Die3BXFPm"; // Mysql password
$db_name="sql9193383"; // Database name
$tbl_name="Project_1_Table_1"; // Table name

// Connect to server and select databse.
$link = mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");

$sql3 = "INSERT INTO $tbl_name (name, event_name, `date`, s_time, e_time)
         VALUES ('$name' , '$event_name' , '$date' , '$s_time' , '$e_time')";

if(mysql_query($sql3))
{
    echo "Records inserted successfully.";
}
else
{
    echo "ERROR: Could not able to execute  " ;
}

?>
