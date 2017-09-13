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
echo $arr[0][2];

 ?>
<script>
//var jArray= <?php echo json_encode($phpArray ); ?>;
//javascript code to get php array
</script
