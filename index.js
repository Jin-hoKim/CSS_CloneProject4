const recipe_like = document.querySelector("#btnLike");

function doLike(event) {
    recipe_like.querySelector("i").classList.toggle("recipe__likeit");
    console.log('doLike');


    // recipe_like.styles.fontWeight = "800";
}

function init() {
    recipe_like.addEventListener("dblclick", doLike);
}

init();