(document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        // config constants
        var COMPUTER = 0;
        var TWOPLAYER = 1;
        var FIVEBOX = [5, 5];
        var EIGHTBOX = [8, 8];
        var ELEVENBOX = [11, 11];
        var PlAYNOW_1 = document.getElementById("playnow");
        var SELECTPLAYERCONTROLS_1 = document.getElementsByClassName("select-player");
        var SELECTBOXESCONTROLS_1 = document.getElementsByClassName("select-boxes");
        var GAMEVIEWPAGE_1 = document.getElementById("game-view");
        var GAMEVIEWPAGEBOX_1 = document.getElementById("game-view-box");
        var SELECTIONMAP_1 = {
            0: COMPUTER,
            1: TWOPLAYER
        };
        var BOXESMAP_1 = {
            0: FIVEBOX,
            1: EIGHTBOX,
            2: ELEVENBOX
        };
        var MODEL_1 = {
            gameconfig: {
                noOfPlayers: 0,
                sizeOfBoxes: FIVEBOX
            }
        };
        var STARTVIEW_1 = {
            render: function () {
                for (var i = 0; i < SELECTPLAYERCONTROLS_1.length; i += 1) {
                    if (MODEL_1.gameconfig.noOfPlayers === i) {
                        SELECTPLAYERCONTROLS_1[i].classList.add("is-active");
                    }
                    else {
                        SELECTPLAYERCONTROLS_1[i].classList.remove("is-active");
                    }
                }
                var _loop_1 = function (j) {
                    // FIX Array Comparison
                    if (MODEL_1.gameconfig.sizeOfBoxes.every(function (e) { return BOXESMAP_1[j].includes(e); })) {
                        SELECTBOXESCONTROLS_1[j].classList.add("is-active");
                    }
                    else {
                        SELECTBOXESCONTROLS_1[j].classList.remove("is-active");
                    }
                };
                for (var j = 0; j < SELECTBOXESCONTROLS_1.length; j += 1) {
                    _loop_1(j);
                }
            },
            init: function () {
                var _loop_2 = function (i) {
                    SELECTPLAYERCONTROLS_1[i].onclick = function () {
                        CONTROLLER_1.handlePlayerSelection(i);
                    };
                };
                for (var i = 0; i < SELECTPLAYERCONTROLS_1.length; i += 1) {
                    _loop_2(i);
                }
                var _loop_3 = function (j) {
                    SELECTBOXESCONTROLS_1[j].onclick = function () {
                        CONTROLLER_1.handleBoxesSelection(j);
                    };
                };
                for (var j = 0; j < SELECTBOXESCONTROLS_1.length; j += 1) {
                    _loop_3(j);
                }
                PlAYNOW_1.onclick = CONTROLLER_1.handlePlayButton;
            }
        };
        var GAMEVIEW_1 = {
            render: function () {
            },
            init: function () {
                var HEIGHT = MODEL_1.gameconfig.sizeOfBoxes[0];
                var WIDTH = MODEL_1.gameconfig.sizeOfBoxes[1];
                GAMEVIEWPAGEBOX_1.innerHTML = "";
                for (var h = 0; h < WIDTH - 1; h += 1) {
                    GAMEVIEWPAGEBOX_1.innerHTML +=
                        "\n            <div class=\"dots\"></div>\n            <canvas id=\"myCanvas\" width=\"20vmin\" height=\"10vmin\"></canvas>\n            ";
                }
                GAMEVIEWPAGEBOX_1.innerHTML +=
                    "<div class=\"dots\"></div><br>";
                for (var v = 0; v < HEIGHT - 1; v += 1) {
                    for (var w = 0; w < WIDTH - 1; w += 1) {
                        GAMEVIEWPAGEBOX_1.innerHTML +=
                            "\n              <canvas id=\"myCanvas\" width=\"10vmin\" height=\"20vmin\"></canvas>\n              <canvas width=\"20vmin\" height=\"20vmin\"></canvas>    \n              ";
                    }
                    GAMEVIEWPAGEBOX_1.innerHTML +=
                        "<canvas id=\"myCanvas\" width=\"10vmin\" height=\"20vmin\"></canvas><br>";
                    for (var k = 0; k < WIDTH - 1; k += 1) {
                        GAMEVIEWPAGEBOX_1.innerHTML +=
                            "\n              <div class=\"dots\"></div>\n              <canvas id=\"myCanvas\" width=\"20vmin\" height=\"10vmin\"></canvas>\n              ";
                    }
                    GAMEVIEWPAGEBOX_1.innerHTML +=
                        "<div class=\"dots\"></div><br>";
                }
            }
        };
        var CONTROLLER_1 = {
            handlePlayButton: function () {
                var STARTVIEWPAGE = document.getElementById("start-view");
                STARTVIEWPAGE.classList.add("hide");
                GAMEVIEWPAGE_1.classList.remove("hide");
                GAMEVIEW_1.init();
            },
            handlePlayerSelection: function (indexOfPlayers) {
                // updates noofplayers
                MODEL_1.gameconfig.noOfPlayers = SELECTIONMAP_1[indexOfPlayers];
                STARTVIEW_1.render();
            },
            handleBoxesSelection: function (indexOfBoxes) {
                MODEL_1.gameconfig.sizeOfBoxes = BOXESMAP_1[indexOfBoxes];
                STARTVIEW_1.render();
            },
            init: function () {
                STARTVIEW_1.init();
            }
        };
        CONTROLLER_1.init();
    }
})();
