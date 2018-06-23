let o = {
    a: 10,
    g: {
        a: 20,
        b: function () {
            console.log(this.a)
        }
    }
}

