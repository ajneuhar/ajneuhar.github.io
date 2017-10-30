var InputUtilties = {
    getNumber: function(message) {
        return 1 * prompt(message);
    }
}

var a = InputUtilties.getNumber("enter a number");
var b = InputUtilties.getNumber("enter a number");
var c = InputUtilties.getNumber("enter a number");

document.write(a + b + c);