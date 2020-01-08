(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const PlAYNOW = document.getElementById(
          "playnow") as HTMLInputElement;
      const selectPlayerControls = document.getElementsByClassName(
        "select-player") as HTMLCollectionOf<HTMLLIElement>;
      const MODEL = {
        gameconfig: {
          noOfPlayers: 1,
          sizeOfBoxes: [5, 4],
        },
      };
      const STARTVIEW = {
        render: () => {
          for (let i = 0; i < selectPlayerControls.length; i += 1) {
            if (MODEL.gameconfig.noOfPlayers === i) {
              selectPlayerControls[i].classList.add("is-active");
            } else {
              selectPlayerControls[i].classList.remove("is-active");
            }
          }                   
        },
        init: () => {          
          for (let i = 0; i < selectPlayerControls.length; i += 1) {
            selectPlayerControls[i].onclick = () => {
              CONTROLLER.handlePlayerSelection(i);
            };
          }
        },
      };
      const GAMEVIEW = {
        render: () => {

        },
        init: () => {

        },
      };
      const CONTROLLER = {
        handlePlayerSelection: (index: number) => {
          // updates noofplayers
          MODEL.gameconfig.noOfPlayers = index;
          STARTVIEW.render();
        },
        init: () => {
          STARTVIEW.init();
        },
      };
      CONTROLLER.init();
    }
  }
)();