<?php
// connect to db

$host = "localhost";
$user = "root";
$password = "Password@1";
$database = "marvel";
$conn = mysqli_connect($host, $user, $password, $database);
$results = $conn->query("SELECT * FROM avenger");
?>

<?php while ($data = $results->fetch_assoc()): ?>

    <tr>
        <td><?php echo $data['id'] ?></td>
        <td><?php echo $data['aname'] ?></td>
        <td><?php echo $data['atype'] ?></td>
    </tr>
<?php endwhile; ?>