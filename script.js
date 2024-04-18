$(document).ready(function() {
    $("#calculateAge").click(function() {
        var dob = new Date($("#dob").val());
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        $("#result").text("Your age is: " + age);
    });
});
