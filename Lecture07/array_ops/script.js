window.onload = function () {
    let amounts = document.getElementById('amounts')
    let calc = document.getElementById('calc')
    let rms = document.getElementById('rms')

    calc.onclick = function () {
        rms.innerText = Math.sqrt(
            amounts.value.split(',')
            .map(v => Math.pow(+v.trim(), 2))
            .reduce(((a,v,i,ar) => a + (v/ar.length)), 0)
        )

        
    }
}