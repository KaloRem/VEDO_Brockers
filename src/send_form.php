<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dane z formularza
    $options = isset($_POST['option']) ? implode(", ", $_POST['option']) : '';
    $username = htmlspecialchars($_POST['username']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);

    // Treść wiadomości e-mail
    $message = "Imię: $username\n";
    $message .= "E-mail: $email\n";
    $message .= "Telefon: $phone\n";
    $message .= "Opcje: $options\n";

    // Nagłówki
    $to = "vedo.brokers@gmail.com";
    $subject = "Nowe zgłoszenie z formularza VEDO Brokers";
    $headers = "From: no-reply@twojastrona.pl\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Wysyłka wiadomości e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Dziękujemy! Twoje zgłoszenie zostało wysłane.";
    } else {
        echo "Przepraszamy, wystąpił błąd. Spróbuj ponownie.";
    }
}
?>