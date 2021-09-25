$(document).ready(function () {
    let appearance = (localStorage.getItem('appearance') !== null) ? localStorage.getItem("appearance") : "auto";
    let theme = (localStorage.getItem('theme') !== null) ? localStorage.getItem("theme") : "1";
    let isWithPreviews = (localStorage.getItem('previewState') !== null) ? (localStorage.getItem("previewState") === 'true') : true;

    let currentInternalLink;
    let currentExternalLink;

    $(`#appearance option[value="${appearance}"]`).attr("selected", "selected").change();
    //$("#theme option[value="${theme}"]`).attr("selected", "selected").change();
    $(`#previews option[value="${isWithPreviews}"]`).attr("selected", "selected").change();
    setSelects();

    if ("auto" === appearance) {
        $("html").attr("data-theme", "");
    } else {
        $("html").attr("data-theme", appearance);
    }

    $("#save").click(function (event) {
        event.preventDefault();
        let tmpAppearance = $("#appearance").val();
        let previewState = $("#previews").val();
        console.log($("#theme").val());

        if ("auto" === tmpAppearance) {
            $("html").attr("data-theme", "");
            localStorage.setItem("appearance", "auto");
        } else {
            $("html").attr("data-theme", tmpAppearance);
            localStorage.setItem("appearance", tmpAppearance);
        }
        isWithPreviews = ("true" === previewState);
        localStorage.setItem("previewState", previewState);
    });

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
