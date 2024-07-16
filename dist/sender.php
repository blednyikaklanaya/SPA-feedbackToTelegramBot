<?php

$name = $_POST["name"];
$number = $_POST["number"];

$token = "7084044482:AAFeAn9ckN8P8wVOX8azrpTs5ERFsQgsOyw";
$chat_id = "-4260647599";

$arr = array (
    '-  Номер телефона' => $number,
    '-  Имя' => $name
);

foreach($arr as $key => $value) {
    $txt .= " <code>".$value."</code> ".$key."%0A ";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
