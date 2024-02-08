function sendData() {
    var ip = ""; // آی‌پی کاربر
    var location = ""; // موقعیت جغرافیایی کاربر

    // دریافت آی‌پی
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ip = data.ip;
        });

    // دریافت موقعیت جغرافیایی
    navigator.geolocation.getCurrentPosition(position => {
        location = position.coords.latitude + "," + position.coords.longitude;

        // ارسال اطلاعات به سرور
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // عملیات ارسال موفق
            }
        };
        xhttp.open("POST", "save_data.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("ip=" + ip + "&location=" + location);
    });
}
