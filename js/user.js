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

function pushToDB(user_name, creator_name, event_name, time_array)
{
  //alert(user_name + creator_name + event_name + time_array);
  var request2 = new XMLHttpRequest();
  request2.onreadystatechange = function ()
  {
    if (request2.readyState === XMLHttpRequest.DONE)
    {
      if (request2.status === 200)
      {

      }
      else
      {

      }
    }

  }

    var json = JSON.stringify(time_array);
    //alert(user_name);

    user_name = user_name + ", ";
    //alert(user_name);
    //alert(JSON.stringify(user_name));

    var urlToSendTo2 = "php/addAttendeeToEvent.php?" + "name=" + JSON.stringify(creator_name) + "&event_name=" + JSON.stringify(event_name) + "&user_name=" + JSON.stringify(user_name) + "&time_array=" + json + "&";
    console.log(urlToSendTo2);
    request2.open("GET", urlToSendTo2, true);
    request2.send();
    return request2.onreadystatechange();
}

function makeTable12(n, tarr)
{
  $("#user_table_12").html(
    "<center>Event Schedule</center><br>"+
    "<table id='rev_table'>"+
    "<tr>"+
    "<td><p id = '1200am'><button type = 'button' disabled>12:00am</button></p></td>"+
    "<td><p id = '1230am'><button type = 'button' disabled>12:30am</button></p></td>"+
    "<td><p id = '100am'><button type = 'button' disabled>1:00am</button></p></td>"+
    "<td><p id = '130am'><button type = 'button' disabled>1:30am</button></p></td>"+
    "<td><p id = '200am'><button type = 'button' disabled>2:00am</button></p></td>"+
    "<td><p id = '230am'><button type = 'button' disabled>2:30am</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '300am'><button type = 'button' disabled>3:00am</button></p></td>"+
    "<td><p id = '330am'><button type = 'button' disabled>3:30am</button></p></td>"+
    "<td><p id = '400am'><button type = 'button' disabled>4:00am</button></p></td>"+
    "<td><p id = '430am'><button type = 'button' disabled>4:30am</button></p></td>"+
    "<td><p id = '500am'><button type = 'button' disabled>5:00am</button></p></td>"+
    "<td><p id = '530am'><button type = 'button' disabled>5:30am</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '600am'><button type = 'button' disabled>6:00am</button></p></td>"+
    "<td><p id = '630am'><button type = 'button' disabled>6:30am</button></p></td>"+
    "<td><p id = '700am'><button type = 'button' disabled>7:00am</button></p></td>"+
    "<td><p id = '730am'><button type = 'button' disabled>7:30am</button></p></td>"+
    "<td><p id = '800am'><button type = 'button' disabled>8:00am</button></p></td>"+
    "<td><p id = '830am'><button type = 'button' disabled>8:30am</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '900am'><button type = 'button' disabled>9:00am</button></p></td>"+
    "<td><p id = '930am'><button type = 'button' disabled>9:30am</button></p></td>"+
    "<td><p id = '1000am'><button type = 'button' disabled>10:00am</button></p></td>"+
    "<td><p id = '1030am'><button type = 'button' disabled>10:30am</button></p></td>"+
    "<td><p id = '1100am'><button type = 'button' disabled>11:00am</button></p></td>"+
    "<td><p id = '1130am'><button type = 'button' disabled>11:30am</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '1200'><button type = 'button' disabled>12:00pm</button></p></td>"+
    "<td><p id = '1230pm'><button type = 'button' disabled>12:30pm</button></p></td>"+
    "<td><p id = '100pm'><button type = 'button' disabled>1:00pm</button></p></td>"+
    "<td><p id = '130pm'><button type = 'button' disabled>1:30pm</button></p></td>"+
    "<td><p id = '200pm'><button type = 'button' disabled>2:00pm</button></p></td>"+
    "<td><p id = '230pm'><button type = 'button' disabled>2:30pm</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '300pm'><button type = 'button' disabled>3:00pm</button></p></td>"+
    "<td><p id = '330pm'><button type = 'button' disabled>3:30pm</button></p></td>"+
    "<td><p id = '400pm'><button type = 'button' disabled>4:00pm</button></p></td>"+
    "<td><p id = '430pm'><button type = 'button' disabled>4:30pm</button></p></td>"+
    "<td><p id = '500pm'><button type = 'button' disabled>5:00pm</button></p></td>"+
    "<td><p id = '530pm'><button type = 'button' disabled>5:30pm</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '600pm'><button type = 'button' disabled>6:00pm</button></p></td>"+
    "<td><p id = '630pm'><button type = 'button' disabled>6:30pm</button></p></td>"+
    "<td><p id = '700pm'><button type = 'button' disabled>7:00pm</button></p></td>"+
    "<td><p id = '730pm'><button type = 'button' disabled>7:30pm</button></p></td>"+
    "<td><p id = '800pm'><button type = 'button' disabled>8:00pm</button></p></td>"+
    "<td><p id = '830pm'><button type = 'button' disabled>8:30pm</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '900pm'><button type = 'button' disabled>9:00pm</button></p></td>"+
    "<td><p id = '930pm'><button type = 'button' disabled>9:30pm</button></p></td>"+
    "<td><p id = '1000pm'><button type = 'button' disabled>10:00pm</button></p></td>"+
    "<td><p id = '1030pm'><button type = 'button' disabled>10:30pm</button></p></td>"+
    "<td><p id = '1100pm'><button type = 'button' disabled>11:00pm</button></p></td>"+
    "<td><p id = '1130pm'><button type = 'button' disabled>11:30pm</button></p></td>"+
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
        if(att != "0"){$("#1200am").html($("<button type = 'button'>12:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 5:
        if(att != "0"){$("#1230am").html($("<button type = 'button'>12:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 6:
        if(att != "0"){$("#100am").html($("<button type = 'button'>1:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 7:
        if(att != "0"){$("#130am").html($("<button type = 'button'>1:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 8:
        if(att != "0"){$("#200am").html($("<button type = 'button'>2:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 9:
        if(att != "0"){$("#230am").html($("<button type = 'button'>2:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 10:
        if(att != "0"){$("#300am").html($("<button type = 'button'>3:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 11:
        if(att != "0"){$("#330am").html($("<button type = 'button'>3:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 12:
        if(att != "0"){$("#400am").html($("<button type = 'button'>4:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 13:
        if(att != "0"){$("#430am").html($("<button type = 'button'>4:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 14:
        if(att != "0"){$("#500am").html($("<button type = 'button'>5:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 15:
        if(att != "0"){$("#530am").html($("<button type = 'button'>5:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 16:
        if(att != "0"){$("#600am").html($("<button type = 'button'>6:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 17:
        if(att != "0"){$("#630am").html($("<button type = 'button'>6:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 18:
        if(att != "0"){$("#700am").html($("<button type = 'button'>7:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 19:
        if(att != "0"){$("#730am").html($("<button type = 'button'>7:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 20:
        if(att != "0"){$("#800am").html($("<button type = 'button'>8:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 21:
        if(att != "0"){$("#830am").html($("<button type = 'button'>8:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 22:
        if(att != "0"){$("#900am").html($("<button type = 'button'>9:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 23:
        if(att != "0"){$("#930am").html($("<button type = 'button'>9:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 24:
        if(att != "0"){$("#1000am").html($("<button type = 'button'>10:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 25:
        if(att != "0"){$("#1030am").html($("<button type = 'button'>10:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 26:
        if(att != "0"){$("#1100am").html($("<button type = 'button'>11:00am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 27:
        if(att != "0"){$("#1130am").html($("<button type = 'button'>11:30am</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 28:
        if(att != "0"){$("#1200pm").html($("<button type = 'button'>12:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 29:
        if(att != "0"){$("#1230pm").html($("<button type = 'button'>12:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 30:
        if(att != "0"){$("#100pm").html($("<button type = 'button'>1:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 31:
        if(att != "0"){$("#130pm").html($("<button type = 'button'>1:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 32:
        if(att != "0"){$("#200pm").html($("<button type = 'button'>2:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 33:
        if(att != "0"){$("#230pm").html($("<button type = 'button'>2:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 34:
        if(att != "0"){$("#300pm").html($("<button type = 'button'>3:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 35:
        if(att != "0"){$("#330pm").html($("<button type = 'button'>3:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 36:
        if(att != "0"){$("#400pm").html($("<button type = 'button'>4:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 37:
        if(att != "0"){$("#430pm").html($("<button type = 'button'>4:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 38:
        if(att != "0"){$("#500pm").html($("<button type = 'button'>5:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 39:
        if(att != "0"){$("#530pm").html($("<button type = 'button'>5:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 40:
        if(att != "0"){$("#600pm").html($("<button type = 'button'>6:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 41:
        if(att != "0"){$("#630pm").html($("<button type = 'button'>6:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 42:
        if(att != "0"){$("#700pm").html($("<button type = 'button'>7:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 43:
        if(att != "0"){$("#730pm").html($("<button type = 'button'>7:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 44:
        if(att != "0"){$("#800pm").html($("<button type = 'button'>8:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 45:
        if(att != "0"){$("#830pm").html($("<button type = 'button'>8:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 46:
        if(att != "0"){$("#900pm").html($("<button type = 'button'>9:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 47:
        if(att != "0"){$("#930pm").html($("<button type = 'button'>9:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 48:
        if(att != "0"){$("#1000pm").html($("<button type = 'button'>10:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 49:
        if(att != "0"){$("#1030pm").html($("<button type = 'button'>10:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 50:
        if(att != "0"){$("#1100pm").html($("<button type = 'button'>11:00pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 51:
        if(att != "0"){$("#1130pm").html($("<button type = 'button'>11:30pm</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      default:
        break;
    }
  }
}

function makeTable24(n, tarr)
{

  $("#user_table_24").html(
    "<center>Event Schedule</center><br>"+
    "<table id='rev_table'>"+
    "<tr>"+
    "<td><p id = '0000'><button type = 'button' disabled>00:00</button></p></td>"+
    "<td><p id = '0030'><button type = 'button' disabled>00:30</button></p></td>"+
    "<td><p id = '100'><button type = 'button' disabled>1:00</button></p></td>"+
    "<td><p id = '130'><button type = 'button' disabled>1:30</button></p></td>"+
    "<td><p id = '200'><button type = 'button' disabled>2:00</button></p></td>"+
    "<td><p id = '230'><button type = 'button' disabled>2:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '300'><button type = 'button' disabled>3:00</button></p></td>"+
    "<td><p id = '330'><button type = 'button' disabled>3:30</button></p></td>"+
    "<td><p id = '400'><button type = 'button' disabled>4:00</button></p></td>"+
    "<td><p id = '430'><button type = 'button' disabled>4:30</button></p></td>"+
    "<td><p id = '500'><button type = 'button' disabled>5:00</button></p></td>"+
    "<td><p id = '530'><button type = 'button' disabled>5:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '600'><button type = 'button' disabled>6:00</button></p></td>"+
    "<td><p id = '630'><button type = 'button' disabled>6:30</button></p></td>"+
    "<td><p id = '700'><button type = 'button' disabled>7:00</button></p></td>"+
    "<td><p id = '730'><button type = 'button' disabled>7:30</button></p></td>"+
    "<td><p id = '800'><button type = 'button' disabled>8:00</button></p></td>"+
    "<td><p id = '830'><button type = 'button' disabled>8:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '900'><button type = 'button' disabled>9:00</button></p></td>"+
    "<td><p id = '930'><button type = 'button' disabled>9:30</button></p></td>"+
    "<td><p id = '1000'><button type = 'button' disabled>10:00</button></p></td>"+
    "<td><p id = '1030'><button type = 'button' disabled>10:30</button></p></td>"+
    "<td><p id = '1100'><button type = 'button' disabled>11:00</button></p></td>"+
    "<td><p id = '1130'><button type = 'button' disabled>11:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '1200'><button type = 'button' disabled>12:00</button></p></td>"+
    "<td><p id = '1230'><button type = 'button' disabled>12:30</button></p></td>"+
    "<td><p id = '1300'><button type = 'button' disabled>13:00</button></p></td>"+
    "<td><p id = '1330'><button type = 'button' disabled>13:30</button></p></td>"+
    "<td><p id = '1400'><button type = 'button' disabled>14:00</button></p></td>"+
    "<td><p id = '1430'><button type = 'button' disabled>14:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '1500'><button type = 'button' disabled>15:00</button></p></td>"+
    "<td><p id = '1530'><button type = 'button' disabled>15:30</button></p></td>"+
    "<td><p id = '1600'><button type = 'button' disabled>16:00</button></p></td>"+
    "<td><p id = '1630'><button type = 'button' disabled>16:30</button></p></td>"+
    "<td><p id = '1700'><button type = 'button' disabled>17:00</button></p></td>"+
    "<td><p id = '1730'><button type = 'button' disabled>17:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '1800'><button type = 'button' disabled>18:00</button></p></td>"+
    "<td><p id = '1830'><button type = 'button' disabled>18:30</button></p></td>"+
    "<td><p id = '1900'><button type = 'button' disabled>19:00</button></p></td>"+
    "<td><p id = '1930'><button type = 'button' disabled>19:30</button></p></td>"+
    "<td><p id = '2000'><button type = 'button' disabled>20:00</button></p></td>"+
    "<td><p id = '2030'><button type = 'button' disabled>20:30</button></p></td>"+
    "</tr>"+
    "<tr>"+
    "<td><p id = '2100'><button type = 'button' disabled>21:00</button></p></td>"+
    "<td><p id = '2130'><button type = 'button' disabled>21:30</button></p></td>"+
    "<td><p id = '2200'><button type = 'button' disabled>22:00</button></p></td>"+
    "<td><p id = '2230'><button type = 'button' disabled>22:30</button></p></td>"+
    "<td><p id = '2300'><button type = 'button' disabled>23:00</button></p></td>"+
    "<td><p id = '2330'><button type = 'button' disabled>23:30</button></p></td>"+
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
        if(att != "0"){$("#0000").html($("<button type = 'button'>00:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 5:
        if(att != "0"){$("#0030").html($("<button type = 'button'>00:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 6:
        if(att != "0"){$("#100").html($("<button type = 'button'>1:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 7:
        if(att != "0"){$("#130").html($("<button type = 'button'>1:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 8:
        if(att != "0"){$("#200").html($("<button type = 'button'>2:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 9:
        if(att != "0"){$("#230").html($("<button type = 'button'>2:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 10:
        if(att != "0"){$("#300").html($("<button type = 'button'>3:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 11:
        if(att != "0"){$("#330").html($("<button type = 'button'>3:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 12:
        if(att != "0"){$("#400").html($("<button type = 'button'>4:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 13:
        if(att != "0"){$("#430").html($("<button type = 'button'>4:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 14:
        if(att != "0"){$("#500").html($("<button type = 'button'>5:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 15:
        if(att != "0"){$("#530").html($("<button type = 'button'>5:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 16:
        if(att != "0"){$("#600").html($("<button type = 'button'>6:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 17:
        if(att != "0"){$("#630").html($("<button type = 'button'>6:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 18:
        if(att != "0"){$("#700").html($("<button type = 'button'>7:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 19:
        if(att != "0"){$("#730").html($("<button type = 'button'>7:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 20:
        if(att != "0"){$("#800").html($("<button type = 'button'>8:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 21:
        if(att != "0"){$("#830").html($("<button type = 'button'>8:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 22:
        if(att != "0"){$("#900").html($("<button type = 'button'>9:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 23:
        if(att != "0"){$("#930").html($("<button type = 'button'>9:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 24:
        if(att != "0"){$("#1000").html($("<button type = 'button'>10:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 25:
        if(att != "0"){$("#1030").html($("<button type = 'button'>10:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 26:
        if(att != "0"){$("#1100").html($("<button type = 'button'>11:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 27:
        if(att != "0"){$("#1130").html($("<button type = 'button'>11:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 28:
        if(att != "0"){$("#1200").html($("<button type = 'button'>12:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 29:
        if(att != "0"){$("#1230").html($("<button type = 'button'>12:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 30:
        if(att != "0"){$("#1300").html($("<button type = 'button'>13:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 31:
        if(att != "0"){$("#1330").html($("<button type = 'button'>13:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 32:
        if(att != "0"){$("#1400").html($("<button type = 'button'>14:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 33:
        if(att != "0"){$("#1430").html($("<button type = 'button'>14:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 34:
        if(att != "0"){$("#1500").html($("<button type = 'button'>15:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 35:
        if(att != "0"){$("#1530").html($("<button type = 'button'>15:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 36:
        if(att != "0"){$("#1600").html($("<button type = 'button'>16:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 37:
        if(att != "0"){$("#1630").html($("<button type = 'button'>16:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 38:
        if(att != "0"){$("#1700").html($("<button type = 'button'>17:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 39:
        if(att != "0"){$("#1730").html($("<button type = 'button'>17:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 40:
        if(att != "0"){$("#1800").html($("<button type = 'button'>18:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 41:
        if(att != "0"){$("#1830").html($("<button type = 'button'>18:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 42:
        if(att != "0"){$("#1900").html($("<button type = 'button'>19:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 43:
        if(att != "0"){$("#1930").html($("<button type = 'button'>19:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 44:
        if(att != "0"){$("#2000").html($("<button type = 'button'>20:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 45:
        if(att != "0"){$("#2030").html($("<button type = 'button'>20:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 46:
        if(att != "0"){$("#2100").html($("<button type = 'button'>21:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 47:
        if(att != "0"){$("#2130").html($("<button type = 'button'>21:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 48:
        if(att != "0"){$("#2200").html($("<button type = 'button'>22:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 49:
        if(att != "0"){$("#2230").html($("<button type = 'button'>22:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 50:
        if(att != "0"){$("#2300").html($("<button type = 'button'>23:00</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      case 51:
        if(att != "0"){$("#2330").html($("<button type = 'button'>23:30</button>").click(function(){updateArr(n,i,tarr);}));}
        break;
      default:
        break;
    }
  }
}

function showAllEvents(form)
{
  let name = form.name.value;
  if(name=="")
  {
    alert("All fields are mandatory");
  }
  else
  {
    form.reset();
    $("#event_list").empty();
    for(let i=0; i<events_arr.length; i++)
    {

      $("<button type='button'> Event:<br>"+events_arr[i][2]+"<br> Organizer:<br>"+events_arr[i][1]+"</button>")
        .click(function(){ showInfo(i,name);})
        .appendTo(document.getElementById("event_list"));
        $("#event_list").show();
    }
  }
}

function showInfo(i, name)
{
  if(name == events_arr[i][1])
  {
    $("#organizer_error").dialog();
  }
  else
  {
    $("#event_info").html(
      "Event Name: &nbsp"+events_arr[i][2]+"<br>"+
      "Organizer Name: &nbsp"+events_arr[i][1]+"<br>"+
      "Date: &nbsp"+events_arr[i][3]+"<br>"
    );
    $("#time_switch").empty();
    let time_arr = [];
    $("<button type = 'button' name = '12_time_select' id = 'time_select_12'>12 Hour Format</button>")
      .click(function(){
        time_arr.splice(0);
        $("#user_table_24").hide();
        $("#user_table_12").toggle();
      })
      .appendTo(document.getElementById("time_switch"));
    $("<button type = 'button' name = '24_time_select' id = 'time_select_24'>24 Hour Format</button>")
      .click(function(){
        time_arr.splice(0);
        $("#user_table_12").hide();
        $("#user_table_24").toggle();
      })
      .appendTo(document.getElementById("time_switch"));
    makeTable12(i, time_arr);
    makeTable24(i, time_arr);
    $("#time_select_24").show();
    $("#time_select_24").show();
    $("#event_time").show();
    $("#user_table_12").show();
    $("#user_table_24").hide();

    $("<button type = 'button'>Submit</button>").click(function()
      {
        pushToDB(name, events_arr[i][1], events_arr[i][2], time_arr);
        $("#user_table_12").empty().hide();
        $("#user_table_24").empty().hide();
        $("#time_switch").empty().hide();
        $("#event_time").hide();
        $("#event_info").empty().hide();
        $("#time_submit").empty();
      }).appendTo(document.getElementById("time_submit"));
    }
}

function getData(form)
{
  let name = form.event_name.value;
  let date = form.event_date.value;
  if(date == "" || name == "")
  {
    alert("All fields are mandatory!");
  }
  else
  {
    form.reset();
    for(let i=0; i<events_arr.length; i++)
    {
      if(events_arr[i][3] == date)
      {
        $("<button type='button'> Event:<br>"+events_arr[i][2]+"<br> Organizer:<br>"+events_arr[i][1]+"</button>")
          .click(function(){ showInfo(i,name);})
          .appendTo(document.getElementById("event_list"));
        $("#event_list").show();
      }
    }
  }
}

function updateArr(i, j, arr)
{
  let check = false;
  switch(j)
  {
    case 4:
      check = false;
      if(arr.length == 0){arr.push("0000");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0000"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0000");}}
      break;
    case 5:
    check = false;
    if(arr.length == 0){arr.push("0030");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0030"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0030");}}
      break;
    case 6:
    check = false;
    if(arr.length == 0){arr.push("0100");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0100"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0100");}}
      break;
    case 7:
    check = false;
    if(arr.length == 0){arr.push("0130");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0130"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0130");}}
      break;
    case 8:
    check = false;
    if(arr.length == 0){arr.push("0200");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0200"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0200");}}
      break;
    case 9:
    check = false;
    if(arr.length == 0){arr.push("0230");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0230"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0230");}}
      break;
    case 10:
    check = false;
    if(arr.length == 0){arr.push("0300");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0300"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0300");}}
      break;
    case 11:
    check = false;
    if(arr.length == 0){arr.push("0330");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0330"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0330");}}
      break;
    case 12:
    check = false;
    if(arr.length == 0){arr.push("0400");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0400"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0400");}}
      break;
    case 13:
    check = false;
    if(arr.length == 0){arr.push("0430");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0430"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0430");}}
      break;
    case 14:
    check = false;
    if(arr.length == 0){arr.push("0500");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0500"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0500");}}
      break;
    case 15:
    check = false;
    if(arr.length == 0){arr.push("0530");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0530"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0530");}}
      break;
    case 16:
    check = false;
    if(arr.length == 0){arr.push("0600");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0600"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0600");}}
      break;
    case 17:
    check = false;
    if(arr.length == 0){arr.push("0630");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0630"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0630");}}
      break;
    case 18:
    check = false;
    if(arr.length == 0){arr.push("0700");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0700"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0700");}}
      break;
    case 19:
    check = false;
    if(arr.length == 0){arr.push("0730");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0730"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0730");}}
      break;
    case 20:
    check = false;
    if(arr.length == 0){arr.push("0800");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0800"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0800");}}
      break;
    case 21:
    check = false;
    if(arr.length == 0){arr.push("0830");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0830"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0830");}}
      break;
    case 22:
    check = false;
    if(arr.length == 0){arr.push("0900");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0900"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0900");}}
      break;
    case 23:
    check = false;
    if(arr.length == 0){arr.push("0930");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "0930"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("0930");}}
      break;
    case 24:
    check = false;
    if(arr.length == 0){arr.push("1000");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1000"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1000");}}
      break;
    case 25:
    check = false;
    if(arr.length == 0){arr.push("1030");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1030"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1030");}}
      break;
    case 26:
    check = false;
    if(arr.length == 0){arr.push("1100");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1100"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1100");}}
      break;
    case 27:
    check = false;
    if(arr.length == 0){arr.push("1130");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1130"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1130");}}
      break;
    case 28:
    check = false;
    if(arr.length == 0){arr.push("1200");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1200"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1200");}}
      break;
    case 29:
    check = false;
    if(arr.length == 0){arr.push("1230");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1230"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1230");}}
      break;
    case 30:
    check = false;
    if(arr.length == 0){arr.push("1300");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1300"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1300");}}
      break;
    case 31:
    check = false;
    if(arr.length == 0){arr.push("1330");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1330"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1330");}}
      break;
    case 32:
    check = false;
    if(arr.length == 0){arr.push("1400");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1400"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1400");}}
      break;
    case 33:
    check = false;
    if(arr.length == 0){arr.push("1430");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1430"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1430");}}
      break;
    case 34:
    check = false;
    if(arr.length == 0){arr.push("1500");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1500"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1500");}}
      break;
    case 35:
    check = false;
    if(arr.length == 0){arr.push("1530");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1530"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1530");}}
      break;
    case 36:
    check = false;
    if(arr.length == 0){arr.push("1600");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1600"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1600");}}
      break;
    case 37:
    check = false;
    if(arr.length == 0){arr.push("1630");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1630"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1630");}}
      break;
    case 38:
    check = false;
    if(arr.length == 0){arr.push("1700");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1700"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1700");}}
      break;
    case 39:
    check = false;
    if(arr.length == 0){arr.push("1730");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1730"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1730");}}
      break;
    case 40:
    check = false;
    if(arr.length == 0){arr.push("1800");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1800"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1800");}}
      break;
    case 41:
    check = false;
    if(arr.length == 0){arr.push("1830");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1830"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1830");}}
      break;
    case 42:
    check = false;
    if(arr.length == 0){arr.push("1900");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1900"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1900");}}
      break;
    case 43:
    check = false;
    if(arr.length == 0){arr.push("1930");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "1930"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("1930");}}
      break;
    case 44:
    check = false;
    if(arr.length == 0){arr.push("2000");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2000"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2000");}}
      break;
    case 45:
    check = false;
    if(arr.length == 0){arr.push("2030");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2030"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2030");}}
      break;
    case 46:
    check = false;
    if(arr.length == 0){arr.push("2100");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2100"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2100");}}
      break;
    case 47:
    check = false;
    if(arr.length == 0){arr.push("2130");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2130"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2130");}}
      break;
    case 48:
    check = false;
    if(arr.length == 0){arr.push("2200");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2200"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2200");}}
      break;
    case 49:
    check = false;
    if(arr.length == 0){arr.push("2230");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2230"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2230");}}
      break;
    case 50:
    check = false;
    if(arr.length == 0){arr.push("2300");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2300"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2300");}}
      break;
    case 51:
    check = false;
    if(arr.length == 0){arr.push("2330");}else{
      for(let k=0; k<arr.length; k++)
      {
        if(arr[k] == "2330"){check =true; arr.splice(k, 1);}
      }
      if(!check){arr.push("2330");}}
      break;
    default:
    break;
  }

  console.log(arr);
}

$(document).ready(function(){

  getEventsFromDB('php/getEventsFromDB.php', function printResults()
  {
    console.log(events_arr.length); //DEBUGGING
    console.log(events_arr[0]); //DEBUGGING
    console.log(events_arr[1]); //DEBUGGING
    console.log(events_arr[1][1]);
    console.log(events_arr.length);
  });

  $("#organizer_error").hide();
  $("#date_select").hide();
  $("#date_form").hide();
  $("#name_form").hide();
  $("#event_list").empty();
  $("#event_info").empty();
  $("#event_time").hide();

  $("#date_event").click(function()
  {
    $("#name_form").hide();
    $("#event_list").empty();
    $("#event_list").hide();
    $("#date_form").toggle();
    $("#event_info").empty();
    $("#user_table_12").empty();
    $("#user_table_24").empty();
    $("#time_submit").empty();
    $("#event_time").hide();
  });

  $("#all_event").click(function()
  {
    $("#date_form").hide();
    $("#event_list").empty();
    $("#event_list").hide();
    $("#name_form").toggle();
    $("#event_list").empty();
    $("#event_info").empty();
    $("#user_table_12").empty();
    $("#user_table_24").empty();
    $("#time_submit").empty();
    $("#event_time").hide();
  });

  $("#name_submit").click(function(){showAllEvents(document.getElementById("name_form"));});

  $("#date_submit").click(
    function()
    {
      $("#event_list").empty();
      getData(document.getElementById("date_form"));
    }
  );

  $("#time_select_12").click(
    function()
    {
      $("#user_table_24").hide();
      $("#user_table_12").toggle();
    });

  $("#time_select_24").click(
    function()
    {
      $("#user_table_12").hide();
      $("#user_table_24").toggle();
    });


});
