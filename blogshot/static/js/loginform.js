 $(document).ready(function(){
    $(".come_in").removeAttr("href");
    $(".come_in").click(function(){
       $("#login_form_main").show();
       $("#autoris_text").text('Вход').show();
       $("#close_window").show();
       $("#login_form").addClass("login_form_js");
       $("#popup").addClass("black");
       $("#popup").slideDown("normal");
       $("#login_form").slideDown("slow");
    });
    $("#close_window").click(function(){
       $("#login_form").slideUp("slow");
       $("#popup").slideUp("normal");
       $("#popup").removeClass("black");
    });
 });