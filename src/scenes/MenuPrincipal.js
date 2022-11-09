import Phaser from "phaser";
import { EN_US, ES_AR } from "../enums/languages";
import { getTranslations } from "../services/translations";

export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    super({ key: "MenuPrincipal" });
  }

  create() {
    this.add.image(0, 0, "FondoM").setOrigin(0).setScale(0.5);
    const botonjugar = this.add.image(700, 400, "BotonJ").setScale(0.3);
    botonjugar.setInteractive();
    botonjugar.on("pointerdown", () =>
      this.scene.start("TutorialJuego", { nivel: 1 })
    );

    //this.add.image(600, 250, "BanderaEEUU").setOrigin(0).setScale(0.2);
    //this.add.image(700, 250, "BanderaArg").setOrigin(0).setScale(0.2);


    const botoninfo = this.add.image(700, 550, "BotonI").setScale(0.3);
    botoninfo.setInteractive();
    botoninfo.on("pointerdown", () => this.scene.start("Creditos"));


    const buttonEnglish = this.add.image (790, 270, "BanderaEEUU").setScale(0.3);
    buttonEnglish.setInteractive()
    buttonEnglish.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.getTranslations(EN_US)
    })

    const buttonEspañol = this.add.image (630, 270, "BanderaArg").setScale(0.3);
    buttonEspañol.setInteractive()
    buttonEspañol.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.getTranslations(ES_AR)
    })

    
  }
  async getTranslations(language){
    this.language = language;
    
    await getTranslations(language) }
}
