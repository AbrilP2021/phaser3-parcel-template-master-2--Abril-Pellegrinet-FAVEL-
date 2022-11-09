import 'regenerator-runtime/runtime'
import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import MenuPrincipal from "./scenes/MenuPrincipal";
import Juego from "./scenes/Juego";
import Perdiste from "./scenes/Perdiste";
import Ganaste from "./scenes/Ganaste";
import Tutorial from "./scenes/Tutorial";
import Creditos from "./scenes/Creditos";
import Preload from "./scenes/Preload";
import UI from "./scenes/UI";

const config = {
  type: Phaser.AUTO,
  width: 1350,
  height: 770,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [
    Preload,
    MenuPrincipal,
    Perdiste,
    Ganaste,
    Tutorial,
    Creditos,
    Juego,
    UI,
  ],
};

export default new Phaser.Game(config);
