  var events_arr;

  function getEventsFromDB(path, callback)
  {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function ()
      {
          if (request.readyState === XMLHttpRequest.DONE)
          {
              if (request.status === 200)
              {
                  //console.log(request.responseText); //DEBUGGING
                  //alert(request.responseText); //DEBUGGING
                  events_arr = JSON.parse(request.responseText);
                  callback();
              } else {

              }
          }
      };

      request.open("GET", path, true);
      request.send();
      return request.onreadystatechange();
  }
  //Call script
  getEventsFromDB('php/getEventsFromDB.php', function printResults()
      {
            console.log(events_arr); //DEBUGGING
            console.log(events_arr[0]); //DEBUGGING
            console.log(events_arr[1]); //DEBUGGING
            console.log(events_arr[1][1]);
      });


function showAllEvents(){
  for(var i=0;i<48;i++){
    //var ev_name = events_arr[i][1];
    $("#All_Events_Show").append("<button id='allevent"+i+"_' class='allevent_butt' onclick='ev_table_create("+i+")'>"+"Insert Event "+i+" Name"+"</button>");
  }
}

function ev_table_create(num){
  $("#Event_Info").html("It works for "+num+".");
}



function getData(form)
{
  let name = form.review_admin_name.value;
  let ev_name = form.review_event_name.value;
  let ev_date = "";
  let check = false;
  let row_num = 0;
  if(name=="" || ev_name=="")
  {
    form.reset();
    alert("All fields are mandatory!");
  }
  else
  {
    for(let i=0; i<events_arr.length; i++)
    {
      if(name == events_arr[i][1] && ev_name == events_arr[i][2])
      {
        row_num = i;
        check = true;
      }
    }
    if(!check)
    {
      form.reset();
      $("#event_review").empty();
      $("#review_table_12").empty();
      $("#review_table_24").empty();
      alert("Could not find event and/or name. Please verify input is valid");
    }
    else
    {
      form.reset();
      ev_date = events_arr[row_num][3];
      $("#event_review").append("Event: "+ev_name+"<br><br>");
      $("#event_review").append("Organizer: "+name+"<br><br>");
      $("#event_review").append("Date: "+ev_date+"<br><br>");
      $("#12_review").show();
      $("#24_review").show();
      makeTable12(row_num);
      makeTable24(row_num);
      $("#review_table_24").hide();
    }
  }
}



//
// DOCUMENT READY FUNCTION IS ALL jquery REFERENCING THE JAVASCRIIPT FUNCTIONS ABOVE
//

$(document).ready(function(){
  $("#Info_Title").html("Events");

  showAllEvents();

  $("#Events_List").hide();

  $("#view_all").click(
    function(){
      $("#All_Events_Show").hide();
      $("#Events_List").show();
      $("#review_table_12").empty();
      $("#review_table_24").empty();
      makeTable12(48);
      makeTable24(48);
      $("#review_table_12").hide();
      $("#review_table_24").hide();

    }
  );

  $("#time_select_12").click(
    function(){
      $("#review_table_12").show();
      $("#review_table_24").hide();
    }
  );
  $("#time_select_24").click(
    function(){
      $("#review_table_12").hide();
      $("#review_table_24").show();
    }
  )

  function makeTable12(n)
  {
    $("#review_table_12").html(
      "<center>Event Schedule</center><br>"+
      "<table id='rev_table'>"+
      "<tr>"+
      "<td><p id = '1200am'>12:00am</p></td>"+"<td><p id = '1230am'>12:30am</p></td>"+"<td><p id = '100am'>1:00am</p></td>"+"<td><p id = '130am'>1:30am</p></td>"+"<td><p id = '200am'>2:00am</p></td>"+"<td><p id = '230am'>2:30am</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '300am'>3:00am</p></td>"+"<td><p id = '330am'>3:30am</p></td>"+"<td><p id = '400am'>4:00am</p></td>"+"<td><p id = '430am'>4:30am</p></td>"+"<td><p id = '500am'>5:00am</p></td>"+"<td><p id = '530am'>5:30am</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '600am'>6:00am</p></td>"+"<td><p id = '630am'>6:30am</p></td>"+"<td><p id = '700am'>7:00am</p></td>"+"<td><p id = '730am'>7:30am</p></td>"+"<td><p id = '800am'>8:00am</p></td>"+"<td><p id = '830am'>8:30am</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '900am'>9:00am</p></td>"+"<td><p id = '930am'>9:30am</p></td>"+"<td><p id = '1000am'>10:00am</p></td>"+"<td><p id = '1030am'>10:30am</p></td>"+"<td><p id = '1100am'>11:00am</p></td>"+"<td><p id = '1130am'>11:30am</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '1200pm'>12:00pm</p></td>"+"<td><p id = '1230pm'>12:30pm</p></td>"+"<td><p id = '100pm'>1:00pm</p></td>"+"<td><p id = '130pm'>1:30pm</p></td>"+"<td><p id = '200pm'>2:00pm</p></td>"+"<td><p id = '230pm'>2:30pm</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '300pm'>3:00pm</p></td>"+"<td><p id = '330pm'>3:30pm</p></td>"+"<td><p id = '400pm'>4:00pm</p></td>"+"<td><p id = '430pm'>4:30pm</p></td>"+"<td><p id = '500pm'>5:00pm</p></td>"+"<td><p id = '530pm'>5:30pm</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '600pm'>6:00pm</p></td>"+"<td><p id = '630pm'>6:30pm</p></td>"+"<td><p id = '700pm'>7:00pm</p></td>"+"<td><p id = '730pm'>7:30pm</p></td>"+"<td><p id = '800pm'>8:00pm</p></td>"+"<td><p id = '830pm'>8:30pm</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '900pm'>9:00pm</p></td>"+"<td><p id = '930pm'>9:30pm</p></td>"+"<td><p id = '1000pm'>10:00pm</p></td>"+"<td><p id = '1030pm'>10:30pm</p></td>"+"<td><p id = '1100pm'>11:00pm</p></td>"+"<td><p id = '1130pm'>11:30pm</p></td>"+
      "</tr>"+
      "</table>"
    );

    for(let i=4; i<52; i++)
    {
      let att = events_arr[n][i];
      console.log(att);
      switch(i)
      {
        case 4:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1200am").append("<br>Attendees: "+att); $("#1200am").css("background-color","#80C468");}
          break;
        case 5:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1230am").append("<br>Attendees: "+att); $("#1230am").css("background-color","#80C468");}
          break;
        case 6:
          if(att != "0"){att=att.substring(0, att.length-1); $("#100am").append("<br>Attendees: "+att); $("#100am").css("background-color","#80C468");}
          break;
        case 7:
          if(att != "0"){att=att.substring(0, att.length-1); $("#130am").append("<br>Attendees: "+att); $("#130am").css("background-color","#80C468");}
          break;
        case 8:
          if(att != "0"){att=att.substring(0, att.length-1); $("#200am").append("<br>Attendees: "+att); $("#200am").css("background-color","#80C468");}
          break;
        case 9:
          if(att != "0"){att=att.substring(0, att.length-1); $("#230am").append("<br>Attendees: "+att); $("#230am").css("background-color","#80C468");}
          break;
        case 10:
          if(att != "0"){att=att.substring(0, att.length-1); $("#300am").append("<br>Attendees: "+att); $("#300am").css("background-color","#80C468");}
          break;
        case 11:
          if(att != "0"){att=att.substring(0, att.length-1); $("#330am").append("<br>Attendees: "+att); $("#330am").css("background-color","#80C468");}
          break;
        case 12:
          if(att != "0"){att=att.substring(0, att.length-1); $("#400am").append("<br>Attendees: "+att); $("#400am").css("background-color","#80C468");}
          break;
        case 13:
          if(att != "0"){att=att.substring(0, att.length-1); $("#430am").append("<br>Attendees: "+att); $("#430am").css("background-color","#80C468");}
          break;
        case 14:
          if(att != "0"){att=att.substring(0, att.length-1); $("#500am").append("<br>Attendees: "+att); $("#500am").css("background-color","#80C468");}
          break;
        case 15:
          if(att != "0"){att=att.substring(0, att.length-1); $("#530am").append("<br>Attendees: "+att); $("#530am").css("background-color","#80C468");}
          break;
        case 16:
          if(att != "0"){att=att.substring(0, att.length-1); $("#600am").append("<br>Attendees: "+att); $("#600am").css("background-color","#80C468");}
          break;
        case 17:
          if(att != "0"){att=att.substring(0, att.length-1); $("#630am").append("<br>Attendees: "+att); $("#630am").css("background-color","#80C468");}
          break;
        case 18:
          if(att != "0"){att=att.substring(0, att.length-1); $("#700am").append("<br>Attendees: "+att); $("#700am").css("background-color","#80C468");}
          break;
        case 19:
          if(att != "0"){att=att.substring(0, att.length-1); $("#730am").append("<br>Attendees: "+att); $("#730am").css("background-color","#80C468");}
          break;
        case 20:
          if(att != "0"){att=att.substring(0, att.length-1); $("#800am").append("<br>Attendees: "+att); $("#800am").css("background-color","#80C468");}
          break;
        case 21:
          if(att != "0"){att=att.substring(0, att.length-1); $("#830am").append("<br>Attendees: "+att); $("#830am").css("background-color","#80C468");}
          break;
        case 22:
          if(att != "0"){att=att.substring(0, att.length-1); $("#900am").append("<br>Attendees: "+att); $("#900am").css("background-color","#80C468");}
          break;
        case 23:
          if(att != "0"){att=att.substring(0, att.length-1); $("#930am").append("<br>Attendees: "+att); $("#930am").css("background-color","#80C468");}
          break;
        case 24:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1000am").append("<br>Attendees: "+att); $("#1000am").css("background-color","#80C468");}
          break;
        case 25:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1030am").append("<br>Attendees: "+att); $("#1030am").css("background-color","#80C468");}
          break;
        case 26:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1100am").append("<br>Attendees: "+att); $("#1100am").css("background-color","#80C468");}
          break;
        case 27:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1130am").append("<br>Attendees: "+att); $("#1130am").css("background-color","#80C468");}
          break;
        case 28:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1200pm").append("<br>Attendees: "+att); $("#1200pm").css("background-color","#80C468");}
          break;
        case 29:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1230pm").append("<br>Attendees: "+att); $("#1230pm").css("background-color","#80C468");}
          break;
        case 30:
          if(att != "0"){att=att.substring(0, att.length-1); $("#100pm").append("<br>Attendees: "+att); $("#100pm").css("background-color","#80C468");}
          break;
        case 31:
          if(att != "0"){att=att.substring(0, att.length-1); $("#130pm").append("<br>Attendees: "+att); $("#130pm").css("background-color","#80C468");}
          break;
        case 32:
          if(att != "0"){att=att.substring(0, att.length-1); $("#200pm").append("<br>Attendees: "+att); $("#200pm").css("background-color","#80C468");}
          break;
        case 33:
          if(att != "0"){att=att.substring(0, att.length-1); $("#230pm").append("<br>Attendees: "+att); $("#230pm").css("background-color","#80C468");}
          break;
        case 34:
          if(att != "0"){att=att.substring(0, att.length-1); $("#300pm").append("<br>Attendees: "+att); $("#300pm").css("background-color","#80C468");}
          break;
        case 35:
          if(att != "0"){att=att.substring(0, att.length-1); $("#330pm").append("<br>Attendees: "+att); $("#330pm").css("background-color","#80C468");}
          break;
        case 36:
          if(att != "0"){att=att.substring(0, att.length-1); $("#400pm").append("<br>Attendees: "+att); $("#400pm").css("background-color","#80C468");}
          break;
        case 37:
          if(att != "0"){att=att.substring(0, att.length-1); $("#430pm").append("<br>Attendees: "+att); $("#430pm").css("background-color","#80C468");}
          break;
        case 38:
          if(att != "0"){att=att.substring(0, att.length-1); $("#500pm").append("<br>Attendees: "+att); $("#500pm").css("background-color","#80C468");}
          break;
        case 39:
          if(att != "0"){att=att.substring(0, att.length-1); $("#530pm").append("<br>Attendees: "+att); $("#530pm").css("background-color","#80C468");}
          break;
        case 40:
          if(att != "0"){att=att.substring(0, att.length-1); $("#600pm").append("<br>Attendees: "+att); $("#600pm").css("background-color","#80C468");}
          break;
        case 41:
          if(att != "0"){att=att.substring(0, att.length-1); $("#630pm").append("<br>Attendees: "+att); $("#630pm").css("background-color","#80C468");}
          break;
        case 42:
          if(att != "0"){att=att.substring(0, att.length-1); $("#700pm").append("<br>Attendees: "+att); $("#700pm").css("background-color","#80C468");}
          break;
        case 43:
          if(att != "0"){att=att.substring(0, att.length-1); $("#730pm").append("<br>Attendees: "+att); $("#730pm").css("background-color","#80C468");}
          break;
        case 44:
          if(att != "0"){att=att.substring(0, att.length-1); $("#800pm").append("<br>Attendees: "+att); $("#800pm").css("background-color","#80C468");}
          break;
        case 45:
          if(att != "0"){att=att.substring(0, att.length-1); $("#830pm").append("<br>Attendees: "+att); $("#830pm").css("background-color","#80C468");}
          break;
        case 46:
          if(att != "0"){att=att.substring(0, att.length-1); $("#900pm").append("<br>Attendees: "+att); $("#900pm").css("background-color","#80C468");}
          break;
        case 47:
          if(att != "0"){att=att.substring(0, att.length-1); $("#930pm").append("<br>Attendees: "+att); $("#930pm").css("background-color","#80C468");}
          break;
        case 48:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1000pm").append("<br>Attendees: "+att); $("#1000pm").css("background-color","#80C468");}
          break;
        case 49:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1030pm").append("<br>Attendees: "+att); $("#1030pm").css("background-color","#80C468");}
          break;
        case 50:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1100pm").append("<br>Attendees: "+att); $("#1100pm").css("background-color","#80C468");}
          break;
        case 51:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1130pm").append("<br>Attendees: "+att); $("#1130pm").css("background-color","#80C468");}
          break;
        default:
          break;
      }
    }
  }

  function makeTable24(n)
  {

    $("#review_table_24").html(
      "<center>Event Schedule</center><br>"+
      "<table id='rev_table'>"+
      "<tr>"+
      "<td><p id = '0000'>00:00</p></td>"+"<td><p id = '0030'>00:30</p></td>"+"<td><p id = '100'>1:00</p></td>"+"<td><p id = '130'>1:30</p></td>"+"<td><p id = '200'>2:00</p></td>"+"<td><p id = '230'>2:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '300'>3:00</p></td>"+"<td><p id = '330'>3:30</p></td>"+"<td><p id = '400'>4:00</p></td>"+"<td><p id = '430'>4:30</p></td>"+"<td><p id = '500'>5:00</p></td>"+"<td><p id = '530'>5:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '600'>6:00</p></td>"+"<td><p id = '630'>6:30</p></td>"+"<td><p id = '700'>7:00</p></td>"+"<td><p id = '730'>7:30</p></td>"+"<td><p id = '800'>8:00</p></td>"+"<td><p id = '830'>8:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '900'>9:00</p></td>"+"<td><p id = '930'>9:30</p></td>"+"<td><p id = '1000'>10:00</p></td>"+"<td><p id = '1030'>10:30</p></td>"+"<td><p id = '1100'>11:00</p></td>"+"<td><p id = '1130'>11:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '1200'>12:00</p></td>"+"<td><p id = '1230'>12:30</p></td>"+"<td><p id = '1300'>13:00</p></td>"+"<td><p id = '1330'>13:30</p></td>"+"<td><p id = '1400'>14:00</p></td>"+"<td><p id = '1430'>14:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '1500'>15:00</p></td>"+"<td><p id = '1530'>15:30</p></td>"+"<td><p id = '1600'>16:00</p></td>"+"<td><p id = '1630'>16:30</p></td>"+"<td><p id = '1700'>17:00</p></td>"+"<td><p id = '1730'>17:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '1800'>18:00</p></td>"+"<td><p id = '1830'>18:30</p></td>"+"<td><p id = '1900'>19:00</p></td>"+"<td><p id = '1930'>19:30</p></td>"+"<td><p id = '2000'>20:00</p></td>"+"<td><p id = '2030'>20:30</p></td>"+
      "</tr>"+
      "<tr>"+
      "<td><p id = '2100'>21:00</p></td>"+"<td><p id = '2130'>21:30</p></td>"+"<td><p id = '2200'>22:00</p></td>"+"<td><p id = '2230'>22:30</p></td>"+"<td><p id = '2300'>23:00</p></td>"+"<td><p id = '2330'>23:30</p></td>"+
      "</tr>"+
      "</table>"
    );

    for(let i=4; i<52; i++)
    {
      let att = events_arr[n][i];
      console.log(att);
      switch(i)
      {
        case 4:
          if(att != "0"){att=att.substring(0, att.length-1); $("#0000").append("<br>Attendees: "+att); $("#0000").css("background-color","#80C468");}
          break;
        case 5:
          if(att != "0"){att=att.substring(0, att.length-1); $("#0030").append("<br>Attendees: "+att); $("#0030").css("background-color","#80C468");}
          break;
        case 6:
          if(att != "0"){att=att.substring(0, att.length-1); $("#100").append("<br>Attendees: "+att); $("#100").css("background-color","#80C468");}
          break;
        case 7:
          if(att != "0"){att=att.substring(0, att.length-1); $("#130").append("<br>Attendees: "+att); $("#130").css("background-color","#80C468");}
          break;
        case 8:
          if(att != "0"){att=att.substring(0, att.length-1); $("#200").append("<br>Attendees: "+att); $("#200").css("background-color","#80C468");}
          break;
        case 9:
          if(att != "0"){att=att.substring(0, att.length-1); $("#230").append("<br>Attendees: "+att); $("#230").css("background-color","#80C468");}
          break;
        case 10:
          if(att != "0"){att=att.substring(0, att.length-1); $("#300").append("<br>Attendees: "+att); $("#300").css("background-color","#80C468");}
          break;
        case 11:
          if(att != "0"){att=att.substring(0, att.length-1); $("#330").append("<br>Attendees: "+att); $("#330").css("background-color","#80C468");}
          break;
        case 12:
          if(att != "0"){att=att.substring(0, att.length-1); $("#400").append("<br>Attendees: "+att); $("#400").css("background-color","#80C468");}
          break;
        case 13:
          if(att != "0"){att=att.substring(0, att.length-1); $("#430").append("<br>Attendees: "+att); $("#430").css("background-color","#80C468");}
          break;
        case 14:
          if(att != "0"){att=att.substring(0, att.length-1); $("#500").append("<br>Attendees: "+att); $("#500").css("background-color","#80C468");}
          break;
        case 15:
          if(att != "0"){att=att.substring(0, att.length-1); $("#530").append("<br>Attendees: "+att); $("#530").css("background-color","#80C468");}
          break;
        case 16:
          if(att != "0"){att=att.substring(0, att.length-1); $("#600").append("<br>Attendees: "+att); $("#600").css("background-color","#80C468");}
          break;
        case 17:
          if(att != "0"){att=att.substring(0, att.length-1); $("#630").append("<br>Attendees: "+att); $("#630").css("background-color","#80C468");}
          break;
        case 18:
          if(att != "0"){att=att.substring(0, att.length-1); $("#700").append("<br>Attendees: "+att); $("#700").css("background-color","#80C468");}
          break;
        case 19:
          if(att != "0"){att=att.substring(0, att.length-1); $("#730").append("<br>Attendees: "+att); $("#730").css("background-color","#80C468");}
          break;
        case 20:
          if(att != "0"){att=att.substring(0, att.length-1); $("#800").append("<br>Attendees: "+att); $("#800").css("background-color","#80C468");}
          break;
        case 21:
          if(att != "0"){att=att.substring(0, att.length-1); $("#830").append("<br>Attendees: "+att); $("#830").css("background-color","#80C468");}
          break;
        case 22:
          if(att != "0"){att=att.substring(0, att.length-1); $("#900").append("<br>Attendees: "+att); $("#900").css("background-color","#80C468");}
          break;
        case 23:
          if(att != "0"){att=att.substring(0, att.length-1); $("#930").append("<br>Attendees: "+att); $("#930").css("background-color","#80C468");}
          break;
        case 24:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1000").append("<br>Attendees: "+att); $("#1000").css("background-color","#80C468");}
          break;
        case 25:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1030").append("<br>Attendees: "+att); $("#1030").css("background-color","#80C468");}
          break;
        case 26:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1100").append("<br>Attendees: "+att); $("#1100").css("background-color","#80C468");}
          break;
        case 27:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1130").append("<br>Attendees: "+att); $("#1130").css("background-color","#80C468");}
          break;
        case 28:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1200").append("<br>Attendees: "+att); $("#1200").css("background-color","#80C468");}
          break;
        case 29:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1230").append("<br>Attendees: "+att); $("#1230").css("background-color","#80C468");}
          break;
        case 30:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1300").append("<br>Attendees: "+att); $("#1300").css("background-color","#80C468");}
          break;
        case 31:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1330").append("<br>Attendees: "+att); $("#1330").css("background-color","#80C468");}
          break;
        case 32:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1400").append("<br>Attendees: "+att); $("#1400").css("background-color","#80C468");}
          break;
        case 33:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1430").append("<br>Attendees: "+att); $("#1430").css("background-color","#80C468");}
          break;
        case 34:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1500").append("<br>Attendees: "+att); $("#1500").css("background-color","#80C468");}
          break;
        case 35:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1530").append("<br>Attendees: "+att); $("#1530").css("background-color","#80C468");}
          break;
        case 36:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1600").append("<br>Attendees: "+att); $("#1600").css("background-color","#80C468");}
          break;
        case 37:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1630").append("<br>Attendees: "+att); $("#1630").css("background-color","#80C468");}
          break;
        case 38:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1700").append("<br>Attendees: "+att); $("#1700").css("background-color","#80C468");}
          break;
        case 39:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1730").append("<br>Attendees: "+att); $("#1730").css("background-color","#80C468");}
          break;
        case 40:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1800").append("<br>Attendees: "+att); $("#1800").css("background-color","#80C468");}
          break;
        case 41:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1830").append("<br>Attendees: "+att); $("#1830").css("background-color","#80C468");}
          break;
        case 42:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1900").append("<br>Attendees: "+att); $("#1900").css("background-color","#80C468");}
          break;
        case 43:
          if(att != "0"){att=att.substring(0, att.length-1); $("#1930").append("<br>Attendees: "+att); $("#1930").css("background-color","#80C468");}
          break;
        case 44:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2000").append("<br>Attendees: "+att); $("#2000").css("background-color","#80C468");}
          break;
        case 45:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2030").append("<br>Attendees: "+att); $("#2030").css("background-color","#80C468");}
          break;
        case 46:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2100").append("<br>Attendees: "+att); $("#2100").css("background-color","#80C468");}
          break;
        case 47:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2130").append("<br>Attendees: "+att); $("#2130").css("background-color","#80C468");}
          break;
        case 48:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2200").append("<br>Attendees: "+att); $("#2200").css("background-color","#80C468");}
          break;
        case 49:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2230").append("<br>Attendees: "+att); $("#2230").css("background-color","#80C468");}
          break;
        case 50:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2300").append("<br>Attendees: "+att); $("#2300").css("background-color","#80C468");}
          break;
        case 51:
          if(att != "0"){att=att.substring(0, att.length-1); $("#2330").append("<br>Attendees: "+att); $("#2330").css("background-color","#80C468");}
          break;
        default:
          break;
      }
    }
  }


});
