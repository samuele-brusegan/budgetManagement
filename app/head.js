const head = document.head
console.log(head)
head.innerHTML = '<meta charset="UTF-8">\n' +
    '        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '        <title>Budget Management</title>\n' +
    '        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">\n' +
    '        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>\n' +
    '        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>\n' +
    '        <link rel="manifest" href="../manifest.json" />\n' +
    '        <link rel="stylesheet" href="styles.css">\n' +
    '        <link rel="icon" href="../favicon.ico">';