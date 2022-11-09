import Phaser from "phaser";
import MenuPrincipal from "./MenuPrincipal";

export default class Preload extends Phaser.Scene {
  preload() {
    this.load.image("FondoNivelUno", "./assets/FondoCompletoN1.png");
    this.load.image("FondoNivelDos", "./assets/FondoNivel2.png");
    this.load.image("SueloNivelUno", "./assets/SueloCompletoN1.png");
    this.load.spritesheet("Jugador", "./assets/pelota.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    this.load.image("p1", "./assets/plataformachica.png");
    this.load.image("p2", "./assets/plataformagrande.png");
    this.load.image("flecha", "./assets/flechacasa.png");
    this.load.image("teclas", "./assets/controles.png");
    this.load.image("power", "./assets/brillo.png");
    this.load.image("uipower", "./assets/uibrillos.png");
    this.load.image("cronometro", "./assets/Tiempo.png");
    this.load.image("reloj", "./assets/relojtiempo.png");

    this.load.image("FondoWin", "./assets/tesalvaste.png");
    this.load.image("BotonS", "./assets/BotonSiguiente.png");
    this.load.image("BotonM", "./assets/BotonMenu.png");

    this.load.image("FondoC", "./assets/FondoSolo.png");
    this.load.image("FondoCre", "./assets/FondoCreditos.png");
    this.load.image("BotonM", "./assets/BotonMenu.png");

    this.load.image("FondoM", "./assets/FondoMenu.png");
    this.load.image("BotonJ", "./assets/BotonJugar.png");
    this.load.image("BotonI", "./assets/BotonInfo.png");
    this.load.image("BotonN2", "./assets/BotonReinicio.png");

    this.load.image("perdiste", "./assets/tepinchaste.png");

    this.load.image("FondoTuto", "./assets/TutorialN1.png");
    this.load.image("tuto2", "./assets/TutorialN2.png");
    this.load.image("BanderaEEUU", "./assets/eeuu.png");
    this.load.image("BanderaArg", "./assets/argentina.png");
  }
  create() {
    this.scene.start("MenuPrincipal");
  }
}
