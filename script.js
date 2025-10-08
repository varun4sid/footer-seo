const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
    const anchors = category.querySelectorAll("a");
    anchors.forEach((anchor, index) => {
        if ( index < anchors.length -1 ) {
            const divider = document.createElement("span");
            divider.innerHTML = " | ";
            anchor.insertAdjacentElement("afterend",divider);
        }
    })
})