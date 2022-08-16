//////////// GLOBAL veriables ////////////
        var todoholder = [];
        var newToDoHolder = [];
        var newHolder = [];
// BEGIN - Add each todo list item and set priority level
// Obtains user's input for the priority level and each task description and output current list to user
function AddToDo() {
        var rows = "";
        var todoitem = document.getElementById("todoitem").value;
        var prioritylvl = document.getElementById("prioritylvl").value;
        rows += "<td>" + todoitem + "</td><td>" + prioritylvl + "</td>";
        var tbody = document.querySelector("#list tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
// Push values into new array, remove commas and reset user form for next round of inputs.
        todoholder[todoholder.length] = [prioritylvl, " &#10170 ", todoitem, "<br />"].join(' ');
        document.getElementById("main_form").reset();
    }
// END - AddToDo()

// BEGIN - Sort and output prioritized list and accomodate new data by removing old list data.
function Prioritize() {
        todoholder.sort(function(a,b) {
        return a[0]-b[0]
    });

document.getElementById('new_list').innerHTML = "<br />Your Prioritized List:" + "<br /><br />" + "<p>" + todoholder.join(' ') + "</p>" + "<br /> <p id=\"new-message\">Feel free to add any additional things you need to do!</p>";
document.getElementById("current_list").style.display = "none";
document.getElementById("current_list_header").style.display = "none";
}
// END - Prioritize()

// BEGIN - PDF download of to-do list and reset #new-list for new list

//BOM prepended to each string and low-quality formatting ***Fix***
//Overlapping strings on resubmition of PDF (download)  ***Fix***
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
$('#cmd').click(function () {
    doc.fromHTML($('#new_list').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    }); 
    doc.save('to-do.pdf');

});
// END - PDF function()