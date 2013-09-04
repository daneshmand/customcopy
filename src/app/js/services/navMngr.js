
function setNavButtons(prop){
    prop.nav_buttons = getLinkHtmlTemplate("startProcess(Properties)");
    return prop;
}
//<a href="JavaScript:void(0);" ondblclick="alert('Well done!')">Double Click Me!</a>
function setNavButtonsForError(prop){
    prop.nav_buttons = getLinkHtmlTemplate("");
    return prop;
}

function setNavButtonsForDisable(prop){
    prop.nav_buttons = getLinkHtmlTemplate("");
    return prop;
}
