<?php

	header("Content-Type: text/html; charset=utf-8");
	
	function send_form($message) {
	
		$mail_to = "your_mail@mail.ru"; // Адрес, куда отправляем письма
		$subject = "Письмо с обратной связи"; // Тема письма
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: ".$subject." <no-reply@".$_SERVER['HTTP_HOST'].">\r\n";

		mail($mail_to, $subject, $message, $headers);
		
	}  

	$msg_result = "";
	$errors = array();

	$email = $_POST["email"];
	$pattern = "|^([a-z0-9_.-]{1,20})@([a-z0-9.-]{1,20}).([a-z]{2,4})|is";

	if($_POST["name"] == "") {

		$name = "Не указано";

	} else {

		$name = $_POST["name"];

	}

	if(!preg_match($pattern, strtolower($email))) {

		$errors[] = "E-mail указан некорректно."; // Сообщение, если e-mail некорректен

	}

	if($_POST["message"] == "") {

		$errors[] = "Не указан текст сообщения."; // Сообщение, если поле «сообщение» пусто

	}
 
	if(empty($errors)) { // Отправляем форму если нет ошибок
	
		$message = "<b>Имя отправителя</b>: ".$name."<br>";
		$message .= "<b>E-mail</b>: ".$_POST['email']."<br><br>";
		$message .= "<b>Текст письма</b>: " . $_POST['message'];
		
		send_form($message);
		
		$msg_result = "Сообщение успешно отправлено!"; // Сообщение об успешной отправке
		
	} else { // Выводим ошибки

		$msg_result = "";
		
		foreach($errors as $all_error) {

			$msg_result .= $all_error."<br>";

		}
		
	}

	echo json_encode(array(

		"result" => $msg_result

	));

?>
