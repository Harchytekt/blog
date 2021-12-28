<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?> | Le coin de Ducobu</title>
    <link rel="stylesheet" href="../Themes/First/css/fonts.css"/>
    <link rel="stylesheet" href="../Themes/First/css/style.css"/>
    <link rel="apple-touch-icon" sizes="152x152"
          href="../Themes/First/favicons/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="152x152"
          href="../Themes/First/favicons/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon" sizes="120x120"
          href="../Themes/First/favicons/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120"
          href="../Themes/First/favicons/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../Themes/First/favicons/apple-touch-icon-76x76-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="76x76"
          href="../Themes/First/favicons/apple-touch-icon-76x76-precomposed.png">
    <link rel="apple-touch-icon" href="../Themes/First/favicons/apple-touch-icon-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../Themes/First/favicons/apple-touch-icon-precomposed.png">
    <link rel="mask-icon" sizes="any" href="../Themes/First/favicons/logo-shape-black.svg" color="#2AB77E">
    <link rel="icon" type="image/png" href="../Themes/First/favicons/favicon.png">
</head>
<body>
<header>
    <nav>
        <a href="../index.php">
            <div id="logo">
                <?= file_get_contents("../Themes/First/img/logo.svg") ?>
            </div>
        </a>
        <div id="buttons">
            <div id="search"><?= file_get_contents("../Themes/First/img/search.svg") ?></div>
            <div id="settings"
                 title="Menu de réglages"><?= file_get_contents("../Themes/First/img/settings.svg") ?></div>
        </div>
        <div id="settingsPopup">
            <form>
                <h3>Réglages</h3>
                <div>
                    <div class="settingsChoices">
                        <label for="appearance">Apparence :</label>
                        <select name="" id="appearance">
                            <option value="auto">Automatique (Défaut)</option>
                            <option value="light">Clair</option>
                            <option value="dark">Foncé</option>
                        </select>
                        <span class="focus"></span>
                    </div>
                </div>
                <div>
                    <div class="settingsChoices">
                        <label for="theme">Thème :</label>
                        <select name="" id="theme">
                            <option value="default">Défaut</option>
                            <option value="second">Second</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="settingsChoices">
                        <label for="previews">Aperçus :</label>
                        <select name="" id="previews">
                            <option value="true">Activés (Défaut)</option>
                            <option value="false">Désactivés</option>
                        </select>
                    </div>
                </div>
                <div id="buttonParent">
                    <button id="save">Enregistrer</button>
                </div>
            </form>
        </div>
    </nav>
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
