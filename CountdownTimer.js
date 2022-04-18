var startTimer;
$('#reset').click(function () {
    alert1(0)
    $("#hour").html('00')
    $("#minute").html('00')
    $("#second").html('00')
    $("#setHour").html('00');
    $("#setMinute").html('00')
    $("#setSecond").html('00')
    $("#setHour").val('')
    $("#setMinute").val('')
    $("#setSecond").val('')
    stopInterval()
})

function stopInterval() {
    clearInterval(startTimer)
    startTimer = undefined;
}

$('#start').click(function () {
    if ($('#second').html() == 00 && $('#minute').html() == 00 && $('#hour').html() == 00) {
        alert("Set the Timer first")
        return
    }
    (startTimer === undefined) ? startTimer = setInterval(timer, 1000) : alert("Timer is already running")
    $('#second').html(fixStyle($('#second').html()))
    $('#minute').html(fixStyle($('#minute').html()))
    $('#hour').html(fixStyle($('#hour').html()))
})

function timer() {
    if ($('#second').html() != 0) {
        $('#second').html($('#second').html() - 1);
        $('#second').html(fixStyle($('#second').html()))
    }
    else if ($('#minute').html() != 0 && $('#second').html() == 0) {
        $('#second').html(fixStyle($('#second').html()))
        $('#second').html(59);
        $('#minute').html($('#minute').html() - 1)
        $('#minute').html(fixStyle($('#minute').html()))
    }
    else if ($('#hour').html() != 0 && $('#minute').html() == 0 && $('#second').html() == 0) {
        $('#second').html(59);
        $('#minute').html(59);
        $('#hour').html($('#hour').html() - 1)
        $('#hour').html(fixStyle($('#hour').html()))
    }
    if ($('#minute').html() == 0 && $('#hour').html() == 0 && $('#second').html() == 0) {
        $('#second').html('00');
        $('#minute').html('00');
        $('#hour').html('00');
        stopInterval()
        alert1(1)
    }
}

$('#edit').click(function () {
    if ($('#setMinute').val() > 59 || $('#setSecond').val() > 59 || $('#setHour').val() > 59) {
        fixTime();
    }

    if ($('#second').html() != '00' || $('#minute').html() != '00' || $('#hour').html() != '00') {
        alert("Press Reset first")
        return
    }

    if ($('#setMinute').val() == '' && $('#setSecond').val() == '' && $('#setHour').val() == '') {
        return
    }
    stopInterval()

    if ($('#setMinute').val() != '') {
        $('#minute').html(fixStyle($('#setMinute').val()))

    }
    else if ($('#setMinute').val() == '') {
        $('#minute').html('00')
    }

    if ($('#setSecond').val() != '') {
        $('#second').html(fixStyle($('#setSecond').val()))
    }
    else if ($('#setSecond').val() == '') {
        $('#second').html('00')
    }

    if ($('#setHour').val() != '') {
        $('#hour').html(fixStyle($('#setHour').val()))

    }
    else if ($('#setHour').val() == '') {
        $('#hour').html('00')
    }
    $('#setHour').val("")
    $('#setMinute').val("")
    $('#setSecond').val("")
})

function fixStyle(x) {
    if (x.length >= 2) {
        var digits = x.split('');
        var realDigits = digits.map(Number)
        var temproryArray = [];
        for (let index = 0; index < 2; index++) {
            temproryArray[index] = realDigits[index]
        }
        temproryArray = temproryArray.join('')
        x = temproryArray;
        return x
    }
    if (x < 10) {
        if (x == "00") {
            return
        }
        else {
            x = '0' + x;
            return (x);
        }
    }
}

function alert1(x) {
    const timeoutAudio = document.getElementById("alarm_audio");
    timeoutAudio.src = "https://sampleswap.org/mp3/artist/92209/construct_Set-Fire-to-the-Rain-Dubst-160.mp3";
    timeoutAudio.load();
    if (x == 1) timeoutAudio.play();
    else { timeoutAudio.pause(); }
}

function fixTime() {
    alert("Please Enter The number between 0 and 59");
    $("#setHour").val('')
    $("#setMinute").val('')
    $("#setSecond").val('')
    return;
}

