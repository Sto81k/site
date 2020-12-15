<?php 

require_once('form-lesson/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['use_text_Ima'];
$familia = $_POST['use_text_Familia'];
$email = $_POST['use_text_Pochta'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'MeaningIT404@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '-AK-28_IT_StasTolik'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('MeaningIT404@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('sto81k71@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = $name . ' оставил заявку, его фамилия ' .$familia. ' Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
	header('location: input.html');
    echo 'Error';
    console.log('Error');
} else {
	
    header('location: input.html');
}
?>