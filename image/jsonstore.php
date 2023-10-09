<?php
if(isset($_REQUEST['submit'])){
$data='';
$filename='data.json';
if(is_file($filename)){
    $data=file_get_contents($filename);
}
$json_arr=json_decode($data,true);
$json_arr[]=array('code' => $_REQUEST['code'], 'name'=>$_REQUEST['name']);
file_put_contents($filename, json_encode($json_arr));
header("Location:http://localhost/html/html_form.html")
}
?>