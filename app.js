var div = document.getElementById('DSEGClock');
    var date = document.getElementById('date');
    var day = document.getElementById('din');
    var seconds = document.getElementById('seconds-front');
    var session = document.getElementById('sessin');
    var dat = document.getElementById('date');

    function time() {
        div.innerHTML = "";
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var sesn = "AM";

        if (h > 12) {
            h = h - 12;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }

        if (h == 0) {
            h = 12;
        }
        if (h => 12) {
            sesn = "PM";
        }

        if (s < 10) {
            s = "0" + s;
        }
        var mnth = d.getMonth() + 1;
        var date = d.getDate();
        var year = d.getFullYear();
        var daylist = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        var fa_day = d.getDay();
        fa_day = daylist[fa_day];

        if (date < 10) {
            date = "0" + date;
        }
        if (mnth < 10) {
            mnth = "0" + 0;
        }
        div.innerHTML = h + ":" + m;
        day.innerHTML = fa_day;
        seconds.innerHTML = s;
        session.innerHTML = sesn;
        dat.innerHTML = date + "-" + mnth + "-" + year;

    }
    setInterval(time, 1000);