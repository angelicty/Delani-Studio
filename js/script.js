$(document).ready(function(){
    $("#design1").click(function(){
        $(".design2").toggle()
    });
    $("#development1").click(function(){
        $(".development").toggle()
    });
    $("#product1").click(function(){
        $(".product2").toggle()
    });
    $("form").submit(function(event){
        var names=$("#name").val();
        var emails=$("#email").val();
        var messages=$("#message").val();

        alert(names+" Your message have been recieved");

        event.preventDefault();
    });
});

