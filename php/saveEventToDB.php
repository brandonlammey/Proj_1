<?php
include 'header.php';
//assign from url
$name = "$_GET[name]";
$event_name = "$_GET[event_name]";
$date = "$_GET[date]";
$s_time = "$_GET[s_time]";
$e_time = "$_GET[e_time]";



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
