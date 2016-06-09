var main = function() {

    //determine player's side
    function playerSide() {
        plSide = prompt('Neo, choose the pill - X or O').toUpperCase();
        if (plSide !== 'X' && plSide !== 'O') {
            playerSide();
        }
        return plSide;
    }

    var playerTurn = playerSide();
    var computerTurn;
    if (playerTurn === 'X') {
        computerTurn = 'O';
    } else {
        computerTurn = 'X';
    }

    var $userScore = 0;
    var $tie = 0;
    var $computerScore = 0;

    //switching turns between player and computer and checking for winner
    $('.cubs').click(function() {
        if ($(this).text() === '') {
            $(this).text(playerTurn);
            computerMove();
        }
        if (win(playerTurn)) {
            alert('Neo, you win!');
            $('.cubs').text('');
            $userScore++;
            $('.userScore').text($userScore);
        } else if (win(computerTurn)) {
            alert('Neo, you lose...');
            $('.cubs').text('');
            $computerScore++;
            $('.computerScore').text($computerScore);
        }
        if ($('#1').text() !== '' &&
            $('#2').text() !== '' &&
            $('#3').text() !== '' &&
            $('#4').text() !== '' &&
            $('#5').text() !== '' &&
            $('#6').text() !== '' &&
            $('#7').text() !== '' &&
            $('#8').text() !== '' &&
            $('#9').text() !== '') {
            alert('Tie!');
            $('.cubs').text('');
            $tie++;
            $('.tie').text($tie);
        }
    });

    //define computer moves
    function computerMove() {
        if ($('#1').text() === "" && (($('#3').text() === playerTurn && $('#2').text() === playerTurn) || ($('#9').text() === playerTurn && $('#5').text() === playerTurn) ||
                ($('#7').text() === playerTurn && $('#4').text() === playerTurn))) {
            $('#1').text(computerTurn);
        } else {
            if ($('#2').text() === "" && (($('#1').text() === playerTurn && $('#3').text() === playerTurn) || ($('#8').text() === playerTurn && $('#5').text() === playerTurn))) {
                $('#2').text(computerTurn);
            } else {
                if ($('#3').text() === "" && (($('#1').text() === playerTurn && $('#2').text() === playerTurn) || ($('#7').text() === playerTurn && $('#5').text() === playerTurn) ||
                        ($('#9').text() === playerTurn && $('#6').text() === playerTurn))) {
                    $('#3').text(computerTurn);
                } else {
                    if ($('#9').text() === "" && (($('#7').text() === playerTurn && $('#8').text() === playerTurn) || ($('#1').text() === playerTurn && $('#5').text() === playerTurn) ||
                            ($('#3').text() === playerTurn && $('#6').text() === playerTurn))) {
                        $('#9').text(computerTurn);
                    } else {
                        if ($('#7').text() === "" && (($('#9').text() === playerTurn && $('#8').text() === playerTurn) || ($('#3').text() === playerTurn && $('#5').text() === playerTurn) ||
                                ($('#1').text() === playerTurn && $('#4').text() === playerTurn))) {
                            $('#7').text(computerTurn);
                        } else {
                            if ($('#8').text() === "" && (($('#9').text() === playerTurn && $('#7').text() === playerTurn) || ($('#2').text() === playerTurn && $('#5').text() === playerTurn))) {
                                $('#8').text(computerTurn);
                            } else {
                                if ($('#4').text() === "" && (($('#6').text() === playerTurn && $('#5').text() === playerTurn) || ($('#1').text() === playerTurn && $('#7').text() === playerTurn))) {
                                    $('#4').text(computerTurn);
                                } else {
                                    if ($('#6').text() === "" && (($('#3').text() === playerTurn && $('#9').text() === playerTurn) || ($('#5').text() === playerTurn && $('#4').text() === playerTurn))) {
                                        $('#6').text(computerTurn);
                                    } else {
                                        if ($('#5').text() === "" && (($('#3').text() === playerTurn && $('#7').text() === playerTurn) || ($('#9').text() === playerTurn && $('#1').text() === playerTurn) ||
                                                ($('#6').text() === playerTurn && $('#4').text() === playerTurn) || ($('#8').text() === playerTurn && $('#2').text() === playerTurn))) {
                                            $('#5').text(computerTurn);
                                        } else {
                                            if ($('#5').text() === "") {
                                                $('#5').text(computerTurn);

                                            } else {
                                                if ($('#1').text() === "") {
                                                    $('#1').text(computerTurn);

                                                } else {
                                                    if ($('#9').text() === "") {
                                                        $('#9').text(computerTurn);

                                                    } else {
                                                        if ($('#8').text() === "") {
                                                            $('#8').text(computerTurn);

                                                        } else {
                                                            if ($('#4').text() === "") {
                                                                $('#4').text(computerTurn);

                                                            }
                                                        }
                                                    }
                                                }


                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //check if somebody win the game
    function win(currentMove) {
        var winner = false;
        if (check(1, 2, 3, currentMove) ||
            check(4, 5, 6, currentMove) ||
            check(7, 8, 9, currentMove) ||
            check(1, 4, 7, currentMove) ||
            check(2, 5, 8, currentMove) ||
            check(3, 6, 9, currentMove) ||
            check(1, 5, 9, currentMove) ||
            check(3, 5, 7, currentMove)) {
            winner = true;
        }
        return winner;
    }

    function check(x, y, z, currentMove) {
        var winner = false;
        if (getCub(x) === currentMove && getCub(y) === currentMove && getCub(z) === currentMove) {
            winner = true;
        }
        return winner;
    }

    function getCub(id) {
        return document.getElementById(id).innerText;
    }

};

$(document).ready(main);
