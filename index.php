<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le coin de Ducobu</title>
    <link rel="stylesheet" href="Themes/First/css/fonts.css"/>
    <link rel="stylesheet" href="Themes/First/css/style.css"/>
    <style>
        #title:hover .yellow {
            color: #FFDE00;
        }

        nav div {
            display: inline-block;
        }

        #darkModeToggle svg * path, #darkModeToggle svg * ellipse,

        ,
        #search svg * path {
            fill: #334259;
        }

        #darkModeToggle svg, #search svg, #darkModeToggle, #search {
            font-size: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
        }

        #darkModeToggle, #search {
            background-color: #E5E5E570;
            border-radius: 7px;
            padding: 5px;
        }

        #darkModeToggle:hover, #search:hover {
            background-color: #BBBBBB70;
            cursor: pointer;
        }
    </style>
</head>
<body>
<header>
    <nav>
        <a href="index.php">
            <div id="logo">
                <?= file_get_contents("Themes/First/img/logo.svg") ?>
            </div>
            <span id="title">Le coin de Ducobu</span>
            <!--        <span id="title">L<span class="yellow">e</span> c<span class="yellow">oi</span>n d<span class="yellow">e</span> D<span class="yellow">u</span>c<span class="yellow">o</span>b<span class="yellow">u</span></span>-->
        </a>
        <div id="search"><?= file_get_contents("Themes/First/img/search.svg") ?></div>
        <div id="darkModeToggle"><?= file_get_contents("Themes/First/img/auto.svg") ?></div>
    </nav>
</header>
<article>
    <header>
        <h1>Bienvenue !</h1>
    </header>
    <div id="content">
        <p>Once the web page is complete this will read something different and more relevant. At some point someone
            will replace this block of text with useful words so customers can learn more about the products and
            services you offer! A web developer will often use filler text so they can focus on the design of the web
            page. It will be replaced with <a href="posts/1.php"><span aria-label="1" class="internalLink">real content later</span></a>.
        </p>
        <p>At some point someone will replace this block of text with useful words so customers can learn more about the
            products and services you offer! Don't waste too much of your time reading this placeholder text! This text
            is going to be replaced once the web page is completed. </p>
        <p>This text isn’t going to remain here because it doesn't pertain to the web page. A web developer will often
            use filler text so they can focus on the design of the web page. It will be replaced with real content
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
<script src="libraries/jquery-3.6.0.min.js"></script>
<script>
    const iconExternalLinks = <?= json_encode(file_get_contents("Themes/First/img/external-link.svg")) ?>;
    const iconInternalLinks = <?= json_encode(file_get_contents("Themes/First/img/internal-link.svg")) ?>;
</script>
<script src="Themes/First/js/scripts.js"></script>
</body>
</html>
