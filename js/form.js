var img = document.createElement("IMG");
img.src = "images/thank_you.jpg";

$(function() {
    $('#btn-send').click(sendForm);
});
function sendForm(e) {
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/loveacmilan27@gmail.com",
    method : "POST",
    data: {
        name: $('#yourname').val(),
        email: $('#client-email').val(),
        comment: $('#yourtext').val()
    
    },
    dataType: "json"
})
.done(function() {
    $('.question') .html('<img class="thanks" src="images/thank_you.jpg">');
})
}

