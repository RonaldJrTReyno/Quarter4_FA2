function sub(){
    var test = document.getElementById("test");
    var table = document.getElementById("result");
    var rows = parseInt(document.getElementById("n1").value);
    var cols = parseInt(document.getElementById("n2").value);
    
    if (rows <= 2 || rows >= 10 || cols >= 10 || cols <= 2) {
        alert("Please enter numbers between 2 and 10");
    } else {
        table.innerHTML = " ";
        table.style.border = "1px solid";

        for (var x = 0; x < rows; x++) {
            var newRow = table.insertRow(-1);
            for (var y = cols; y > 0; y--) {
                var newCell = newRow.insertCell(0);
                newCell.innerHTML = y+(y*x);
                newCell.style.border = "1px solid";
            }
        }
        return false;
    }  
}