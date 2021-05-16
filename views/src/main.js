function onlyNumberKey(evt) {
    // console.log(evt);
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}



var subject = 1;
var number = 1;
var Credit_score = 1;
var marks = 1;

function addsubject() {
    var max = 79;
    if (subject <= max) {
        subject++;
        number++;
        // Credit_score++;
        // marks++;
        var objTo = document.getElementById('new_fields');
        var divtest = document.createElement("tr");
        divtest.innerHTML = '<th scope="row" style="padding-left: 10px;" >' + number + '</th> <td>subject ' + subject + '</td><td><input type="number" class="form-control" name="Credit_Scored[]" id="credit" autoComplete="off" data-toggle="tooltip" data-placement="top" title="Credit of Subject"  onkeypress="return onlyNumberKey(event)" oninvalid="inputfeedback();" required></td><td><input type="number" class="form-control" name="marks[]" id="marks" autoComplete="off" data-toggle="tooltip" data-placement="top" title="Marks Scored"  onkeypress="return onlyNumberKey(event)" oninvalid="inputfeedback();" required></td>';

        objTo.appendChild(divtest);

    } else {
        swal("Cannot Add!", "Maximum limt reached!!", "info");
    }

}


function delete_field() {
    if (subject > 1) {
        var list = document.getElementById("new_fields");
        list.removeChild(list.lastChild);
        subject--;
        number--;
        // Credit_score--;
        // marks--;
    } else {

        swal("Cannot Delete!", "Minimum limit reached!!", "info");
    }


}

function resetAll() {
    var list = document.getElementById("new_fields");
    while (list.hasChildNodes()) {
        if (subject > 1) {
            list.removeChild(list.lastChild);
            subject--;

        } else {
            break;
        }
    }
    subject = 1;
    number = 1;
    document.getElementById('credit').value = '';
    document.getElementById('marks').value = '';
}


function inputfeedback() {
    swal({
        title: "Cannot Proceed!",
        text: "Input value empty!!",
        icon: "error",
        button: "OK",
    });

}
AOS.init();

