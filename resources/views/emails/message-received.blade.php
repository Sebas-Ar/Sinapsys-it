<!DOCTYPE html>
<html lang="es">
<head>
    <title>Tu Contraseña de Sinapsys-it</title>
</head>
<body>
    <p>Recibiste un mensaje de: {{ $msg['nombre'] }} - <{{ $msg['email'] }}></p>
    <br>
    <p>Pais: {{ $msg['pais'] }}</p>
    <br>
    <p>Celular: {{ $msg['celular'] }}</p>
    <br>
    <p><Strong>Mensaje:</Strong></p>
    <p>{{ $msg['mensaje'] }}</p>
</body>
</html>