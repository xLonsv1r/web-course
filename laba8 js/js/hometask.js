

var exhibitions = [];

exhibitions[0] = {  
    theme:"Cats",
    place:"A",
    organizer:"Cats lovers",
    Data: "2.11.2020"
}
exhibitions[1] = {  
    theme:"Dogs",
    place:"B",
    organizer:"Dogs lovers",
    Data: "31.10.2020"
}
exhibitions[2] = {  
    theme:"Rats",
    place:"C",
    organizer:"",
    Data: "3.11.2020"
}
exhibitions[3] = {  
    theme:"Rats",
    place:"C",
    organizer:"",
    Data: "5.10.2020"
}
exhibitions[4] = {  
    theme:"test",
    place:"d",
    organizer:"",
    Data: "29.10.2020"
}

var html = " ";
function daysDifference(text){

    var currentDate = new Date();
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    return {'daysDiff':daysDiff,'date1':date1};
}
function daysUntilStart(text){

    var currentDate = new Date();
    var exhibitionDates = daysDifference(text);
  
    var date1 = exhibitionDates['date1'];
    var daysDiff = exhibitionDates['daysDiff'];
    var exhibitionPassed = -1;

    var isInThisMonthAndPassed = currentDate.getMonth() == date1.getMonth() && (7 - daysDiff) < 0;
    var isInNextMonthAndPassed = currentDate.getMonth() > date1.getMonth() && (7 - daysDiff) < 0;

    if(isInNextMonthAndPassed || isInThisMonthAndPassed){
        return exhibitionPassed;
    }
    else{
        return Math.abs(daysDiff);
    }
    
}
function dayUntilEnd(text){
    var currentDate = new Date();
    var exhibitionDates = daysDifference(text);
  
    var date1 = exhibitionDates['date1'];
    var daysDiff = exhibitionDates['daysDiff'];
    var exhibitionPassed = -1;

    var isInThisMonthAndPassed = currentDate.getMonth() == date1.getMonth() && (7 - daysDiff) < 0;
    var isInNextMonthAndPassed = currentDate.getMonth() > date1.getMonth() && (7 - daysDiff) < 0;

    if(isInNextMonthAndPassed || isInThisMonthAndPassed){
        return exhibitionPassed;
    }
    else{
        return Math.abs(7+daysDiff);
    }
}
function vivod(item){
    var  textDate = item['Data'];
    var exebitionStart = daysUntilStart(textDate);
    var exebitionEnd = dayUntilEnd(textDate);
    var noNameOrg = "No name";
    if(exebitionStart >=0){
        if(exebitionStart==0){
            html = html + "<tr style='background:green;'>";
        }
        else{
            html = html + "<tr>";
        }
        for(var key in item){
            if (item['organizer'] == '' && key == 'organizer'){
                html = html + "<td>"+noNameOrg + "</td>";
            }
            else{
                html = html + "<td>"+item[key] + "</td>";
            }
        }
        if(exebitionStart==0){
            html = html + "<td>"+ "Today" + "</td>";
        }
        else{
            html = html + "<td>"+ exebitionStart + "</td>";
        }
        html = html + "<td>"+ exebitionEnd + "</td>";
        html = html + "</tr>";
            
        
        
    }

}
function ras(){
    html = "<table style='b-table'>";
    html = html + "<tr><td>Theme</td>" + " <td>place</td><td>Org name:</td><td>Date</td><td>Start</td><td>Stop</td></tr>";
    exhibitions.forEach(vivod);
    html = html + '</table>';
    document.getElementById('res').innerHTML = html;
}