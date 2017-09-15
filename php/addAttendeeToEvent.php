<?php
include 'header.php';
include 'getEventsFromDB.php';
//if(isset($_POST)){
  //  if(isset($_POST['data'])){
    //$array = $_POST['data'];

$name = "$_GET[name]";
$event_name = "$_GET[event_name]";
$date = "$_GET[date]";
$_0000 = "$_GET[0000]";
$_0030 = "$_GET[0030]";
$_0100 = "$_GET[0100]";
$_0130 = "$_GET[0130]";
$_0200 = "$_GET[0200]";
$_0230 = "$_GET[0230]";
$_0300 = "$_GET[0300]";
$_0330 = "$_GET[0330]";
$_0400 = "$_GET[0400]";
$_0430 = "$_GET[0430]";
$_0500 = "$_GET[0500]";
$_0530 = "$_GET[0530]";
$_0600 = "$_GET[0600]";
$_0630 = "$_GET[0630]";
$_0700 = "$_GET[0700]";
$_0730 = "$_GET[0730]";
$_0800 = "$_GET[0800]";
$_0830 = "$_GET[0830]";
$_0900 = "$_GET[0900]";
$_0930 = "$_GET[0930]";
$_1000 = "$_GET[1000]";
$_1030 = "$_GET[1030]";
$_1100 = "$_GET[1100]";
$_1130 = "$_GET[1130]";
$_1200 = "$_GET[1200]";
$_1230 = "$_GET[1230]";
$_1300 = "$_GET[1300]";
$_1330 = "$_GET[1330]";
$_1400 = "$_GET[1400]";
$_1430 = "$_GET[1430]";
$_1500 = "$_GET[1500]";
$_1530 = "$_GET[1530]";
$_1600 = "$_GET[1600]";
$_1630 = "$_GET[1630]";
$_1700 = "$_GET[1700]";
$_1730 = "$_GET[1730]";
$_1800 = "$_GET[1800]";
$_1830 = "$_GET[1830]";
$_1900 = "$_GET[1900]";
$_1930 = "$_GET[1930]";
$_2000 = "$_GET[2000]";
$_2030 = "$_GET[2030]";
$_2100 = "$_GET[2100]";
$_2130 = "$_GET[2130]";
$_2200 = "$_GET[2200]";
$_2230 = "$_GET[2230]";
$_2300 = "$_GET[2300]";
$_2330 = "$_GET[2330]";
echo count($arr);
$arrr = ["0000", "0100"];
for($i = 0; $i < count($arr); $i++)
{
  if($name == $arr[$i][1] && $event_name == $arr[$i][2])
  {
    echo "got here \n";
    for($j = 0; $j < count($arrr); $j++)
    {

      echo $arrr[$j];
      $sql30 = "UPDATE $tbl_name SET `$arrr[$j]` = if(`$arrr[$j]` = '0', 'Jane Doe,' , concat(`$arrr[$j]`, 'Jane Doe,')) WHERE `name` = 'Kaiser' AND `event_name` = 'blah' ";
      echo mysql_query($sql30);

    }
  }
}



?>

<script>
//code to post
var arr = ["0000", "0100"];

$.post('php/addAttendeeToEvent.php', {
  data: arr
}, function(response)
{
  console.log(response);
  alert(response);
</script>
