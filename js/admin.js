
var time_arr = [];
for(let i=0; i<48; i++)
{
    let obj = {active: false, attendees: "0"};
    time_arr.push(obj);
}


function clickfunc(num)
{
    time_arr[num].active = !time_arr[num].active;
}

function timeReset()
{
    for(let i=0; i<48; i++)
    {
        time_arr[i].active = false;
        time_arr[i].attendees = "0";
    }
}

function formData(form)
{
    let name = form.admin_name.value;
    let ev_name = form.event_name.value;
    let date = form.event_date.value;
    let timecheck = false;
    for(let i=0; i<48; i++)
    {
        console.log(time_arr[i].active);
        if(time_arr[i].active)
        {
            timecheck = true;
            time_arr[i].attendees = name + ",";
        }
    }
    if(name=="" || ev_name=="" || date=="" || (timecheck==false))
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
    timeReset();
    }
}


$(document).ready(function()
{
    $("#event_form").hide();
    $("#review").hide();
    $("#create_event").click(
        function()
        {
            document.getElementById("event_form").reset();
            timeReset();
            $("#review").hide();
            $("#event_review").empty();
            $("#event_time").hide();
            $("#event_form").toggle();
        });


    $("#event_time_12").hide();
    $("#event_time_24").hide();
    $("#time_select_12").click(
        function()
        {
            timeReset();
            $("#event_time_12").empty();
            $("#event_time_24").empty();
            $("#event_time_12").html
            (
                "<button class='time_button' type='button' id='12:00am' onclick = 'clickfunc(0)'>12:00am</button>"+
                "<button class='time_button' type='button' id='12:30am' onclick = 'clickfunc(1)'>12:30am</button>"+
                "<button class='time_button' type='button' id='1:00am' onclick = 'clickfunc(2)'>1:00am</button>"+
                "<button class='time_button' type='button' id='1:30am' onclick = 'clickfunc(3)'>1:30am</button>"+
                "<button class='time_button' type='button' id='2:00am' onclick = 'clickfunc(4)'>2:00am</button>"+
                "<button class='time_button' type='button' id='2:30am' onclick = 'clickfunc(5)'>2:30am</button>"+
                "<button class='time_button' type='button' id='3:00am' onclick = 'clickfunc(6)'>3:00am</button>"+
                "<button class='time_button' type='button' id='3:30am' onclick = 'clickfunc(7)'>3:30am</button>"+
                "<button class='time_button' type='button' id='4:00am' onclick = 'clickfunc(8)'>4:00am</button>"+
                "<button class='time_button' type='button' id='4:30am' onclick = 'clickfunc(9)'>4:30am</button>"+
                "<button class='time_button' type='button' id='5:00am' onclick = 'clickfunc(10)'>5:00am</button>"+
                "<button class='time_button' type='button' id='5:30am' onclick = 'clickfunc(11)'>5:30am</button>"+
                "<button class='time_button' type='button' id='6:00am' onclick = 'clickfunc(12)'>6:00am</button>"+
                "<button class='time_button' type='button' id='6:30am' onclick = 'clickfunc(13)'>6:30am</button>"+
                "<button class='time_button' type='button' id='7:00am' onclick = 'clickfunc(14)'>7:00am</button>"+
                "<button class='time_button' type='button' id='7:30am' onclick = 'clickfunc(15)'>7:30am</button>"+
                "<button class='time_button' type='button' id='8:00am' onclick = 'clickfunc(16)'>8:00am</button>"+
                "<button class='time_button' type='button' id='8:30am' onclick = 'clickfunc(17)'>8:30am</button>"+
                "<button class='time_button' type='button' id='9:00am' onclick = 'clickfunc(18)'>9:00am</button>"+
                "<button class='time_button' type='button' id='9:30am' onclick = 'clickfunc(19)'>9:30am</button>"+
                "<button class='time_button' type='button' id='10:00am' onclick = 'clickfunc(20)'>10:00am</button>"+
                "<button class='time_button' type='button' id='10:30am' onclick = 'clickfunc(21)'>10:30am</button>"+
                "<button class='time_button' type='button' id='11:00am' onclick = 'clickfunc(22)'>11:00am</button>"+
                "<button class='time_button' type='button' id='11:30am' onclick = 'clickfunc(23)'>11:30am</button>"+
                "<button class='time_button' type='button' id='12:00pm' onclick = 'clickfunc(24)'>12:00pm</button>"+
                "<button class='time_button' type='button' id='12:30pm' onclick = 'clickfunc(25)'>12:30pm</button>"+
                "<button class='time_button' type='button' id='1:00pm' onclick = 'clickfunc(26)'>1:00pm</button>"+
                "<button class='time_button' type='button' id='1:30pm' onclick = 'clickfunc(27)'>1:30pm</button>"+
                "<button class='time_button' type='button' id='2:00pm' onclick = 'clickfunc(28)'>2:00pm</button>"+
                "<button class='time_button' type='button' id='2:30pm' onclick = 'clickfunc(29)'>2:30pm</button>"+
                "<button class='time_button' type='button' id='3:00pm' onclick = 'clickfunc(30)'>3:00pm</button>"+
                "<button class='time_button' type='button' id='3:30pm' onclick = 'clickfunc(31)'>3:30pm</button>"+
                "<button class='time_button' type='button' id='4:00pm' onclick = 'clickfunc(32)'>4:00pm</button>"+
                "<button class='time_button' type='button' id='4:30pm' onclick = 'clickfunc(33)'>4:30pm</button>"+
                "<button class='time_button' type='button' id='5:00pm' onclick = 'clickfunc(34)'>5:00pm</button>"+
                "<button class='time_button' type='button' id='5:30pm' onclick = 'clickfunc(35)'>5:30pm</button>"+
                "<button class='time_button' type='button' id='6:00pm' onclick = 'clickfunc(36)'>6:00pm</button>"+
                "<button class='time_button' type='button' id='6:30pm' onclick = 'clickfunc(37)'>6:30pm</button>"+
                "<button class='time_button' type='button' id='7:00pm' onclick = 'clickfunc(38)'>7:00pm</button>"+
                "<button class='time_button' type='button' id='7:30pm' onclick = 'clickfunc(39)'>7:30pm</button>"+
                "<button class='time_button' type='button' id='8:00pm' onclick = 'clickfunc(40)'>8:00pm</button>"+
                "<button class='time_button' type='button' id='8:30pm' onclick = 'clickfunc(41)'>8:30pm</button>"+
                "<button class='time_button' type='button' id='9:00pm' onclick = 'clickfunc(42)'>9:00pm</button>"+
                "<button class='time_button' type='button' id='9:30pm' onclick = 'clickfunc(43)'>9:30pm</button>"+
                "<button class='time_button' type='button' id='10:00pm' onclick = 'clickfunc(44)'>10:00pm</button>"+
                "<button class='time_button' type='button' id='10:30pm' onclick = 'clickfunc(45)'>10:30pm</button>"+
                "<button class='time_button' type='button' id='11:00pm' onclick = 'clickfunc(46)'>11:00pm</button>"+
                "<button class='time_button' type='button' id='11:30pm' onclick = 'clickfunc(47)'>11:30pm</button>"

            );
            $('#event_time_12').toggle();
        });


    $("#time_select_24").click(
        function()
        {
            timeReset();
            $("#event_time_12").empty();
            $("#event_time_24").empty();
            $("#event_time_24").html
            (
                "<button class='time_button' type='button' id='00:00' onclick = 'clickfunc(0)'>00:00</button>"+
                "<button class='time_button' type='button' id='00:30' onclick = 'clickfunc(1)'>00:30</button>"+
                "<button class='time_button' type='button' id='1:00' onclick = 'clickfunc(2)'>1:00</button>"+
                "<button class='time_button' type='button' id='1:30' onclick = 'clickfunc(3)'>1:30</button>"+
                "<button class='time_button' type='button' id='2:00' onclick = 'clickfunc(4)'>2:00</button>"+
                "<button class='time_button' type='button' id='2:30' onclick = 'clickfunc(5)'>2:30</button>"+
                "<button class='time_button' type='button' id='3:00' onclick = 'clickfunc(6)'>3:00</button>"+
                "<button class='time_button' type='button' id='3:30' onclick = 'clickfunc(7)'>3:30</button>"+
                "<button class='time_button' type='button' id='4:00' onclick = 'clickfunc(8)'>4:00</button>"+
                "<button class='time_button' type='button' id='4:30' onclick = 'clickfunc(9)'>4:30</button>"+
                "<button class='time_button' type='button' id='5:00' onclick = 'clickfunc(10)'>5:00</button>"+
                "<button class='time_button' type='button' id='5:30' onclick = 'clickfunc(11)'>5:30</button>"+
                "<button class='time_button' type='button' id='6:00' onclick = 'clickfunc(12)'>6:00</button>"+
                "<button class='time_button' type='button' id='6:30' onclick = 'clickfunc(13)'>6:30</button>"+
                "<button class='time_button' type='button' id='7:00' onclick = 'clickfunc(14)'>7:00</button>"+
                "<button class='time_button' type='button' id='7:30' onclick = 'clickfunc(15)'>7:30</button>"+
                "<button class='time_button' type='button' id='8:00' onclick = 'clickfunc(16)'>8:00</button>"+
                "<button class='time_button' type='button' id='8:30' onclick = 'clickfunc(17)'>8:30</button>"+
                "<button class='time_button' type='button' id='9:00' onclick = 'clickfunc(18)'>9:00</button>"+
                "<button class='time_button' type='button' id='9:30' onclick = 'clickfunc(19)'>9:30</button>"+
                "<button class='time_button' type='button' id='10:00' onclick = 'clickfunc(20)'>10:00</button>"+
                "<button class='time_button' type='button' id='10:30' onclick = 'clickfunc(21)'>10:30</button>"+
                "<button class='time_button' type='button' id='11:00' onclick = 'clickfunc(22)'>11:00</button>"+
                "<button class='time_button' type='button' id='11:30' onclick = 'clickfunc(23)'>11:30</button>"+
                "<button class='time_button' type='button' id='12:00' onclick = 'clickfunc(24)'>12:00</button>"+
                "<button class='time_button' type='button' id='12:30' onclick = 'clickfunc(25)'>12:30</button>"+
                "<button class='time_button' type='button' id='13:00' onclick = 'clickfunc(26)'>13:00</button>"+
                "<button class='time_button' type='button' id='13:30' onclick = 'clickfunc(27)'>13:30</button>"+
                "<button class='time_button' type='button' id='14:00' onclick = 'clickfunc(28)'>14:00</button>"+
                "<button class='time_button' type='button' id='14:30' onclick = 'clickfunc(29)'>14:30</button>"+
                "<button class='time_button' type='button' id='15:00' onclick = 'clickfunc(30)'>15:00</button>"+
                "<button class='time_button' type='button' id='15:30' onclick = 'clickfunc(31)'>15:30</button>"+
                "<button class='time_button' type='button' id='16:00' onclick = 'clickfunc(32)'>16:00</button>"+
                "<button class='time_button' type='button' id='16:30' onclick = 'clickfunc(33)'>16:30</button>"+
                "<button class='time_button' type='button' id='17:00' onclick = 'clickfunc(34)'>17:00</button>"+
                "<button class='time_button' type='button' id='17:30' onclick = 'clickfunc(35)'>17:30</button>"+
                "<button class='time_button' type='button' id='18:00' onclick = 'clickfunc(36)'>18:00</button>"+
                "<button class='time_button' type='button' id='18:30' onclick = 'clickfunc(37)'>18:30</button>"+
                "<button class='time_button' type='button' id='19:00' onclick = 'clickfunc(38)'>19:00</button>"+
                "<button class='time_button' type='button' id='19:30' onclick = 'clickfunc(39)'>19:30</button>"+
                "<button class='time_button' type='button' id='20:00' onclick = 'clickfunc(40)'>20:00</button>"+
                "<button class='time_button' type='button' id='20:30' onclick = 'clickfunc(41)'>20:30</button>"+
                "<button class='time_button' type='button' id='21:00' onclick = 'clickfunc(42)'>21:00</button>"+
                "<button class='time_button' type='button' id='21:30' onclick = 'clickfunc(43)'>21:30</button>"+
                "<button class='time_button' type='button' id='22:00' onclick = 'clickfunc(44)'>22:00</button>"+
                "<button class='time_button' type='button' id='22:30' onclick = 'clickfunc(45)'>22:30</button>"+
                "<button class='time_button' type='button' id='23:00' onclick = 'clickfunc(46)'>23:00</button>"+
                "<button class='time_button' type='button' id='23:30' onclick = 'clickfunc(47)'>23:30</button>"
            );
            $("#event_time_24").toggle();

        });

    $("#submit").click(
        function()
        {
            formData(document.getElementById("event_form"));
        });

    $("#review_event").click(
        function()
        {
            $("#event_review").empty();
            $("#event_form").hide();
            $("#review").toggle();
        }
    );

    $("#review_submit").click(
        function()
        {
            $("#event_review").empty();
            $("#event_review").append("Work in Progress");
        }
    )


});
