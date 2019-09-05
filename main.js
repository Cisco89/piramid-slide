var mario = new Vue({
    el: '#app',
    data: {
            symbols: ['#','@','$','X'],
            symbol: "#",
            height: 1,
        
    },
    computed: {
        rows: function() {
            return pyramidRows(this.height, this.symbol)
        }
    },
    methods: {
        slideValue() {
            return this.height
        }
    },
});

function pyramidRows(height, symbol) {

    var rowStrings = []

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2
        var numSpaces = height - row - 1

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"
            rowStr += spaceChar
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol
        }

        rowStrings.push(rowStr)
    }
    return rowStrings
}