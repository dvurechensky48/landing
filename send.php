<?php
	if(isset($_POST['name'], $_POST['company'], $_POST['company'], $_POST['position'], $_POST['email'], $_POST['phone']))
	{
		$name = $_POST['name'];
		$secondname = $_POST['secondname'];
		$company = $_POST['company'];
		$position = $_POST['position'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];

		$subject = "Заявка на участие в конференции"; 

		$message = ' 
		<html> 
		    <b>Имя:</b> '.$name.'
		    <br>
		    <b>Фамилия:</b> '.$secondname.'
		    <br>
		    <b>Кампания:</b> '.$company.'
		    <br>
		    <b>Должность:</b> '.$position.'
		    <br>
		    <b>e-mail:</b> '.$email.'
		    <br>
		    <b>Телефон:</b> '.$phone.'
		</html>'; 

		$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
		$headers .= "From: <bitrix@octavian48.ru>\r\n"; 

		if (mail('bitrix@octavian48.ru', $subject, $message, $headers))
		{
			echo '
			<html>
			 <head>
			  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			    <!-- Latest compiled and minified CSS -->
				<link rel="stylesheet" href="css/bootstrap.min.css">
				<!-- Optional theme -->
				<link rel="stylesheet" href="css/bootstrap-theme.min.css">
				<!-- Main css -->
				<link rel="stylesheet" type="text/css" href="css/style.css">
			   <title>BITRIX</title>
			 </head>
			 <body>
			 	<!-- POMP UP -->
			 	<div id="pomp">
			 		<div class="container">
			 			<div class="row">
			 				<div class="bgp col-lg-offset-4 col-lg-4">
			 					<h2 class="all-center col-lg-12">
				 					Сообщение отправлено
				 				</h2>
				 				<div class="all-center col-lg-12">
				 					<a href="/" class="block">
				 						Закрыть
				 					</a>
				 				</div>
			 				</div>
			 				
			 			</div>
			 		</div>
			 	</div>
			 	<!-- END POMP UP -->
			';
		}
		else
		{
			echo "Внутренняя ошибка";
		}	
		 
	}
?> 