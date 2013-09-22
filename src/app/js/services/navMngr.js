
function setNavButtons(prop){
//    alert("setNavButtons PLUGIN_TYPE:\n<br> " + PLUGIN_TYPE );

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
