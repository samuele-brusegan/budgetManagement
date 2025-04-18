<?php
header('Content-Type: application/json');

if (!isset($_GET['filename'])) {
    echo json_encode(['error' => 'Filename parameter is missing']);
    exit;
}

$filename = $_GET['filename'];
$exists = file_exists($filename);

echo json_encode([
    'exists' => $exists,
    'filename' => $filename
]);
?>