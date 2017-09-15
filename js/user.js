<<<<<<< HEAD
  var ev_list=[];

//Pre: Create an event Object that can store the events details
//In: Takes the parameters and stores them in an object
//Post: An event object gets pushed to the ev_list array
//Parameters:

function eventCreate(ev_name,ev_month,ev_date,ev_st_time,ev_end_time){

  var myObj={name:ev_name, month: ev_month, date: ev_date, st_time: ev_st_time, end_time: ev_end_time};
  ev_list.push(myObj);

}


function eventDisplay(){
  for(var i =0;i<ev_list.length;i++){
    $("#Events_List").append("#"+(i+1)+" Event<br>");
    $("#Events_List").append(ev_list[i].name);
    $("#Events_List").append("<br>Date: "+month_convert(ev_list[i].month)+ " "+ev_list[i].date);
    $("#Events_List").append("<br>Time: "+ev_list[i].st_time+"-"+ev_list[i].end_time);
    $("#Events_List").append("<br><br>");
  }
}


function month_button_display(){
  $("#event_month").html(
    "<center><button id='jan'>January</button>" +
    "<button id='feb'>February</button>" +
    "<button id='mar'>March</button>" +
    "<button id='apr'>April</button>" +
    "<button id='may'>May</button>" +
    "<button id='jun'>June</button>" +
    "<button id='jul'>July</button>" +
    "<button id='aug'>August</button>" +
    "<button id='sep'>September</button>" +
    "<button id='oct'>October</button>" +
    "<button id='nov'>November</button>" +
    "<button id='dec'>December</button></center>"
  );
}

function date_button_display(num_days_in_month){
  if(num_days_in_month==28){
    $("#event_date").html(
      "<center><button id='01'>1</button>" + "<button id='02'>2</button>" + "<button id='03'>3</button>" +
      "<button id='04'>4</button>" + "<button id='05'>5</button>" + "<button id='06'>6</button>" +
      "<button id='07'>7</button>" + "<button id='08'>8</button>" + "<button id='09'>9</button>" +
      "<button id='10'>10</button>" + "<button id='11'>11</button>" + "<button id='12'>12</button>" +
      "<button id='13'>13</button>" + "<button id='14'>14</button>" + "<button id='15'>15</button>" +
      "<button id='16'>16</button>" + "<button id='17'>17</button>" + "<button id='18'>18</button>" +
      "<button id='19'>19</button>" + "<button id='20'>20</button>" + "<button id='21'>21</button>" +
      "<button id='22'>22</button>" + "<button id='23'>23</button>" + "<button id='24'>24</button>" +
      "<button id='25'>25</button>" + "<button id='26'>26</button>" + "<button id='27'>27</button>" +
      "<button id='28'>28</button>"+"</center>"
    );
    $("#event_date").show();

  }else if(num_days_in_month==30){
    $("#event_date").html(
      "<center><button id='01'>1</button>" + "<button id='02'>2</button>" + "<button id='03'>3</button>" +
      "<button id='04'>4</button>" + "<button id='05'>5</button>" + "<button id='06'>6</button>" +
      "<button id='07'>7</button>" + "<button id='08'>8</button>" + "<button id='09'>9</button>" +
      "<button id='10'>10</button>" + "<button id='11'>11</button>" + "<button id='12'>12</button>" +
      "<button id='13'>13</button>" + "<button id='14'>14</button>" + "<button id='15'>15</button>" +
      "<button id='16'>16</button>" + "<button id='17'>17</button>" + "<button id='18'>18</button>" +
      "<button id='19'>19</button>" + "<button id='20'>20</button>" + "<button id='21'>21</button>" +
      "<button id='22'>22</button>" + "<button id='23'>23</button>" + "<button id='24'>24</button>" +
      "<button id='25'>25</button>" + "<button id='26'>26</button>" + "<button id='27'>27</button>" +
      "<button id='28'>28</button>" + "<button id='29'>29</button>" + "<button id='30'>30</button></center>"
    );
    $("#event_date").show();

  }else{
    $("#event_date").html(
      "<center><button id='01'>1</button>" + "<button id='02'>2</button>" + "<button id='03'>3</button>" +
      "<button id='04'>4</button>" + "<button id='05'>5</button>" + "<button id='06'>6</button>" +
      "<button id='07'>7</button>" + "<button id='08'>8</button>" + "<button id='09'>9</button>" +
      "<button id='10'>10</button>" + "<button id='11'>11</button>" + "<button id='12'>12</button>" +
      "<button id='13'>13</button>" + "<button id='14'>14</button>" + "<button id='15'>15</button>" +
      "<button id='16'>16</button>" + "<button id='17'>17</button>" + "<button id='18'>18</button>" +
      "<button id='19'>19</button>" + "<button id='20'>20</button>" + "<button id='21'>21</button>" +
      "<button id='22'>22</button>" + "<button id='23'>23</button>" + "<button id='24'>24</button>" +
      "<button id='25'>25</button>" + "<button id='26'>26</button>" + "<button id='27'>27</button>" +
      "<button id='28'>28</button>" + "<button id='29'>29</button>" + "<button id='30'>30</button>" +
      "<button id='31'>31</button></center>"
    );
    $("#event_date").show();
  }
}

function month_convert(num){
  if(num==1){return "January";}else if(num==2){return "February";}else if(num==3){return "March";}else if(num==4){return "April";}else if(num==5){
    return "May";
  }else if(num==6){
    return "June";
  }else if(num==7){
    return "July";
  }else if(num==8){
    return "August";
  }else if(num==9){
    return "September";
  }else if(num==10){
    return "October";
  }else if(num==11){
    return "November";
  }else if(num==12){
    return "December";
  }else{
    return "Error";
  }
}



||||||| merged common ancestors
var ev_list=[];

//Pre: Create an event Object that can store the events details
//In: Takes the parameters and stores them in an object
//Post: An event object gets pushed to the ev_list array
//Parameters:

function eventCreate(ev_name,ev_month,ev_date,ev_st_time,ev_end_time){

  var myObj={name:ev_name, month: ev_month, date: ev_date, st_time: ev_st_time, end_time: ev_end_time};
  ev_list.push(myObj);

}


function eventDisplay(){
  for(var i =0;i<ev_list.length;i++){
    $("#Events_List").append("#"+(i+1)+" Event<br>");
    $("#Events_List").append(ev_list[i].name);
    $("#Events_List").append("<br>Date: "+month_convert(ev_list[i].month)+ " "+ev_list[i].date);
    $("#Events_List").append("<br>Time: "+ev_list[i].st_time+"-"+ev_list[i].end_time);
    $("#Events_List").append("<br><br>");
  }
}


function month_button_display(){
  $("#event_month").html(
    "<center><button id='jan'>January</button>" +
    "<button id='feb'>February</button>" +
    "<button id='mar'>March</button>" +
    "<button id='apr'>April</button>" +
    "<button id='may'>May</button>" +
    "<button id='jun'>June</button>" +
    "<button id='jul'>July</button>" +
    "<button id='aug'>August</button>" +
    "<button id='sep'>September</button>" +
    "<button id='oct'>October</button>" +
    "<button id='nov'>November</button>" +
    "<button id='dec'>December</button></center>"
  );
}

function date_button_display(num_days_in_month){
  if(num_days_in_month==28){
    $("#event_date").html(
      "<center><button id='01'>1</button>" + "<button id='02'>2</button>" + "<button id='03'>3</button>" +
      "<button id='04'>4</button>" + "<button id='05'>5</button>" + "<button id='06'>6</button>" +
      "<button id='07'>7</button>" + "<button id='08'>8</button>" + "<button id='09'>9</button>" +
      "<button id='10'>10</button>" + "<button id='11'>11</button>" + "<button id='12'>12</button>" +
      "<button id='13'>13</button>" + "<button id='14'>14</button>" + "<button id='15'>15</button>" +
      "<button id='16'>16</button>" + "<button id='17'>17</button>" + "<button id='18'>18</button>" +
      "<button id='19'>19</button>" + "<button id='20'>20</button>" + "<button id='21'>21</button>" +
      "<button id='22'>22</button>" + "<button id='23'>23</button>" + "<button id='24'>24</button>" +
      "<button id='25'>25</button>" + "<button id='26'>26</button>" + "<button id='27'>27</button>" +
      "<button id='28'>28</button>"+"</center>"
    );
    $("#event_date").show();

  }else if(num_days_in_month==30){
    $("#event_date").html(
      "<center><button id='01'>1</button>" + "<button id='02'>2</button>" + "<button id='03'>3</button>" +
      "<button id='04'>4</button>" + "<button id='05'>5</button>" + "<button id='06'>6</button>" +
      "<button id='07'>7</button>" + "<button id='08'>8</button>" + "<button id='09'>9</button>" +
      "<button id='10'>10</button>" + "<button id='11'>11</button>" + "<button id='12'>12</button>" +
      "<button id='13'>13</button>" + "<button id='14'>14</button>" + "<button id='15'>15</button>" +
      "<button id='16'>16</button>" + "<button id='17'>17</button>" + "<button id='18'>18</button>" +
      "<button id='19'>19</button>" + "<button id='20'>20</button>" + "<button id='21'>21</button>" +
      "<button id='22'>22</button>" + "<button id='23'>23</button>" + "<button id='24'>24</button>" +
      "<button id='25'>25</button>" + "<button id='26'>26</button>" + "<button id='27'>27</button>" +
      "<button id='28'>28</button>" + "<button id='29'>29</button>" + "<button id='30'>30</button></center>"
    );
    $("#event_date").show();

  }else{
    $("#event_date").html(
      "<center><button id='01'>1</button>" + "<button id='02'>2</button>" + "<button id='03'>3</button>" +
      "<button id='04'>4</button>" + "<button id='05'>5</button>" + "<button id='06'>6</button>" +
      "<button id='07'>7</button>" + "<button id='08'>8</button>" + "<button id='09'>9</button>" +
      "<button id='10'>10</button>" + "<button id='11'>11</button>" + "<button id='12'>12</button>" +
      "<button id='13'>13</button>" + "<button id='14'>14</button>" + "<button id='15'>15</button>" +
      "<button id='16'>16</button>" + "<button id='17'>17</button>" + "<button id='18'>18</button>" +
      "<button id='19'>19</button>" + "<button id='20'>20</button>" + "<button id='21'>21</button>" +
      "<button id='22'>22</button>" + "<button id='23'>23</button>" + "<button id='24'>24</button>" +
      "<button id='25'>25</button>" + "<button id='26'>26</button>" + "<button id='27'>27</button>" +
      "<button id='28'>28</button>" + "<button id='29'>29</button>" + "<button id='30'>30</button>" +
      "<button id='31'>31</button></center>"
    );
    $("#event_date").show();
  }
}

function month_convert(num){
  if(num==1){return "January";}else if(num==2){return "February";}else if(num==3){return "March";}else if(num==4){return "April";}else if(num==5){
    return "May";
  }else if(num==6){
    return "June";
  }else if(num==7){
    return "July";
  }else if(num==8){
    return "August";
  }else if(num==9){
    return "September";
  }else if(num==10){
    return "October";
  }else if(num==11){
    return "November";
  }else if(num==12){
    return "December";
  }else{
    return "Error";
  }
}



=======
>>>>>>> 788b7ed3a6521e1e8987b1673e6d1206093948f9
$(document).ready(function(){
  $("#Info_Title").html("Events");

  //Action: When clicking the create event button, creates dummy event baseball
  //Post: Event added to ev_list array and is displayed on page

  $("#create").click(
    function(){
      $("#Events_List").html("Created is clicked");

    }
  );

  $("#view_all").click(
    function(){
      $("#Events_List").html("View all is clicked");

    }
  );

});
