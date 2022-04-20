function costFunc(){
    event.preventDefault();

    var start = new Date().toISOString().slice(0, 10)
    var end= document.getElementById("date").value;
    var diffInMs   = new Date(end) - new Date(start)
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    var from = document.getElementById("from_loc").value;
    var to = document.getElementById("to_loc").value;
    var from = document.getElementById("date").value;
    var excost = document.getElementById('length').value * document.getElementById('width').value * document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if(from != "" && to != "" & date != "") {
        if (diffInDays < 7){
            if (weight < 10){
                var cost1 = excost + weight * 1.5;
                var ncost1 = cost1 + 8.95;
                var pcost1 = cost1 + 10.95;
                var cost2 = excost + weight * 1.5;
                var ncost2 = cost2 + 6.75;
                var pcost2 = cost2 + 9.25;
                var cost3 = excost + weight * 1.5;
                var ncost3 = cost3 + 7.25;
                var pcost3 = cost3 + 11.75;
                document.getElementById('uspsprioritycost').innerHTML = "$" + ncost1;
                document.getElementById('uspspriorityexpresscost').innerHTML = "$" + pcost1;
                document.getElementById('fedxprioritycost').innerHTML = "$" + ncost2;
                document.getElementById('fedxpriorityexpresscost').innerHTML = "$" + pcost2;
                document.getElementById('upsprioritycost').innerHTML = "$" + ncost3;
                document.getElementById('upspriorityexpresscost').innerHTML = "$" + pcost3;
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("sort").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
            }
            else if (weight >= 10 & weight < 25){
                var cost1 = excost + weight * 2.5;
                var ncost1 = cost1 + 8.95;
                var pcost1 = cost1 + 10.95;
                var cost2 = excost + weight * 2.5;
                var ncost2 = cost2 + 6.75;
                var pcost2 = cost2 + 9.25;
                var cost3 = excost + weight * 2.5;
                var ncost3 = cost3 + 7.25;
                var pcost3 = cost3 + 11.75;
                document.getElementById('uspsprioritycost').innerHTML = "$" + ncost1;
                document.getElementById('uspspriorityexpresscost').innerHTML = "$" + pcost1;
                document.getElementById('fedxprioritycost').innerHTML = "$" + ncost2;
                document.getElementById('fedxpriorityexpresscost').innerHTML = "$" + pcost2;
                document.getElementById('upsprioritycost').innerHTML = "$" + ncost3;
                document.getElementById('upspriorityexpresscost').innerHTML = "$" + pcost3;
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("sort").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
            }
            else {
                var cost1 = excost + weight * 5;
                var ncost1 = cost1 + 8.95;
                var pcost1 = cost1 + 10.95;
                var cost2 = excost + weight * 5;
                var ncost2 = cost2 + 6.75;
                var pcost2 = cost2 + 9.25;
                var cost3 = excost + weight * 5;
                var ncost3 = cost3 + 7.25;
                var pcost3 = cost3 + 11.75;
                document.getElementById('uspsprioritycost').innerHTML = "$" + ncost1;
                document.getElementById('uspspriorityexpresscost').innerHTML = "$" + pcost1;
                document.getElementById('fedxprioritycost').innerHTML = "$" + ncost2;
                document.getElementById('fedxpriorityexpresscost').innerHTML = "$" + pcost2;
                document.getElementById('upsprioritycost').innerHTML = "$" + ncost3;
                document.getElementById('upspriorityexpresscost').innerHTML = "$" + pcost3;
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("sort").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
             
            }
        }
        else {
            if (weight < 10){
                var cost1 = excost + weight * 1;
                var ncost1 = cost1 + 6.95;
                var pcost1 = cost1 + 8.95;
                var cost2 = excost + weight * 1;
                var ncost2 = cost2 + 4.75;
                var pcost2 = cost2 + 6.25;
                var cost3 = excost + weight * 1;
                var ncost3 = cost3 + 5.25;
                var pcost3 = cost3 + 8.75;
                document.getElementById('uspsprioritycost').innerHTML = "$" + ncost1;
                document.getElementById('uspspriorityexpresscost').innerHTML = "$" + pcost1;
                document.getElementById('fedxprioritycost').innerHTML = "$" + ncost2;
                document.getElementById('fedxpriorityexpresscost').innerHTML = "$" + pcost2;
                document.getElementById('upsprioritycost').innerHTML = "$" + ncost3;
                document.getElementById('upspriorityexpresscost').innerHTML = "$" + pcost3;
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("sort").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
            }
            else if (weight >= 10 & weight < 25){
                var cost1 = excost + weight * 2;
                var ncost1 = cost1 + 6.95;
                var pcost1 = cost1 + 8.95;
                var cost2 = excost + weight * 2;
                var ncost2 = cost2 + 4.75;
                var pcost2 = cost2 + 6.25;
                var cost3 = excost + weight * 2;
                var ncost3 = cost3 + 5.25;
                var pcost3 = cost3 + 8.75;
                document.getElementById('uspsprioritycost').innerHTML = "$" + ncost1;
                document.getElementById('uspspriorityexpresscost').innerHTML = "$" + pcost1;
                document.getElementById('fedxprioritycost').innerHTML = "$" + ncost2;
                document.getElementById('fedxpriorityexpresscost').innerHTML = "$" + pcost2;
                document.getElementById('upsprioritycost').innerHTML = "$" + ncost3;
                document.getElementById('upspriorityexpresscost').innerHTML = "$" + pcost3;
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("sort").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
            }
            else {
                var cost1 = excost + weight * 3;
                var ncost1 = cost1 + 6.95;
                var pcost1 = cost1 + 8.95;
                var cost2 = excost + weight * 3;
                var ncost2 = cost2 + 4.75;
                var pcost2 = cost2 + 6.25;
                var cost3 = excost + weight * 3;
                var ncost3 = cost3 + 5.25;
                var pcost3 = cost3 + 8.75;
                document.getElementById('uspsprioritycost').innerHTML = "$" + ncost1;
                document.getElementById('uspspriorityexpresscost').innerHTML = "$" + pcost1;
                document.getElementById('fedxprioritycost').innerHTML = "$" + ncost2;
                document.getElementById('fedxpriorityexpresscost').innerHTML = "$" + pcost2;
                document.getElementById('upsprioritycost').innerHTML = "$" + ncost3;
                document.getElementById('upspriorityexpresscost').innerHTML = "$" + pcost3;
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("sort").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
            }

        }
    }
}  
