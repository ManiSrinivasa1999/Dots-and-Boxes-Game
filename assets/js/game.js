(document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var PlAYNOW = document.getElementById("playnow");
        var selectPlayerControls_1 = document.getElementsByClassName("select-player");
        var MODEL_1 = {
            gameconfig: {
                noOfPlayers: 1,
                sizeOfBoxes: [5, 4]
            }
        };
        var STARTVIEW_1 = {
            render: function () {
                for (var i = 0; i < selectPlayerControls_1.length; i += 1) {
                    if (MODEL_1.gameconfig.noOfPlayers === i) {
                        selectPlayerControls_1[i].classList.add("is-active");
                    }
                    else {
                        selectPlayerControls_1[i].classList.remove("is-active");
                    }
                }
            },
            init: function () {
                var _loop_1 = function (i) {
                    selectPlayerControls_1[i].onclick = function () {
                        CONTROLLER_1.handlePlayerSelection(i);
                    };
                };
                for (var i = 0; i < selectPlayerControls_1.length; i += 1) {
                    _loop_1(i);
                }
            }
        };
        var GAMEVIEW = {
            render: function () {
            },
            init: function () {
            }
        };
        var CONTROLLER_1 = {
            handlePlayerSelection: function (index) {
                // updates noofplayers
                MODEL_1.gameconfig.noOfPlayers = index;
                STARTVIEW_1.render();
            },
            init: function () {
                STARTVIEW_1.init();
            }
        };
        CONTROLLER_1.init();
    }
})();
