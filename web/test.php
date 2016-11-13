<?php

header("content-type:application/json");

$data_keys = array_keys($_POST);

echo json_encode(array('response' => $_POST[$data_keys[0]]));

exit();
