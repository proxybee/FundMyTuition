

	/************************
	* Variables you can change
	*************************/
	
	$mailto   = "mail@example.com"; // Enter your mail addres here.
	$name     = $_POST['name']; 
	$subject  = "Message from $name"; // Enter the subject here.
	$email    = $_POST['email'];
	$message  = $_POST['message'];
	
	$phone  = $_POST['number'];
	
	
	// NOW SEND THE ENQUIRY
	
	$email_message="\n\n" .
	"Name: " .
	ucwords($name) .
	"\n" .
	"Email: " .
	$email .
	"\n" .
	"Phone: " .
	$number .
	"\n" .
	"Comments: " .
	"\n" .
	$message .
	"\n" .
	"\n\n" ;
	
	$email_message = trim(stripslashes($email_message));
	$mail = @mail($mailto, $subject, $email_message, "From: \"$name\" <".$email.">\nReply-To: \"".ucwords($name)."\" <".$email.">\nX-Mailer: PHP/" . phpversion()   );
	
	if($mail) { echo 'sent'; }

