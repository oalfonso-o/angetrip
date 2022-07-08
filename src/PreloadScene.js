
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.audio('jump', 'assets/jump.m4a');
    this.load.audio('hit', 'assets/hit.m4a');
    this.load.audio('reach', 'assets/reach.m4a');

    this.load.image('ground', 'assets/ground.png');
    this.load.image('dino-idle', 'assets/dino-idle.png');
    this.load.image('dino-hurt', 'assets/dino-hurt.png');
    this.load.image('restart', 'assets/restart.png');
    this.load.image('game-over', 'assets/game-over.png');
    this.load.image('cloud', 'assets/cloud.png');
    this.load.image('city_bogota', 'assets/city_bogota.png');
    this.load.image('city_madrid', 'assets/city_madrid.png');
    this.load.image('city_barcelona', 'assets/city_barcelona.png');
    this.load.image('city_porto', 'assets/city_porto.png');
    this.load.image('city_lisbon', 'assets/city_lisbon.png');
    this.load.image('city_paris', 'assets/city_paris.png');
    this.load.image('city_limoges', 'assets/city_limoges.png');
    this.load.image('city_bordeaux', 'assets/city_bordeaux.png');
    this.load.image('city_milan', 'assets/city_milan.png');
    this.load.image('city_munich', 'assets/city_munich.png');
    this.load.image('city_berlin', 'assets/city_berlin.png');
    this.load.image('city_amsterdam', 'assets/city_amsterdam.png');
    this.load.image('city_venice', 'assets/city_venice.png');
    this.load.image('city_florence', 'assets/city_florence.png');
    this.load.image('city_rome', 'assets/city_rome.png');
    this.load.image('city_to_be_continued', 'assets/city_to_be_continued.png');
    this.load.image('city_from_barcelona_with_love', 'assets/city_from_barcelona_with_love.png');
    this.load.image('city_congratulations', 'assets/city_congratulations.png');
    this.load.image('city_x', 'assets/city_x.png');
    this.load.image('label_grafiaf', 'assets/label_grafiaf.png');
    this.load.image('label_hola_renfe', 'assets/label_hola_renfe.png');
    this.load.image('label_hola_st_joan', 'assets/label_hola_st_joan.png');
    this.load.image('label_hola_gojira', 'assets/label_hola_gojira.png');
    this.load.image('label_quefof', 'assets/label_quefof.png');
    this.load.image('label_jueputa_vuelos', 'assets/label_jueputa_vuelos.png');
    this.load.image('label_marica_jueputa', 'assets/label_marica_jueputa.png');
    this.load.image('label_marica_otra_vez', 'assets/label_marica_otra_vez.png');
    this.load.image('label_chao_europa', 'assets/label_chao_europa.png');
    this.load.image('label_hola_casita', 'assets/label_hola_casita.png');

    this.load.spritesheet('star', 'assets/stars.png', {
      frameWidth: 9, frameHeight: 9
    });

    this.load.spritesheet('moon', 'assets/moon.png', {
      frameWidth: 20, frameHeight: 40
    });

    this.load.spritesheet('dino', 'assets/dino-run.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('dino-down', 'assets/dino-down.png', {
      frameWidth: 118,
      frameHeight: 94
    })

    this.load.spritesheet('enemy-bird', 'assets/enemy-bird.png', {
      frameWidth: 92,
      frameHeight: 77
    })

    this.load.image('obsticle-1', 'assets/cactuses_small_1.png')
    this.load.image('obsticle-2', 'assets/cactuses_small_2.png')
    this.load.image('obsticle-3', 'assets/cactuses_small_3.png')
    this.load.image('obsticle-4', 'assets/cactuses_big_1.png')
    this.load.image('obsticle-5', 'assets/cactuses_big_2.png')
    this.load.image('obsticle-6', 'assets/cactuses_big_3.png')
    this.load.image('obsticle-7', 'assets/cactuses_small_1.png')
    this.load.image('obsticle-8', 'assets/cactuses_small_2.png')
    this.load.image('obsticle-9', 'assets/cactuses_small_3.png')
    this.load.image('obsticle-10', 'assets/cactuses_big_1.png')
    this.load.image('obsticle-11', 'assets/cactuses_big_2.png')
    this.load.image('obsticle-12', 'assets/cactuses_big_3.png')
    this.load.image('obsticle-13', 'assets/cactuses_small_1.png')
    this.load.image('obsticle-14', 'assets/cactuses_small_2.png')
    this.load.image('obsticle-15', 'assets/cactuses_small_3.png')
    this.load.image('obsticle-16', 'assets/cactuses_big_1.png')
    this.load.image('obsticle-17', 'assets/cactuses_big_2.png')
    this.load.image('obsticle-18', 'assets/cactuses_big_3.png')  // dirty repeated imports to reduce % of "losing_airpods" and "losing_train"
    this.load.image('obsticle-19', 'assets/losing_airpods.png')
    this.load.image('obsticle-20', 'assets/losing_train.png')
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
