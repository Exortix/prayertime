var myArray = []

$.ajax({
    method:'GET',
    url:'http://api.aladhan.com/v1/timingsByCity?city=Muharaq&country=Bahrains&method=8',
    success:function (response) {
        myArray = response.data
        buildTable(myArray)
        console.log(myArray)
    }
})



function buildTable(data){
    var table = document.getElementById('myTable')
    var footer = document.getElementById('footer')
    var date = document.getElementById('date')

    footer.innerHTML = `<text>${data.date.gregorian.weekday.en} ${data.date.gregorian.date}</text>`;
    date.innerHTML = `<text>${data.date.gregorian.weekday.en} ${data.date.gregorian.date}</text>`;

    for (var i = 0; i < Object.keys(data.timings).length; i++){
        var row = `<tr id = ${Object.keys(data.timings)[i]}>
                        <td>${Object.keys(data.timings)[i]}</td>
                        <td>${Object.values(data.timings)[i]}</td>
                </tr>`
        table.innerHTML += row
    }
}