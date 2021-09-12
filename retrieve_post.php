<?php
header("Content-type: application/json");
$postPath = "postContent/" . $_POST["blogPost"] . ".php";
if (file_exists($postPath)) {
    $content = @file_get_contents($postPath);
    $data["content"] = mb_convert_encoding($content, "UTF-8", "UTF-8");
} else {
    $data["content"] = "The blog post doesn't exist yet!";
}

echo json_encode($data);
die;
