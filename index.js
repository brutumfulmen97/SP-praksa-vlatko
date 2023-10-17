const hamburger = document.querySelector(".header__nav-sm");

let menuToggle = false;

hamburger.addEventListener("click", () => {
    if (menuToggle) {
        hamburger.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    >
                        <title>hamburger</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs></defs>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                            sketch:type="MSPage"
                        >
                            <g
                                id="Icon-Set-Filled"
                                sketch:type="MSLayerGroup"
                                transform="translate(-212.000000, -888.000000)"
                                fill="#000000"
                            >
                                <path
                                    d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z"
                                    id="hamburger"
                                    sketch:type="MSShapeGroup"
                                ></path>
                            </g>
                        </g>
                    </svg>`;
        menuToggle = false;
    } else {
        hamburger.innerHTML += `
                        <div class="mobile-menu">
                            <a href="#">Die Metzgerei</a>
                            <a href="#">Dry Aged</a>
                            <a href="#">Fleischversand</a>
                            <a href="#">Events/Kurse</a>
                            <a href="#">Partyservice</a>
                            <a href="#">Tagesessen</a>
                            <a href="#">Impressum</a>
                            <a href="#">Kontakt</a>
                        </div>
        `;
        menuToggle = true;
    }
});
