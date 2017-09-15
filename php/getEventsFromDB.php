<?php
include 'header.php';

$result = mysql_query( "SELECT * FROM $tbl_name");
$arr = [];
while ($row = mysql_fetch_assoc($result))
{
   $arr2 = array();
   foreach ($row as $val) $arr2[] = $val;
   $arr[] = $arr2;
};
//echo $arr[17][1]; echo "\n";
//echo $arr[17][2]; echo "\n";
//echo $arr[17][3]; echo "\n";

 ?>
<script>
//var jArray= <?php echo json_encode($phpArray ); ?>;
//javascript code to get php array
</script
