function costFunc(){
    event.preventDefault();

    var start = new Date().toISOString().slice(0, 10)
    var end= document.getElementById("date").value;
    var diffInMs   = new Date(end) - new Date(start)
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays < 7){
        document.getElementById('price').innerHTML = "$8.95";
        var estimated = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
        document.getElementById('eta').innerHTML = new Date(estimated).toJSON().slice(0,10);
    }
    else {
        document.getElementById('price').innerHTML = "$6.95";
        var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
        document.getElementById('eta').innerHTML = new Date(estimated).toJSON().slice(0,10);
    }
}