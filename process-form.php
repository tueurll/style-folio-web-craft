
<?php
// Initialize variables for form data
$name = $email = $subject = $message = "";
$errors = [];

// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize name
    if (empty($_POST["name"])) {
        $errors[] = "Le nom est requis";
    } else {
        $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    }
    
    // Validate and sanitize email
    if (empty($_POST["email"])) {
        $errors[] = "L'email est requis";
    } else {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Format d'email invalide";
        }
    }
    
    // Validate and sanitize subject
    if (empty($_POST["subject"])) {
        $errors[] = "Le sujet est requis";
    } else {
        $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    }
    
    // Validate and sanitize message
    if (empty($_POST["message"])) {
        $errors[] = "Le message est requis";
    } else {
        $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    }
    
    // If no errors, process the form
    if (empty($errors)) {
        // Recipient email (change this to your email)
        $to = "contact@monportfolio.com";
        
        // Email headers
        $headers = "From: $name <$email>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
        
        // Email body
        $emailBody = "
            <html>
            <head>
                <title>Nouveau message du portfolio</title>
            </head>
            <body>
                <h2>Nouveau message de contact</h2>
                <p><strong>Nom:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Sujet:</strong> $subject</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br($message) . "</p>
            </body>
            </html>
        ";
        
        // Send the email
        $mailSuccess = mail($to, "Nouveau message: $subject", $emailBody, $headers);
        
        if ($mailSuccess) {
            // Redirect back to the contact page with success message
            header("Location: index.html#contact?status=success");
            exit;
        } else {
            $errors[] = "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer.";
        }
    }
}

// If there are errors, redirect back with error info
if (!empty($errors)) {
    $errorString = implode(",", $errors);
    header("Location: index.html#contact?status=error&message=" . urlencode($errorString));
    exit;
}
?>
