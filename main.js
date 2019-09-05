var mario = new Vue({
    el: '#app',
    data: {
            symbols: ['#','@','$','X'],
            symbol: '#',
            height: 1,
    },
    computed: {
        rows: function() {
            return pyramidRows(this.height, this.symbol)
        },
    },
    methods: {
        slideValue() {
            return this.height
        }
    },
});

function pyramidRows(height, symbol) {

    let rowStrings = []

    for (let row = 0; row < height; row++) {

        let numBricks = row + 2
        let numSpaces = height - row - 1

        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp;"
            rowStr += spaceChar
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += symbol
        }

        rowStrings.push(rowStr)
    }
    return rowStrings
}
