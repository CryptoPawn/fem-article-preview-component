const share_container = ".share-container-desktop";
const share_container_mobile = ".share-container-mobile";
const share_button = ".share-button";
const icon_active = "icon-active";

const visibility = "visibility"
const show = "visible";
const hide = "hidden";

$(document).ready(function() {
    visible = false;
    $(share_button).on("click", function() {
        if ($(window).width() > 880) {
            if (visible === false) {
                $(share_container).css(visibility, show);
                $(share_button).addClass(icon_active);
                visible = true;
            } else {
                $(share_container).css(visibility, hide);
                $(share_button).removeClass(icon_active);
                visible = false;
            };
        } else {
            if (visible === false) {
                $(share_container_mobile).css(visibility, show);
                $(share_button).addClass(icon_active);
                visible = true;
            } else {
                $(share_container_mobile).css(visibility, hide);
                $(share_button).removeClass(icon_active);
                visible = false;
            };
        };
    });
});