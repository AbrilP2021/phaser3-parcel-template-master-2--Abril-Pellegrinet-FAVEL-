import Phaser from "phaser";
import { sharedInstance as events } from "./EventCenter";

export default class Juego extends Phaser.Scene {
  player;
  platform;
  brillo;
  cursors;
  puntos;
  Recogerbrillo;
  Enemigos;
  VidaJugador;
  TextoVidaJugador;
  textopuntos;
  recogerbrillo;
  timeText;
  textoVidaJugador;
  TimeEvent;
  superganador;
  enemigos;
  plataform;
  background;

  constructor() {
    super("Juego");
  }

  init(data) {
    this.nivel = data.nivel;
  }

  preload() {}

  create() {
    console.log("nivel ", this.nivel);
    this.isGameOver = false;

    this.puntos = 0;

    this.cameras.main.setBounds(0, 0, 10500, 768);
    this.physics.world.bounds.width = 10500;
    this.physics.world.bounds.height = 1537;

    if (this.nivel === 1) {
      this.add.image(0, 0, "FondoNivelUno").setOrigin(0).setScale(0.45);
      this.add.image(4900, 0, "FondoNivelUno").setOrigin(0).setScale(0.45);
      this.add.image(8500, 0, "FondoNivelUno").setOrigin(0).setScale(0.45);
      this.add.image(800, 900, "FondoNivelUno").setOrigin(0).setScale(0.5);
      
    } else {
      this.add.image(0, 0, "FondoNivelDos").setOrigin(0).setScale(0.45);
      this.add.image(4900, 0, "FondoNivelDos").setOrigin(0).setScale(0.45);
      this.add.image(8500, 0, "FondoNivelDos").setOrigin(0).setScale(0.45);
      this.add.image(800, 900, "FondoNivelDos").setOrigin(0).setScale(0.5);
    }

 
    //PLATAFORMAS

    this.platform = this.physics.add.staticGroup();
    this.platform.setOrigin(0);
    this.platform.create(0, 718, "SueloNivelUno").setScale(0.5).refreshBody();
    this.platform
      .create(2500, 718, "SueloNivelUno")
      .setScale(0.5)
      .refreshBody();
    this.platform
      .create(5500, 718, "SueloNivelUno")
      .setScale(0.5)
      .refreshBody();
    this.platform
      .create(8200, 718, "SueloNivelUno")
      .setScale(0.5)
      .refreshBody();
    this.platform.create(500, 520, "p1");
    this.platform.create(1200, 520, "p1");
    this.platform.create(850, 330, "p1");
    this.platform.create(1750, 330, "p2");
    this.platform.create(2500, 520, "p2");
    this.platform.create(1750, 150, "p1");
    this.platform.create(2500, 150, "p1");
    this.platform.create(3300, 520, "p1");
    this.platform.create(3750, 330, "p1");
    this.platform.create(4300, 330, "p1");
    this.platform.create(5000, 330, "p1");
    this.platform.create(4800, 520, "p1");
    this.platform.create(5800, 520, "p2");
    this.platform.create(6400, 330, "p1");
    this.platform.create(7000, 150, "p1");
    this.platform.create(6800, 520, "p1");
    this.platform.create(5800, 150, "p1");
    this.platform.create(7500, 330, "p1");
    this.platform.create(8200, 520, "p2");
    this.platform.create(9000, 330, "p2");

    //LLEGADA

    this.add.image(1250, 720, "teclas").setScale(0.5).setScrollFactor(0);
    this.add.image(1250, 50, "cronometro").setScale(0.4).setScrollFactor(0);

    //PERSONAJE

    this.player = this.physics.add.sprite(100, 590, "Jugador");
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cameras.main.startFollow(this.player);

    //ANIMACION

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("Jugador", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "turn",
      frames: [{ key: "Jugador", frame: 4 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("Jugador", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, this.platform);

    //TECLADO

    if ((this.cursors = !undefined)) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }
    //POWER

    this.brillo = this.physics.add.group({
      key: "power",
      repeat: 200,
      setXY: { x: 30, y: 0, stepX: 350 },
    });
    this.brillo.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.brillo, this.platform);
    this.physics.add.overlap(
      this.player,
      this.brillo,
      this.collectBrillo,
      null,
      this
    );

    //TIEMPO

    this.TiempoInicial = this.nivel == 1 ? 90 : 70;
    console.log("tiempoinicial" + this.TiempoInicial);

    this.TimeEvent = this.time.addEvent({
      delay: 1000,
      callback: this.timer,
      callbackScope: this,
      loop: true,
    });

    if (this.nivel == 1) {
      this.scene.launch("ui");
    }
  }

  update() {
    //MOVIMIENTO JUGADOR
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-450);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(450);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-430);
    }
  }

  collectBrillo(player, brillo) {
    brillo.disableBody(true, true);
    this.puntos += 1;
    events.emit("point-changed", this.puntos);

    if (this.puntos == 30) {
      this.scene.start("Ganaste", { nivel: this.nivel });
    }
    return false;
  }

  gameOver() {
    this.isGameOver = true;
    this.time.removeEvent(this.TimeEvent);

    this.scene.start("Perdiste");
  }

  timer() {
    console.log("tiempo restante " + this.TiempoInicial);
    if (!this.isGameOver) {
      this.TiempoInicial = this.TiempoInicial - 1;

      events.emit("time-changed", this.TiempoInicial);

      if (this.TiempoInicial == 0) {
        this.TimeEvent.paused = true;

        this.gameOver();
      }
    }
  }
}
