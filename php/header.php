<?php
/////////////////////////////////////////////////////////////////////////////
///File: header.php
///Author: Kaiser Mittenburg
///Purpose: File to incude in all files that need to connect to the database
///Last Modified: 09/29/2017
///Updated to assign the table to PProject_2_Table_1
/////////////////////////////////////////////////////////////////////////////

///Connection Variables

$host="sql9.freemysqlhosting.net"; // Host name
$username="sql9196619"; // Mysql username
$password="3cuYl23RmM"; // Mysql password
$db_name="sql9196619"; // Database name
$tbl_name="Project_2_Table_1"; // Table name

///Connect to the server
$link = mysql_connect("$host", "$username", "$password")or die("cannot connect");

///Select the database, or display error
mysql_select_db("$db_name")or die("cannot select DB");

?>
