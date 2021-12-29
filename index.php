<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le coin de Ducobu</title>
    <link rel="stylesheet" href="Themes/First/css/fonts.css"/>
    <link rel="stylesheet" href="Themes/First/css/style.css"/>
    <link rel="apple-touch-icon" sizes="152x152" href="Themes/First/favicons/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="152x152"
          href="Themes/First/favicons/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon" sizes="120x120" href="Themes/First/favicons/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120"
          href="Themes/First/favicons/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon" sizes="76x76" href="Themes/First/favicons/apple-touch-icon-76x76-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="76x76"
          href="Themes/First/favicons/apple-touch-icon-76x76-precomposed.png">
    <link rel="apple-touch-icon" href="Themes/First/favicons/apple-touch-icon-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="Themes/First/favicons/apple-touch-icon-precomposed.png">
    <link rel="mask-icon" sizes="any" href="Themes/First/favicons/logo-shape-black.svg" color="#2AB77E">
    <link rel="icon" type="image/png" href="Themes/First/favicons/favicon.png">
</head>
<body>
<header>
    <nav>
        <a href="index.php">
            <div id="logo">
                <?= file_get_contents("Themes/First/img/logo.svg") ?>
            </div>
        </a>
        <div id="buttons">
            <div id="search" title="Recherche (alt + f)"><?= file_get_contents("Themes/First/img/search.svg") ?></div>
            <div id="settings"
                 title="Menu de réglages (alt + r)"><?= file_get_contents("Themes/First/img/settings.svg") ?></div>
        </div>
        <div id="searchPopup">
            <form>
                <input type="text" id="searchField" placeholder="Recherche + ⏎">
            </form>
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
<article>
    <header>
        <h1>Bienvenue !</h1>
    </header>
    <div id="content">
        <p>Once the web page is complete this will read something different and more relevant. At some point someone
            will replace this block of text with useful words so customers can learn more about the products and
            services you offer! A web developer will often use filler text, so they can focus on the design of the web
            page. It will be replaced with <a href="posts/1.php"><span aria-label="1" aria-title="Premier"
                                                                       class="internalLink">real content later</span></a>.
        </p>
        <p>At some point someone will replace this block of text with useful words so customers can learn more about the
            products and services you offer! Don't waste too much of your time reading this placeholder text! This text
            is going to be replaced once the web page is completed. </p>
        <p>This text isn’t going to remain here because it doesn't pertain to the web page. A web developer will often
            use filler text, so they can focus on the design of the web page. It will be replaced with real content
            later. Some common names for what you are reading are: filler text, placeholder text, and dummy text. </p>
        <p>You are currently reading text that is written in English, not Latin. We aren't quite sure what to put here
            yet. This text is only here to show you what it looks when there is text in this area of the web page. If
            the creator of this web page knew what to put here, they would probably not have to paste text like this
            here at all. </p>
        <p>Once the web page is complete this will read something different and more relevant. This text is only here to
            show you what it looks when there is text in this area of the web page. Placeholder text is useful when you
            need to see what a page design looks like, but the actual content isn't available. It's like having someone
            with identical measurements check the fit of a dress before trying it on yourself. </p>
        <p>You are currently reading text that is written in English, not Latin. What you are reading now is not what
            you will be reading in this space once this <a
                    href="https://sixcolors.com/link/2021/09/what-does-it-all-mean/"><span
                        aria-label="https://sixcolors.com/link/2021/09/what-does-it-all-mean/"
                        class="externalLink">web page</span></a>
            is completed. Once the web page is complete this will
            read something different and more relevant. </p>
        <p>We aren't quite sure what to put here yet. Once the final copy for the web page has been created, it will go
            here. This text is only here to show you what it looks when there is text in this area of the web page. </p>
    </div>
    <footer>

    </footer>
</article>

<footer><span>Le coin de Ducobu @ 2021</span></footer>

<div id="externalPopup">
    <iframe></iframe>
</div>
<div id="internalPopup"></div>
<div id="footnotePopup">

</div>
<script src="libraries/jquery-3.6.0.min.js"></script>
<script>
    const iconExternalLinks = <?= json_encode(file_get_contents("Themes/First/img/external-link.svg")) ?>;
    const iconInternalLinks = <?= json_encode(file_get_contents("Themes/First/img/internal-link.svg")) ?>;
</script>
<script src="Themes/First/js/scripts.js"></script>
</body>
</html>
