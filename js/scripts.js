var randomNumber = [];
function pingPong (input){
  for (var index = 1; index <= input; index++){

    if(index % 15 === 0){
      randomNumber.push("ping-pong");
    }
    else if(index % 5 === 0){
      randomNumber.push("pong");
    }
    else if(index % 3 === 0){
      randomNumber.push("ping");
    }
    else{
      randomNumber.push(index);
    }
  }
}
$(document).ready(function(event){
   $("form#ping-pong").submit(function(event){
      event.preventDefault();
      var input =$("input#userInput").val();

      pingPong(input);


      randomNumber.forEach(function(element){
         $("#result").append("<li>" + element + "</li>");
      });
   });
});
