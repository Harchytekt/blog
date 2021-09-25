$(document).ready(function () {
    let isWithPreviews = true;
    let currentInternalLink;
    let currentExternalLink;

    $("#save").click(function (event) {
        event.preventDefault();
        let appearance = $("#appearance").val();
        let previewState = $("#previews").val();
        console.log($("#theme").val());

        if ("auto" === appearance) {
            $("html").attr("data-theme", "");
        } else {
            $("html").attr("data-theme", appearance);
        }
        isWithPreviews = ("active" === previewState);
    });

    /*const btn = document.querySelector("#theme-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
        document.body.classList.toggle("light-theme");
    }

    btn.addEventListener("click", function () {
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            var theme = document.body.classList.contains("light-theme")
                ? "light"
                : "dark";
        } else {
            document.body.classList.toggle("dark-theme");
            var theme = document.body.classList.contains("dark-theme")
                ? "dark"
                : "light";
        }
        localStorage.setItem("theme", theme);
    });*/

    // Internal links
    $(".internalLink").mouseenter(function () {
        if (isWithPreviews) {
            getPost($(this).attr("aria-label"));
            setPopupPosition($(this), true);
            $("#internalPopup").show();
            currentInternalLink = $(this);
        }
    }).append(` ${iconInternalLinks}`);
    $("#internalPopup").mouseenter(function () {
        setPopupPosition(currentInternalLink, true);
        $($(this)).show();
    });
    $(".internalLink, #internalPopup").mouseleave(function () {
        $("#internalPopup").hide();
    });


    // External links
    $(".externalLink").mouseenter(function () {
        if (isWithPreviews) {
            $("#externalPopup iframe").attr('src', $(this).attr("aria-label"));
            setPopupPosition($(this), false);
            $("#externalPopup").show();
            currentExternalLink = $(this);
        }
    }).append(` ${iconExternalLinks}`);
    $("#externalPopup").mouseenter(function () {
        setPopupPosition(currentExternalLink, false);
        $($(this)).show();
    });
    $(".externalLink, #externalPopup").mouseleave(function () {
        $("#externalPopup").hide();
    });

    function setPopupPosition(link, isInternal) {
        const viewportHeight = $(window).height();
        const viewportWidth = $(window).width();
        let top = link.position().top;
        let left = link.offset().left;
        const right = link.offset().left + link.width();
        const id = isInternal ? "#internalPopup" : "#externalPopup";
        $(id).css("top", top + 300 >= viewportHeight - 20 ? top - 280 : top)
            .css("left", left + 400 >= viewportWidth - 20 ? left - 400 : right);
    }

    function getPost(postName) {
        $.ajax({
            url: `../retrieve_post.php`,
            type: 'POST',
            data: $.param({"blogPost": postName}),
            success: function (response) {
                $("#internalPopup").html(response.content);
                $("#internalPopup * .externalLink").append(` ${iconExternalLinks}`);
                $("#internalPopup * .internalLink").append(` ${iconInternalLinks}`);
            },
            error: function () {
                $("#internalPopup").html("<h1>An error occurred!</h1>");
            }
        });
    }
});
