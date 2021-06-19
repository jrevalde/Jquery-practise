//First check to see if the jquery is ready and has finished loading.
//If you place the jquery link at bottom of the html body then this step is not needed

// "$" character is equivalent to "document.querySelector" in jquery
$(document).ready(function(){

    // how to add css via jquery directly $("h1").css("color", "red");
    
    //the better way is to use jquery to add a class instead. 
    //this is way is in line with the separation of concerns design

    $("h1").addClass("big-title stupid-font");

    //jquery can also remove class

    $("h1").removeClass("big-title");

    //jquery can check if a an element has a class
    if ($("h1").hasClass("stupid-font"))
    {
        alert("has stupid font.");
    }

    //Manipulate the text with jquery
    $("h1").text("CUMMA");

    //jquery equivalent of innerHtml
    $("button").html("<strong>jubba Jubba</strong>");

    //setting attributes in jquery
    $("img").attr("src","images/Kidney-Beans-edited-480x320.jpg");

    //event listeners in jquery
    $("h1").click(function(){
        $("h1").css("color", "pink");
    });

    //listening for events in an array of values
    $("button").click(function(){
        $("h1").css("color", "red");
    })

    //Event listener Challenge. pressing a key changes the H1 inner html to the key that was pressed.

    //Step 1, listen for a key being pressed on within the document
    //Step 2, Change the text or innerhtml of the h1 element to the value of the keypress
    $(document).keypress(function(event){
        //the key that was pressed
        let key_pressed = event.key;
        console.log(key_pressed);//just to check that the variable is storing the intended value
        $("h1").text(key_pressed);

    })

    //another more general way to use Jquery even listener. (this doesn't work atm.)
    /*  $("h1").on("hover", function(){
        $("h1").css("color", "purple");
    }) */  
    $("h1").hover(function(){
        $("h1").css("color", "purple");
    })

    
})
