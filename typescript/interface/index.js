function createSquare(config) {
    var newSquare = { color: "white", areaq: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.areaq = config.width * config.width;
    }
    return newSquare;
}
