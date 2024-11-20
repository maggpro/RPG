import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // Здесь можно загрузить дополнительные ассеты, если они понадобятся
    }

    create() {
        // Создаем игрока как простой круг
        this.player = this.add.circle(100, 100, 20, 0x00ff00);

        // Создаем магазин, арену и лечебницу как прямоугольники
        this.shop = this.add.rectangle(300, 100, 50, 50, 0xff0000).setInteractive();
        this.arena = this.add.rectangle(500, 100, 50, 50, 0x0000ff).setInteractive();
        this.hospital = this.add.rectangle(700, 100, 50, 50, 0xffff00).setInteractive();

        // Добавляем текст для обозначения локаций
        this.add.text(280, 80, 'Магазин', { fontSize: '16px', fill: '#fff' });
        this.add.text(480, 80, 'Арена', { fontSize: '16px', fill: '#fff' });
        this.add.text(680, 80, 'Лечебница', { fontSize: '16px', fill: '#fff' });

        // Обработчики событий
        this.shop.on('pointerdown', () => this.enterShop());
        this.arena.on('pointerdown', () => this.enterArena());
        this.hospital.on('pointerdown', () => this.enterHospital());
    }

    update() {
        // Логика обновления игры
    }

    enterShop() {
        alert('Добро пожаловать в магазин!');
    }

    enterArena() {
        alert('Добро пожаловать на арену!');
    }

    enterHospital() {
        alert('Добро пожаловать в лечебницу!');
    }
}

window.MainScene = MainScene;