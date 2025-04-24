let COMMON_HEAD;
console.log("baseURL", CURR_BASE_DIR);

let COMMON_HEAD_ELEMENTS = [
    `<meta charSet="UTF-8"/>`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`,
    `<title>Stock Flow</title>`,
    //Bootstrap
    `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>`,
    //Alpine
    `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>`,
    //Sliders
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>`,
    `<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>`,
    `<script src="//cdn.jsdelivr.net/npm/eruda"></script>`,
    `<script>eruda.init();</script>`,
    
    `<link rel="manifest"   href="${CURR_BASE_DIR}manifest.json"/>`,
    `<link rel="stylesheet" href="${CURR_BASE_DIR}app/styles.css"/>`,
    `<link rel="icon"       href="${CURR_BASE_DIR}favicon.ico"/>`,
    `<script defer src="${CURR_BASE_DIR}app/script.js"></script>`,
    `<script defer src="${CURR_BASE_DIR}app.js" type="text/javascript"></script>`,
];

COMMON_HEAD_ELEMENTS.forEach(element => {
    COMMON_HEAD += element;
});

document.head.innerHTML = COMMON_HEAD + document.head.innerHTML; 