(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // config constants
      const COMPUTER = 0;
      const TWOPLAYER = 1;
      const FIVEBOX = [5, 5];
      const EIGHTBOX = [8, 8];
      const ELEVENBOX = [11, 11];
      const PlAYNOW = document.getElementById(
          "playnow") as HTMLInputElement;
      const SELECTPLAYERCONTROLS = document.getElementsByClassName(
          "select-player") as HTMLCollectionOf<HTMLLIElement>;
      const SELECTBOXESCONTROLS = document.getElementsByClassName(
          "select-boxes") as HTMLCollectionOf<HTMLLIElement>;  
      const GAMEVIEWPAGE = document.getElementById(
          "game-view") as HTMLDivElement; 
      const GAMEVIEWPAGEBOX = document.getElementById(
          "game-view-box") as HTMLDivElement;
      const SELECTIONMAP = {
        0:COMPUTER,
        1:TWOPLAYER,
      };
      const BOXESMAP = {
        0:FIVEBOX,
        1:EIGHTBOX,
        2:ELEVENBOX,
      };      
      const MODEL = {
        gameconfig: {
          noOfPlayers: 0, // 0-computer 1-2player
          sizeOfBoxes: FIVEBOX, // 0-5X5 1-8x8 2-11x11
          // 6 dots in a row and 6 dots in a column - 0 is index value
        },
      };
      const STARTVIEW = {
        render: () => {
          for (let i = 0; i < SELECTPLAYERCONTROLS.length; i += 1) {
            if (MODEL.gameconfig.noOfPlayers === i) {
              SELECTPLAYERCONTROLS[i].classList.add("is-active");
            } else {
              SELECTPLAYERCONTROLS[i].classList.remove("is-active");
            }
          }  
          for (let j = 0; j < SELECTBOXESCONTROLS.length; j += 1) {
            // FIX Array Comparison
            if (MODEL.gameconfig.sizeOfBoxes.every( e => BOXESMAP[j].includes(e))) { 
              SELECTBOXESCONTROLS[j].classList.add("is-active");
            } else {
              SELECTBOXESCONTROLS[j].classList.remove("is-active");
            }
          }
        },
        init: () => {          
          for (let i = 0; i < SELECTPLAYERCONTROLS.length; i += 1) {
            SELECTPLAYERCONTROLS[i].onclick = () => {
              CONTROLLER.handlePlayerSelection(i);
            };
          }
          for (let j = 0; j < SELECTBOXESCONTROLS.length; j += 1) {
            SELECTBOXESCONTROLS[j].onclick = () => {
              CONTROLLER.handleBoxesSelection(j);
            };
          }
          PlAYNOW.onclick = CONTROLLER.handlePlayButton;
        },
      };
      const GAMEVIEW = {
        render: () => {

        },
        init: () => {
          const HEIGHT = MODEL.gameconfig.sizeOfBoxes[0];
          const WIDTH = MODEL.gameconfig.sizeOfBoxes[1];
          // horizontal -to fill h times
          // Vertical -to fill h times each after 1 horizontal
          for (let h = 0; h < HEIGHT-1; h += 1) {
            // fill with dots and canvas
            let horizontal = document.createElement('div');
            for (let k = 0; k < WIDTH-1; k +=1) {                            
              horizontal.innerHTML += 
              `      
                <div class="dots"></div>
                <canvas name="myCanvas" width="40px" height="20px"></canvas>              
              `;
            }
            horizontal.innerHTML += `<div class="dots"></div>`;
            horizontal.classList.add('horizontal');
            GAMEVIEWPAGEBOX.appendChild(horizontal);
            // w dots and w-1 canvas           
            // fill with canvas
            // w canvas and w-1 square canvas
            let vertical = document.createElement('div');
            for (let w = 0; w < WIDTH-1; w += 1) {
              vertical.innerHTML += 
              `
              <canvas name="myCanvas" width="20px" height="40px"></canvas>
              <canvas width="40px" height="40px"></canvas>    
              `;
            }
            vertical.innerHTML += 
            `
              <canvas name="myCanvas" width="20px" height="40px"></canvas>
            `;
            vertical.classList.add('vertical');
            GAMEVIEWPAGEBOX.appendChild(vertical);
          }
          // fill extra horizontal
          let horizontal = document.createElement('div');
          for (let k = 0; k < WIDTH-1; k +=1) {                            
            horizontal.innerHTML += 
            `      
              <div class="dots"></div>
              <canvas name="myCanvas" width="40px" height="20px"></canvas>              
            `;
          }
          horizontal.innerHTML += `<div class="dots"></div>`;
          horizontal.classList.add('horizontal');
          GAMEVIEWPAGEBOX.appendChild(horizontal);                
        },
      };
      const CONTROLLER = {
        handlePlayButton: () => {
          const STARTVIEWPAGE = document.getElementById(
            "start-view") as HTMLDivElement;
          STARTVIEWPAGE.classList.add("hide");
          GAMEVIEWPAGE.classList.remove("hide");
          GAMEVIEW.init();      
        },
        handlePlayerSelection: (indexOfPlayers: number) => {
          // updates noofplayers
          MODEL.gameconfig.noOfPlayers = SELECTIONMAP[indexOfPlayers];
          STARTVIEW.render();
        },
        handleBoxesSelection: (indexOfBoxes: number) => {
          MODEL.gameconfig.sizeOfBoxes = BOXESMAP[indexOfBoxes];
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