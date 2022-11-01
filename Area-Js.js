function cal(){ 
    const select = document.getElementById("select");
    const selectValue = select.options[select.selectedIndex].value;

    const input1 = document.getElementById("lenrec").value;
    const inpu2 = document.getElementById("widrec").value;
    const height = document.getElementById("hrec").value;
 

    if (selectValue === "trapezoid") {
      if (height <= 0 || input1 <= 0 || inpu2 <= 0) {
        alert("you must input base1, bse2 and height to get results (numbers cant be negative)")
      }
      else if(height != Number || input1 != Number || inpu2 != Number){
        alert("you must enter a number")
      }
      else {
        alert(input1 + inpu2 / 2 * height + " sq.ft");
      }
    }
    if (selectValue === "rectangle") {
      if (input1 <= 0 || inpu2 <= 0) {

      alert("you must enter Length and Width to get results (numbers cant be negative)")
    }
    else if(input1 != Number || inpu2 != Number){
      alert("you must enter a number")
    }
      else{
      alert(input1 * inpu2 + " sq.ft")
    }
    }
    if(selectValue === "triangle"){
      if(input1 <= 0 || height <= 0){
        alert("base1 and hieght must be filled in to get results")
      }
      else if(height != Number || input1 != Number){
        alert("you must enter a number")
      }
      else{
      alert(input1 * height / 2 + " sq.ft")
    }
    }
    if (selectValue == "square") {
      if (input1 <= 0) {
        alert("side mustbe filled in to get results")
      }
      else if(input1 != Number){
        alert("you must enter a number")
      }
      else{
      alert(input1 * input1 + " sq.ft")
      }
    }
    if (selectValue == "circle") {
      if (inpu2 <= 0) {
        alert("radius must be filled in to get results")
      }
      else if(inpu2 != Number){
        alert("you must enter a number")
      }
      else{
      alert(3.14 * (inpu2 * inpu2) + " sq.ft")
    }
    }
    if (selectValue == "parallelogram") {
      if (input1 <= 0 || height <= 0) {
        alert("you must fill in base1 and hieght to get results")
      }
      else if(height != Number || input1 != Number){
        alert("you must enter a number")
      } else {
        alert(input1 * height || inpu2 * height+" sq. ft");
      }
    }
};
