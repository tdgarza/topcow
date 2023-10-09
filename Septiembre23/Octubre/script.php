<?php
    // Configuración de la conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pokemon";

    // Crear conexión
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("La conexión a la base de datos falló: " . $conn->connect_error);
    }

    // Consulta SQL para obtener datos de la tabla
    $sql = "SELECT * FROM Pokemon";
    $result = $conn->query($sql);

    // Mostrar los datos en una tabla
    if ($result->num_rows > 0) {
        echo "<table>";
        echo "<tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Correo Electrónico</th><th>Teléfono</th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["id"] . "</td><td>" . $row["Nombre"] . "</td><td>" . $row["Poder"] . "</td><td>" . $row["Evolucion"] . "</td><td>" . $row["Tipo"] . "</td></tr>";
        }
        echo "</table>";
    } else {
        echo "No se encontraron registros en la agenda.";
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
    ?>