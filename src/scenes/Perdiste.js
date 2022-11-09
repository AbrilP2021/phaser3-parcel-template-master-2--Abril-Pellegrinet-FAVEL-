import Phaser from 'phaser'
import { getPhrase } from '../services/translations';

export default class Perdiste extends Phaser.Scene {
  init(data) {
    this.nivel = data.nivel;
  }
  constructor() {
    super("Perdiste");
  }

  create() {
    this.add.image(0, 0, "perdiste").setOrigin(0).setScale(0.5);
    var botonreinicio = this.add.image(700, 400, "BotonS").setScale(0.4);
    botonreinicio.setInteractive();
    botonreinicio.on("pointerdown", () => this.scene.start("TutorialJuego", { nivel: 1 })
    );

    
    var botonmenucito = this.add.image(700, 550, "BotonM").setScale(0.4);
    botonmenucito.setInteractive();
    botonmenucito.on("pointerdown", () => this.scene.start("MenuPrincipal"));

    this.text = this.add.text(599, 520, getPhrase("MENU"), { font: "150px Cocogoose" }) .setScale(0.4);

    this.text = this.add
    .text(460, 100, getPhrase("PERDISTE"), { font: "250px Cocogoose" })
    .setScale(0.4);

    this.text = this.add
    .text(550,370, getPhrase("REINICIAR"), { font: "130px Cocogoose" })
    .setScale(0.4);


   
  }
  update() {}
}
