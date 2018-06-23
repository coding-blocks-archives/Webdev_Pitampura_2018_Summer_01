window.onload = function () {
    let list = document.getElementById('list')
    let btnstart = document.getElementById('btnstart')
    let num = document.getElementById('num')

    // btnstart.onclick = function () {
    //     let start = new Date().getTime()

    //     let N = parseInt(num.value)
    //     let listContent = ""
    //     for (let i = 1; i <= N; i++) {
    //         let print = ""
    //         if (i % 3 == 0) print += "fizz"
    //         if (i % 5 == 0) print += "buzz"
    //         if (print == "") print = i

    //         listContent += `<li>${print}</li>`
    //     }
    //     list.innerHTML = listContent

    //     console.log(new Date().getTime() - start)
    // }
    btnstart.onclick = function () {
        let start = new Date().getTime()

        let N = parseInt(num.value)
        
        for (let i = 1; i <= N; i++) {
            let print = ""
            if (i % 3 == 0) print += "fizz"
            if (i % 5 == 0) print += "buzz"
            if (print == "") print = i
            
            let item = document.createElement('li')
            item.innerText = print
            
            list.appendChild(item)
        }

        console.log(new Date().getTime() - start)
    }
}