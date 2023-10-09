<?php
    $data='';
    $filename='viernes.json';
    if(is_file($filename)){
        $data=file_get_contents($filename);
    }
    $json_arr=json_decode($data, true);
    $json_arr[]=array(
        'id'=>$_REQUEST['id'],
        'nombre'=>$_REQUEST['nombre'],
        'edad'=>$_REQUEST['edad'],
        'identidadsecreta'=>$_REQUEST['identidadsecreta'],
        'poderes'=>$_REQUEST['poderes'],
        'imagen'=>$_REQUEST['imagen']
    );
    file_put_contents($filename, json_encode($json_arr));
    header("Location:http://localhost/image/viernes.html")
?>