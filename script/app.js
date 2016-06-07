var main = function() {

    function chooseSide() {
        side = prompt('Neo, choose the pill - X or O').toUpperCase();
        if (side !== "X" && side !== "O") {
            chooseSide();
        }
        return side;
    }
    var player = chooseSide();

    $('.cubs').click(function() {
        $(this).text(player);
    });









};

$(document).ready(main);
