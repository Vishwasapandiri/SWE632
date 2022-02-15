function costFunc(){
    event.preventDefault();

    var start = new Date().toISOString().slice(0, 10)
    var end= document.getElementById("date").value;
    var diffInMs   = new Date(end) - new Date(start)
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    var from = document.getElementById("from_loc").value;
    var to = document.getElementById("to_loc").value;
    var from = document.getElementById("date").value;

    if(from != "" && to != "" & date != "") {
        if (diffInDays < 7){
            document.getElementById('uspsprioritycost').innerHTML = "$8.95";
            document.getElementById('uspspriorityexpresscost').innerHTML = "$10.95";
            var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
            var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
            document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
            document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
            document.getElementById("cost-tables").classList.remove('hide');
        }
        else {
            document.getElementById('uspsprioritycost').innerHTML = "$6.95";
            document.getElementById('uspspriorityexpresscost').innerHTML = "$8.95";
            var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
            var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
            document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
            document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
            document.getElementById("cost-tables").classList.remove('hide');
        }
    }
}