
let time_arr = [];
for(let i=0; i<48; i++)
{
    let obj = {active: false, attendees: 0};
    time_arr.push(obj);
}

function formData(form)
{
    let name = form.admin_name.value;
    let ev_name = form.event_name.value;
    let date = form.event_date.value;
    let timecheck = false;
    for(let i=0; i<time_arr.length; i++)
    {
        if(time_arr[i].active)
        {
            timecheck = true;
        }
    }
    if(name=="" || ev_name=="" || date=="" || !timecheck)
    {
        alert("All fields are mandatory!");
    }
    else
    {
    /////////////////////////////////////////////////////////////////////
    //Adapted from code found at https://www.w3schools.com/php/php_ajax_database.asp
    // 9/10/2017 15:25

    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    { // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (this.readyState==4 && this.status==200)
        {
        document.getElementById("txtHint").innerHTML=this.responseText;
        }
    }
    var PageToSendTo = "php/saveEventToDB.php?";
    var UrlToSend = PageToSendTo + "name=" + name + "&event_name=" + ev_name + "&date=" + date;
    xmlhttp.open("GET", UrlToSend, false);
    xmlhttp.send();
    //END ADAPTATION
    //////////////////////////////////////////////////////////////////////
    form.reset();

    $("#Events").append("Admin Name: "+name+"<br>");
    $("#Events").append("Event Name: "+ev_name+"<br>");
    $("#Events").append("Event Date: "+date+"<br>");
    }
}

$(document).ready(function()
{


    $("#time_select_12").click(
        function()
        {
            for(let i=0; i<48; i++)
            {
                time_arr[i].active = false;
                time_arr[i].attendees = 0;
            }
            $("#event_time").empty();
            $("#event_time").html
            (
                "<button class='time_button' type='button' id='12:00am'>12:00am</button>"+"<button class='time_button' type='button' id='12:30am'>12:30am</button>"+"<button class='time_button' type='button' id='1:00am'>1:00am</button>"+"<button class='time_button' type='button' id='1:30am'>1:30am</button>"+
                "<button class='time_button' type='button' id='2:00am'>2:00am</button>"+"<button class='time_button' type='button' id='2:30am'>2:30am</button>"+"<button class='time_button' type='button' id='3:00am'>3:00am</button>"+"<button class='time_button' type='button' id='3:30am'>3:30am</button>"+
                "<button class='time_button' type='button' id='4:00am'>4:00am</button>"+"<button class='time_button' type='button' id='4:30am'>4:30am</button>"+"<button class='time_button' type='button' id='5:00am'>5:00am</button>"+"<button class='time_button' type='button' id='5:30am'>5:30am</button>"+
                "<button class='time_button' type='button' id='6:00am'>6:00am</button>"+"<button class='time_button' type='button' id='6:30am'>6:30am</button>"+"<button class='time_button' type='button' id='7:00am'>7:00am</button>"+"<button class='time_button' type='button' id='7:30am'>7:30am</button>"+
                "<button class='time_button' type='button' id='8:00am'>8:00am</button>"+"<button class='time_button' type='button' id='8:30am'>8:30am</button>"+"<button class='time_button' type='button' id='9:00am'>9:00am</button>"+"<button class='time_button' type='button' id='9:30am'>9:30am</button>"+
                "<button class='time_button' type='button' id='10:00am'>10:00am</button>"+"<button class='time_button' type='button' id='10:30am'>10:30am</button>"+"<button class='time_button' type='button' id='11:00am'>11:00am</button>"+"<button class='time_button' type='button' id='11:30am'>11:30am</button>"+
                "<button class='time_button' type='button' id='12:00pm'>12:00pm</button>"+"<button class='time_button'  type='button' id='12:30pm'>12:30pm</button>"+"<button class='time_button'  type='button' id='1:00pm'>1:00pm</button>"+"<button class='time_button'  type='button' id='1:30pm'>1:30pm</button>"+
                "<button class='time_button' type='button' id='2:00pm'>2:00pm</button>"+"<button class='time_button'  type='button' id='2:30pm'>2:30pm</button>"+"<button class='time_button'  type='button' id='3:00pm'>3:00pm</button>"+"<button class='time_button'  type='button' id='3:30pm'>3:30pm</button>"+
                "<button class='time_button' type='button' id='4:00pm'>4:00pm</button>"+"<button class='time_button' type='button' id='4:30pm'>4:30pm</button>"+"<button class='time_button' type='button' id='5:00pm'>5:00pm</button>"+"<button class='time_button' type='button' id='5:30pm'>5:30pm</button>"+
                "<button class='time_button' type='button' id='6:00pm'>6:00pm</button>"+"<button class='time_button' type='button' id='6:30pm'>6:30pm</button>"+"<button class='time_button' type='button' id='7:00pm'>7:00pm</button>"+"<button class='time_button' type='button' id='7:30pm'>7:30pm</button>"+
                "<button class='time_button' type='button' id='8:00pm'>8:00pm</button>"+"<button class='time_button' type='button' id='8:30pm'>8:30pm</button>"+"<button class='time_button' type='button' id='9:00pm'>9:00pm</button>"+"<button class='time_button' type='button' id='9:30pm'>9:30pm</button>"+
                "<button class='time_button' type='button' id='10:00pm'>10:00pm</button>"+"<button class='time_button' type='button' id='10:30pm'>10:30pm</button>"+"<button class='time_button' type='button' id='11:00pm'>11:00pm</button>"+"<button class='time_button' type='button'    id='11:30pm'>11:30pm</button>"

            );
            $('#event_time').show();


        });
        $("#12:00am").click(function(){time_arr[0].active = (!time_arr[0].active); time_arr[0].attendees = time_arr[0].active? 1:0});
        $("#12:30am").click(function(){time_arr[1].active = (!time_arr[1].active); time_arr[1].attendees = time_arr[1].active? 1:0});
        $("#1:00am").click(function(){time_arr[2].active = (!time_arr[2].active); time_arr[2].attendees = time_arr[2].active? 1:0});
        $("#1:30am").click(function(){time_arr[3].active = (!time_arr[3].active); time_arr[3].attendees = time_arr[3].active? 1:0});
        $("#2:00am").click(function(){time_arr[4].active = (!time_arr[4].active); time_arr[4].attendees = time_arr[4].active? 1:0});
        $("#2:30am").click(function(){time_arr[5].active = (!time_arr[5].active); time_arr[5].attendees = time_arr[5].active? 1:0});
        $("#3:00am").click(function(){time_arr[6].active = (!time_arr[6].active); time_arr[6].attendees = time_arr[6].active? 1:0});
        $("#3:30am").click(function(){time_arr[7].active = (!time_arr[7].active); time_arr[7].attendees = time_arr[7].active? 1:0});
        $("#4:00am").click(function(){time_arr[8].active = (!time_arr[8].active); time_arr[8].attendees = time_arr[8].active? 1:0});
        $("#4:30am").click(function(){time_arr[9].active = (!time_arr[9].active); time_arr[9].attendees = time_arr[9].active? 1:0});
        $("#5:00am").click(function(){time_arr[10].active = (!time_arr[10].active); time_arr[10].attendees = time_arr[10].active? 1:0});
        $("#5:30am").click(function(){time_arr[11].active = (!time_arr[11].active); time_arr[11].attendees = time_arr[11].active? 1:0});
        $("#6:00am").click(function(){time_arr[12].active = (!time_arr[12].active); time_arr[12].attendees = time_arr[12].active? 1:0});
        $("#6:30am").click(function(){time_arr[13].active = (!time_arr[13].active); time_arr[13].attendees = time_arr[13].active? 1:0});
        $("#7:00am").click(function(){time_arr[14].active = (!time_arr[14].active); time_arr[14].attendees = time_arr[14].active? 1:0});
        $("#7:30am").click(function(){time_arr[15].active = (!time_arr[15].active); time_arr[15].attendees = time_arr[15].active? 1:0});
        $("#8:00am").click(function(){time_arr[16].active = (!time_arr[16].active); time_arr[16].attendees = time_arr[16].active? 1:0});
        $("#8:30am").click(function(){time_arr[17].active = (!time_arr[17].active); time_arr[17].attendees = time_arr[17].active? 1:0});
        $("#9:00am").click(function(){time_arr[18].active = (!time_arr[18].active); time_arr[18].attendees = time_arr[18].active? 1:0});
        $("#9:30am").click(function(){time_arr[19].active = (!time_arr[19].active); time_arr[19].attendees = time_arr[19].active? 1:0});
        $("#10:30am").click(function(){time_arr[20].active = (!time_arr[20].active); time_arr[20].attendees = time_arr[20].active? 1:0});
        $("#10:30am").click(function(){time_arr[21].active = (!time_arr[21].active); time_arr[21].attendees = time_arr[21].active? 1:0});
        $("#11:00am").click(function(){time_arr[22].active = (!time_arr[22].active); time_arr[22].attendees = time_arr[22].active? 1:0});
        $("#11:30am").click(function(){time_arr[23].active = (!time_arr[23].active); time_arr[23].attendees = time_arr[23].active? 1:0});
        $("#12:00pm").click(function(){time_arr[24].active = (!time_arr[24].active); time_arr[24].attendees = time_arr[24].active? 1:0});
        $("#12:30pm").click(function(){time_arr[25].active = (!time_arr[25].active); time_arr[25].attendees = time_arr[25].active? 1:0});
        $("#1:00pm").click(function(){time_arr[26].active = (!time_arr[26].active); time_arr[26].attendees = time_arr[26].active? 1:0});
        $("#1:30pm").click(function(){time_arr[27].active = (!time_arr[27].active); time_arr[27].attendees = time_arr[27].active? 1:0});
        $("#2:00pm").click(function(){time_arr[28].active = (!time_arr[28].active); time_arr[28].attendees = time_arr[28].active? 1:0});
        $("#2:30pm").click(function(){time_arr[29].active = (!time_arr[29].active); time_arr[29].attendees = time_arr[29].active? 1:0});
        $("#3:00pm").click(function(){time_arr[30].active = (!time_arr[30].active); time_arr[30].attendees = time_arr[30].active? 1:0});
        $("#3:30pm").click(function(){time_arr[31].active = (!time_arr[31].active); time_arr[31].attendees = time_arr[31].active? 1:0});
        $("#4:00pm").click(function(){time_arr[32].active = (!time_arr[32].active); time_arr[32].attendees = time_arr[32].active? 1:0});
        $("#4:30pm").click(function(){time_arr[33].active = (!time_arr[33].active); time_arr[33].attendees = time_arr[33].active? 1:0});
        $("#5:00pm").click(function(){time_arr[34].active = (!time_arr[34].active); time_arr[34].attendees = time_arr[34].active? 1:0});
        $("#5:30pm").click(function(){time_arr[35].active = (!time_arr[35].active); time_arr[35].attendees = time_arr[35].active? 1:0});
        $("#6:00pm").click(function(){time_arr[36].active = (!time_arr[36].active); time_arr[36].attendees = time_arr[36].active? 1:0});
        $("#6:30pm").click(function(){time_arr[37].active = (!time_arr[37].active); time_arr[37].attendees = time_arr[37].active? 1:0});
        $("#7:00pm").click(function(){time_arr[38].active = (!time_arr[38].active); time_arr[38].attendees = time_arr[38].active? 1:0});
        $("#7:30pm").click(function(){time_arr[39].active = (!time_arr[39].active); time_arr[39].attendees = time_arr[39].active? 1:0});
        $("#8:00pm").click(function(){time_arr[40].active = (!time_arr[40].active); time_arr[40].attendees = time_arr[40].active? 1:0});
        $("#8:30pm").click(function(){time_arr[41].active = (!time_arr[41].active); time_arr[41].attendees = time_arr[41].active? 1:0});
        $("#9:00pm").click(function(){time_arr[42].active = (!time_arr[42].active); time_arr[42].attendees = time_arr[42].active? 1:0});
        $("#9:30pm").click(function(){time_arr[43].active = (!time_arr[43].active); time_arr[43].attendees = time_arr[43].active? 1:0});
        $("#10:00pm").click(function(){time_arr[44].active = (!time_arr[44].active); time_arr[44].attendees = time_arr[44].active? 1:0});
        $("#10:30pm").click(function(){time_arr[45].active = (!time_arr[45].active); time_arr[45].attendees = time_arr[45].active? 1:0});
        $("#11:00pm").click(function(){time_arr[46].active = (!time_arr[46].active); time_arr[46].attendees = time_arr[46].active? 1:0});
        $("#11:30pm").click(function(){time_arr[47].active = (!time_arr[47].active); time_arr[47].attendees = time_arr[47].active? 1:0});


    $("#time_select_24").click(
        function()
        {
            for(let i=0; i<48; i++)
            {
                time_arr[i].active = false;
                time_arr[i].attendees = 0;
            }
            $("#event_time").empty();
            $("#event_time").html
            (
                "<button class='time_button' type='button' id='00:00'>00:00</button>"+"<button class='time_button' type='button' id='00:30'>00:30</button>"+"<button class='time_button' type='button' id='1:00'>1:00</button>"+"<button class='time_button' type='button' id='1:30'>1:30</button>"+
                "<button class='time_button' type='button' id='2:00'>2:00</button>"+"<button class='time_button' type='button' id='2:30'>2:30</button>"+"<button class='time_button' type='button' id='3:00'>3:00</button>"+"<button class='time_button' type='button' id='3:30'>3:30</button>"+
                "<button class='time_button' type='button' id='4:00'>4:00</button>"+"<button class='time_button' type='button' id='4:30'>4:30</button>"+"<button class='time_button' type='button' id='5:00'>5:00</button>"+"<button class='time_button' type='button' id='5:30'>5:30</button>"+
                "<button class='time_button' type='button' id='6:00'>6:00</button>"+"<button class='time_button' type='button' id='6:30'>6:30</button>"+"<button class='time_button' type='button' id='7:00'>7:00</button>"+"<button class='time_button' type='button' id='7:30'>7:30</button>"+
                "<button class='time_button' type='button' id='8:00'>8:00</button>"+"<button class='time_button' type='button' id='8:30'>8:30</button>"+"<button class='time_button' type='button' id='9:00'>9:00</button>"+"<button class='time_button' type='button' id='9:30'>9:30</button>"+
                "<button class='time_button' type='button' id='10:00'>10:00</button>"+"<button class='time_button' type='button' id='10:30'>10:30</button>"+"<button class='time_button' type='button' id='11:00'>11:00</button>"+"<button class='time_button' type='button' id='11:30'>11:30</button>"+
                "<button class='time_button' type='button' id='12:00'>12:00</button>"+"<button class='time_button' type='button' id='12:30'>12:30</button>"+"<button class='time_button' type='button' id='13:00'>13:00</button>"+"<button class='time_button' type='button' id='13:30'>13:30</button>"+
                "<button class='time_button' type='button' id='14:00'>14:00</button>"+"<button class='time_button' type='button' id='14:30'>14:30</button>"+"<button class='time_button' type='button' id='15:00'>15:00</button>"+"<button class='time_button' type='button' id='15:30'>15:30</button>"+
                "<button class='time_button' type='button' id='16:00'>16:00</button>"+"<button class='time_button' type='button' id='16:30'>16:30</button>"+"<button class='time_button' type='button' id='17:00'>17:00</button>"+"<button class='time_button' type='button' id='17:30'>17:30</button>"+
                "<button class='time_button' type='button' id='18:00'>18:00</button>"+"<button class='time_button' type='button' id='18:30'>18:30</button>"+"<button class='time_button' type='button' id='19:00'>19:00</button>"+"<button class='time_button' type='button' id='19:30'>19:30</button>"+
                "<button class='time_button' type='button' id='20:00'>20:00</button>"+"<button class='time_button' type='button' id='20:30'>20:30</button>"+"<button class='time_button' type='button' id='21:00'>21:00</button>"+"<button class='time_button' type='button' id='21:30'>21:30</button>"+
                "<button class='time_button' type='button' id='22:00'>22:00</button>"+"<button class='time_button' type='button' id='22:30'>22:30</button>"+"<button class='time_button' type='button' id='23:00'>23:00</button>"+"<button class='time_button' type='button' id='23:30'>23:30</button>"
            );
            $("#event_time").show();

            $("#00:00").click(function(){time_arr[0].active = (!time_arr[0].active); time_arr[0].attendees = time_arr[0].active? 1:0});
            $("#00:30").click(function(){time_arr[1].active = (!time_arr[1].active); time_arr[1].attendees = time_arr[1].active? 1:0});
            $("#1:00").click(function(){time_arr[2].active = (!time_arr[2].active); time_arr[2].attendees = time_arr[2].active? 1:0});
            $("#1:30").click(function(){time_arr[3].active = (!time_arr[3].active); time_arr[3].attendees = time_arr[3].active? 1:0});
            $("#2:00").click(function(){time_arr[4].active = (!time_arr[4].active); time_arr[4].attendees = time_arr[4].active? 1:0});
            $("#2:30").click(function(){time_arr[5].active = (!time_arr[5].active); time_arr[5].attendees = time_arr[5].active? 1:0});
            $("#3:00").click(function(){time_arr[6].active = (!time_arr[6].active); time_arr[6].attendees = time_arr[6].active? 1:0});
            $("#3:30").click(function(){time_arr[7].active = (!time_arr[7].active); time_arr[7].attendees = time_arr[7].active? 1:0});
            $("#4:00").click(function(){time_arr[8].active = (!time_arr[8].active); time_arr[8].attendees = time_arr[8].active? 1:0});
            $("#4:30").click(function(){time_arr[9].active = (!time_arr[9].active); time_arr[9].attendees = time_arr[9].active? 1:0});
            $("#5:00").click(function(){time_arr[10].active = (!time_arr[10].active); time_arr[10].attendees = time_arr[10].active? 1:0});
            $("#5:30").click(function(){time_arr[11].active = (!time_arr[11].active); time_arr[11].attendees = time_arr[11].active? 1:0});
            $("#6:00").click(function(){time_arr[12].active = (!time_arr[12].active); time_arr[12].attendees = time_arr[12].active? 1:0});
            $("#6:30").click(function(){time_arr[13].active = (!time_arr[13].active); time_arr[13].attendees = time_arr[13].active? 1:0});
            $("#7:00").click(function(){time_arr[14].active = (!time_arr[14].active); time_arr[14].attendees = time_arr[14].active? 1:0});
            $("#7:30").click(function(){time_arr[15].active = (!time_arr[15].active); time_arr[15].attendees = time_arr[15].active? 1:0});
            $("#8:00").click(function(){time_arr[16].active = (!time_arr[16].active); time_arr[16].attendees = time_arr[16].active? 1:0});
            $("#8:30").click(function(){time_arr[17].active = (!time_arr[17].active); time_arr[17].attendees = time_arr[17].active? 1:0});
            $("#9:00").click(function(){time_arr[18].active = (!time_arr[18].active); time_arr[18].attendees = time_arr[18].active? 1:0});
            $("#9:30").click(function(){time_arr[19].active = (!time_arr[19].active); time_arr[19].attendees = time_arr[19].active? 1:0});
            $("#10:30").click(function(){time_arr[20].active = (!time_arr[20].active); time_arr[20].attendees = time_arr[20].active? 1:0});
            $("#10:30").click(function(){time_arr[21].active = (!time_arr[21].active); time_arr[21].attendees = time_arr[21].active? 1:0});
            $("#11:00").click(function(){time_arr[22].active = (!time_arr[22].active); time_arr[22].attendees = time_arr[22].active? 1:0});
            $("#11:30").click(function(){time_arr[23].active = (!time_arr[23].active); time_arr[23].attendees = time_arr[23].active? 1:0});
            $("#12:00").click(function(){time_arr[24].active = (!time_arr[24].active); time_arr[24].attendees = time_arr[24].active? 1:0});
            $("#12:30").click(function(){time_arr[25].active = (!time_arr[25].active); time_arr[25].attendees = time_arr[25].active? 1:0});
            $("#13:00").click(function(){time_arr[26].active = (!time_arr[26].active); time_arr[26].attendees = time_arr[26].active? 1:0});
            $("#13:30").click(function(){time_arr[27].active = (!time_arr[27].active); time_arr[27].attendees = time_arr[27].active? 1:0});
            $("#14:00").click(function(){time_arr[28].active = (!time_arr[28].active); time_arr[28].attendees = time_arr[28].active? 1:0});
            $("#14:30").click(function(){time_arr[29].active = (!time_arr[29].active); time_arr[29].attendees = time_arr[29].active? 1:0});
            $("#15:00").click(function(){time_arr[30].active = (!time_arr[30].active); time_arr[30].attendees = time_arr[30].active? 1:0});
            $("#15:30").click(function(){time_arr[31].active = (!time_arr[31].active); time_arr[31].attendees = time_arr[31].active? 1:0});
            $("#16:00").click(function(){time_arr[32].active = (!time_arr[32].active); time_arr[32].attendees = time_arr[32].active? 1:0});
            $("#16:30").click(function(){time_arr[33].active = (!time_arr[33].active); time_arr[33].attendees = time_arr[33].active? 1:0});
            $("#17:00").click(function(){time_arr[34].active = (!time_arr[34].active); time_arr[34].attendees = time_arr[34].active? 1:0});
            $("#17:30").click(function(){time_arr[35].active = (!time_arr[35].active); time_arr[35].attendees = time_arr[35].active? 1:0});
            $("#18:00").click(function(){time_arr[36].active = (!time_arr[36].active); time_arr[36].attendees = time_arr[36].active? 1:0});
            $("#18:30").click(function(){time_arr[37].active = (!time_arr[37].active); time_arr[37].attendees = time_arr[37].active? 1:0});
            $("#19:00").click(function(){time_arr[38].active = (!time_arr[38].active); time_arr[38].attendees = time_arr[38].active? 1:0});
            $("#19:30").click(function(){time_arr[39].active = (!time_arr[39].active); time_arr[39].attendees = time_arr[39].active? 1:0});
            $("#20:00").click(function(){time_arr[40].active = (!time_arr[40].active); time_arr[40].attendees = time_arr[40].active? 1:0});
            $("#20:30").click(function(){time_arr[41].active = (!time_arr[41].active); time_arr[41].attendees = time_arr[41].active? 1:0});
            $("#21:00").click(function(){time_arr[42].active = (!time_arr[42].active); time_arr[42].attendees = time_arr[42].active? 1:0});
            $("#21:30").click(function(){time_arr[43].active = (!time_arr[43].active); time_arr[43].attendees = time_arr[43].active? 1:0});
            $("#22:00").click(function(){time_arr[44].active = (!time_arr[44].active); time_arr[44].attendees = time_arr[44].active? 1:0});
            $("#22:30").click(function(){time_arr[45].active = (!time_arr[45].active); time_arr[45].attendees = time_arr[45].active? 1:0});
            $("#23:00").click(function(){time_arr[46].active = (!time_arr[46].active); time_arr[46].attendees = time_arr[46].active? 1:0});
            $("#23:30").click(function(){time_arr[47].active = (!time_arr[47].active); time_arr[47].attendees = time_arr[47].active? 1:0});
        });

});
