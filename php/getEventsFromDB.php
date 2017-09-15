<?php
include 'header.php';

$result = mysql_query( "SELECT * FROM $tbl_name");
$events_arr = [];
while ($row = mysql_fetch_assoc($result))
{
   $arr2 = array();
   foreach ($row as $val) $arr2[] = $val;
   $events_arr[] = $arr2;
};

echo json_encode($events_arr);
 ?>
