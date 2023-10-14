$(document).ready(function () {
    let appearance = (localStorage.getItem('appearance') !== null) ? localStorage.getItem("appearance") : "auto";
    let theme = (localStorage.getItem('theme') !== null) ? localStorage.getItem("theme") : "default";
    let isWithPreviews = (localStorage.getItem('previewState') !== null) ? (localStorage.getItem("previewState") === 'true') : true;
    let isSearchOpen = false;
    let isSettingsOpen = false;

    let currentInternalLink;
    let currentExternalLink;

    $(`#appearance option[value="${appearance}"]`).attr("selected", "selected").change();
    $(`#theme option[value="${theme}"]`).attr("selected", "selected").change();
    $(`#previews option[value="${isWithPreviews}"]`).attr("selected", "selected").change();
    setSelects();

    if ("auto" === appearance) {
        $("html").attr("data-theme", "");
    } else {
        $("html").attr("data-theme", appearance);
    }

    $("#search").click(function () {
        toggleSearchInput();
    });
    $("#settings").click(function () {
        toggleSettings();
    });

    $(document).on('keydown', function (e) {
        if ('f' === e.key && !isSearchOpen) {
            toggleSearchInput();
        } else if ('r' === e.key && !isSettingsOpen) {
            toggleSettings();
        } else if ('Escape' === e.key) {
            if (isSearchOpen) {
                e.preventDefault();
                toggleSearchInput();
            } else if (isSettingsOpen) {
                e.preventDefault();
                toggleSettings();
            }
        }
    });

    function toggleSearchInput() {
        setPopupPosition($("#search"), -2);
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            isSettingsOpen = false;
            $("#searchPopup").show();
            $("#searchField").focus();
            $("#settingsPopup").hide();

            setTimeout(function () {
                $("#searchField").val("");
            }, 50);
        } else {
            $("#searchPopup").hide();
        }
    }

    function toggleSettings() {
        setPopupPosition($("#settings"), -1);

        isSettingsOpen = !isSettingsOpen;
        if (isSettingsOpen) {
            isSearchOpen = false;
            $("#settingsPopup").show();
            $("#searchPopup").hide();

            setTimeout(function () {
                $("#searchField").val("");
            }, 50);
        } else {
            $("#settingsPopup").hide();
        }
    }

    $("#save").click(function (event) {
        event.preventDefault();
        $("#settingsPopup").slideUp();
        let tmpAppearance = $("#appearance").val();
        let tmpTheme = $("#theme").val();
        let tmpPreview = $("#previews").val();

        if ("auto" === tmpAppearance) {
            $("html").attr("data-theme", "");
            localStorage.setItem("appearance", "auto");
        } else {
            $("html").attr("data-theme", tmpAppearance);
            localStorage.setItem("appearance", tmpAppearance);
        }

        localStorage.setItem("theme", tmpTheme);

        isWithPreviews = ("true" === tmpPreview);
        localStorage.setItem("previewState", tmpPreview);
    });

    // Internal links
    $(".internalLink").mouseenter(function () {
        if (isWithPreviews) {
            getPost($(this).attr("aria-label"));
            $("#internalPopup").addClass("withPreview")
                .removeClass("withoutPreview");
        } else {
            $("#internalPopup").addClass("withoutPreview")
                .removeClass("withPreview")
                .text(`${$(this).attr("aria-title")} (${$(this).parent().attr("href")})`);
            $("#internalPopup * .externalLink").append(` ${iconExternalLinks}`);
            $("#internalPopup * .internalLink").append(` ${iconInternalLinks}`);
        }
        setPopupPosition($(this), 1);
        $("#internalPopup").show();
        currentInternalLink = $(this);
    }).append(` ${iconInternalLinks}`);
    $("#internalPopup").mouseenter(function () {
        setPopupPosition(currentInternalLink, 1);
        $($(this)).show();
    });
    $(".internalLink, #internalPopup").mouseleave(function () {
        $("#internalPopup").hide();
    });


    // External links
    $(".externalLink").mouseenter(function () {
        if (isWithPreviews) {
            $("#externalPopup").addClass("withPreview")
                .removeClass("withoutPreview")
                .html(`<iframe src="${$(this).attr("aria-label")}"></iframe>`);
        } else {
            $("#externalPopup").addClass("withoutPreview")
                .removeClass("withPreview")
                .text($(this).attr("aria-label"));
        }
        setPopupPosition($(this), 0);
        $("#externalPopup").show();
        currentExternalLink = $(this);
    }).append(` ${iconExternalLinks}`);
    $("#externalPopup").mouseenter(function () {
        setPopupPosition(currentExternalLink, 0);
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
        if (isInternal >= 0) {
            let id;
            if (isInternal === 1) {
                id = "#internalPopup";
            } else if (isInternal === 0) {
                id = "#externalPopup";
            }
            let height = $(id).height();
            let width = $(id).width();
            $(id).css("top", top + height >= viewportHeight - 20 ? top - (height - 20) : top)
                .css("left", left + width >= viewportWidth - 20 ? left - (width - 20) : right);
        } else if (isInternal === -1) {
            $("#settingsPopup").css("top", top + 42)
                .css("left", left - 325);
        } else {
            $("#searchPopup").css("top", top + 47)
        }
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

function setSelects() {
    $('select').each(function () {
        let $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        let $styledSelect = $this.next('div.select-styled');
        let selectedOption = $(`#${$(this).attr('id')} option`).filter(':selected').text();
        $styledSelect.text(selectedOption);

        let $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (let i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        let $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });
}
