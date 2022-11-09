import Phaser from "phaser";
import { getPhrase } from "../services/translations";

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

  create() {
    this.add.image(0, 0, "FondoCre").setOrigin(0).setScale(0.5);
    var botonmenu = this.add.image(700, 550, "BotonM").setScale(0.2);
    botonmenu.setInteractive();
    botonmenu.on("pointerdown", () => this.scene.start("MenuPrincipal"));

    this.text = this.add.text(650, 530, getPhrase("MENÚ"), { font: "70px Cocogoose" }) .setScale(0.4);

    this.text = this.add.text(540, 150, getPhrase("CREDITOS"), { font: "150px Cocogoose" }) .setScale(0.4);

    this.text = this.add.text(450, 300, getPhrase("ARTE Y PROGRAMACIÓN"), { font: "100px Cocogoose" }) .setScale(0.4);
    
    this.text = this.add.text(570, 380, "Abril Pellegrinet", { font: "70px Cocogoose" }) .setScale(0.4);
  }
  update() {}
}
