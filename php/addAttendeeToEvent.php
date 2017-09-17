<?php
include 'header.php';
include 'getEventsFromDB.php';
//if(isset($_POST)){
  //  if(isset($_POST['data'])){
    //$array = $_POST['data'];
$time_arr=json_decode("$_GET[time_array]");
$user_name = json_decode("$_GET[user_name]");

$user_name = mysql_real_escape_string($user_name);

$name = json_decode("$_GET[name]");
$name = mysql_real_escape_string($name);

$event_name = json_decode("$_GET[event_name]");
$event_name = mysql_real_escape_string($event_name);


//echo count($events_arr); //DEBUGGING


//$events_arr is obtained from the include of getEventsFromDB.php
for($i = 0; $i < count($events_arr); $i++)
{
  if($name == $events_arr[$i][1] && $event_name == $events_arr[$i][2])
  {
    //echo "got here \n"; //DEBUGGING
    for($j = 0; $j < count($time_arr); $j++)
    {

      //echo $time_arr[$j];
      $sql30 = "UPDATE $tbl_name SET `$time_arr[$j]` = if(`$time_arr[$j]` = '0', '$user_name' , concat(`$time_arr[$j]`, '$user_name')) WHERE `name` = '$name' AND `event_name` = '$event_name' ";

      if(mysql_query($sql30))
      {
          echo "Records inserted successfully.";
      }
      else
      {
          echo "ERROR: Could not execute ." ;
      }

    }
  }
}



?>

//<script>
//Javascript code to send array to php
//JSON.stringify(arrayToSend)

//php code to get array from Javascript
//$phpArray=json_decode($_POST['jsondata']);






//code to post
//var arr = ["0000", "0100"];

//$.post('php/addAttendeeToEvent.php', {
//  data: arr
//}, function(response)
//{
//  console.log(response);
//  alert(response);
</script>
