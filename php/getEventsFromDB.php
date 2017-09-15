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
//echo '<script>var events_arr = ' . json_encode($events_arr) . ';</script>';
//$query_json = json_encode($events_arr);


//echo $arr[17][1]; echo "\n";
//echo $arr[17][2]; echo "\n";
//echo $arr[17][3]; echo "\n";
echo json_encode($events_arr);
 ?>
