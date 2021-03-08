var month = parseInt(prompt("What Month?"));
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayStartsat = parseInt(prompt("What Day will the month start?"));
var tbody = document.getElementById("dateRow");
var daybegins = 1;
var check = 0;
let max31=[1,3,5,7,8,10,12];
let max30=[4,6,9,11];
let max28=[2];

var end = true;
if(month<=12 && dayStartsat<=7 && month>0 && dayStartsat>0){
    var m=document.getElementById("month");
    var theMonth=document.createTextNode(months[month-1]);
    m.appendChild(theMonth);   
    while(end){
        var tr=document.createElement("tr");
        tr.setAttribute("id", "bordered");
        for(var i=1; i<=7; i++){ 
            if(i==dayStartsat){ 
                if(check==1){ 
                    var td=document.createElement("td");
                    td.setAttribute("id", "bordered");
                    var create=document.createTextNode(daybegins);
                    td.appendChild(create);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if(i==1){
                        td.className="red";
                    }
                    daybegins++;
                }
                else{ 
                    var td=document.createElement("td");
                    td.setAttribute("id", "bordered");
                    var create=document.createTextNode(daybegins);
                    td.appendChild(create);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if(i==1){ 
                        td.className="red";
                    }
                    daybegins++;
                    check=1; 
                }
            }
            else{
                if(check==1){ 
                    if(daybegins>=32 && (max31.includes(parseInt(month)))){ 
                        end=false;
                        break;
                    }
                    else if(daybegins>=31 && (max30.includes(parseInt(month)))){
                        end=false;
                        break;
                    }
                    else if(daybegins>=28 && (max28.includes(parseInt(month)))){
                        var td=document.createElement("td");
                        td.setAttribute("id", "bordered");
                        var create=document.createTextNode('28');
                        td.appendChild(create);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                        if(i==1){ 
                            td.className="red";
                        }
                        end=false;
                        break;
                    }
                    else{
                        var td=document.createElement("td");
                        td.setAttribute("id", "bordered");
                        var create=document.createTextNode(daybegins);
                        td.appendChild(create);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                        if(i==1){
                            td.className="red";
                        }
                        daybegins++;
                    }
                }
                else{ 
                    var td=document.createElement("td");
                    var create=document.createTextNode('');
                    td.appendChild(create);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if(i==1){
                        td.className="red";
                    }
                }
            }
        }
    }
}
else{
    var h = document.getElementById("invalid");
    var htxt = document.createTextNode("Invalid Input");
    h.appendChild(htxt);
}