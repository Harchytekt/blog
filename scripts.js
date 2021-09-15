$(document).ready(function () {
    let currentInternalLink;
    $(".internalLink").mouseenter(function () {
        getPost($(this).attr("aria-label"));
        setPopupPosition($(this), true);
        $("#internalPopup").show();
        currentInternalLink = $(this);
    }).append(` ${iconInternalLinks}`);
    $("#internalPopup").mouseenter(function () {
        setPopupPosition(currentInternalLink, true);
        $($(this)).show();
    });
    $(".internalLink, #internalPopup").mouseleave(function () {
        $("#internalPopup").hide();
    });

    let currentExternalLink;
    $(".externalLink").mouseenter(function () {
        $("#externalPopup iframe").attr('src', $(this).attr("aria-label"));
        setPopupPosition($(this), false);
        $("#externalPopup").show();
        currentExternalLink = $(this);
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
