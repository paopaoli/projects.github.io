
//apertura pagina progetti
var madre_aperto = false;

$( document ).ready(function() {
    console.log( "ready!" );
    $("#mail-icon").click(function(){
      console.log("cliccato sull'icona");
      var mail_address = document.createElement("input");
      mail_address.value = "huiling.li.cn@gmail.com";
      document.body.appendChild(mail_address);
      mail_address.select();
      document.execCommand("Copy");
      mail_address.remove();
      console.log( "ho copiato la mail e mo cambio pure il messaggio" );
      $("#copy-link").html(" bravo!");
      $("#copy-link").addClass("bravo-on");
    });


    //hover thumb progetti
    $("#madre h1").hover(
      function() {
    $("#madre").addClass( "madre-thumb-hover " );
      },
      function() {
    $("#madre").removeClass( "madre-thumb-hover " );}
    );



      $("#madre h1").click(function(){
        if (!madre_aperto){
          var divClicked = $("#madre").offset();
          let divTop = divClicked.top;
          //window.scrollTo(0, divTop);
          window.scrollTo({
            top: divTop,
            left: 0,
            behavior: 'smooth'
          });
          console.log(divTop + " --- " + window.scrollY);
          $("#madre").addClass("opened-project");
          //$("#madre").css({width : "100%", height: "100vh", "background-color":"#EAEAEA", "background-image":"none"});
          $("#grc").css({width : "100%"});
          //$("#madre").addClass("opened-project-h");
          console.log("al momento madre aperto vale" + madre_aperto);
          madre_aperto = true;
          console.log("cliccato quando era chiuso");
          console.log("ora madre aperto vale" + madre_aperto);
        } else {
          $("#madre").removeClass("opened-project");
          $("#grc").css({width : "50%"});
          //$("#grc").css({width : "50%", position: "absolute", right:"0"});
        //$("#madre").css({width : "50%", height: "auto"});
        madre_aperto = false;
        console.log("cliccato quando era aperto");
        }
      });


    $("#grc h1").click(function(){
      $("#grc").addClass("opened-project");
      $("#madre").css({"grid-row-start" : "2",
        "grid-row-end": "3",
        "grid-column-start": "1",
        "grid-column-end": "3",
       });
    });


    let divs = document.querySelectorAll(".element");
divs.forEach(div => {
    div.addEventListener("click", event =>{
        let divTop = div.offsetTop;
        window.scrollTo(0, divTop);
        console.log(divTop + " --- " + window.scrollY);
    });
});




});
