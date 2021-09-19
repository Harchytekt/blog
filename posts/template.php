<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?> | Le coin de Ducobu</title>
    <link rel="stylesheet" href="../Themes/First/css/fonts.css"/>
    <link rel="stylesheet" href="../Themes/First/css/style.css"/>
</head>
<body>
<header>
    <a href="../index.php">
        <div id="logo">
            <?= file_get_contents("../Themes/First/img/logo.svg") ?>
        </div>
        <span id="title">Le coin de Ducobu</span>
    </a>
</header>

<?= $content ?>

<footer><span>Le coin de Ducobu @ 2021</span></footer>

<div id="externalPopup">
    <iframe></iframe>
</div>
<div id="internalPopup"></div>
<script src="../libraries/jquery-3.6.0.min.js"></script>
<script>
    const iconExternalLinks = <?= json_encode(file_get_contents("../Themes/First/img/external-link.svg")) ?>;
    const iconInternalLinks = <?= json_encode(file_get_contents("../Themes/First/img/internal-link.svg")) ?>;
</script>
<script src="../Themes/First/js/scripts.js"></script>
</body>
</html>
