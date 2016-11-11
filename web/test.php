<?php

header("content-type:application/json");

$data_keys = array_keys($_POST);

error_log(print_r($data_keys[0], true));

echo json_encode(array('response' => $_POST[$data_keys[0]]));

exit();
