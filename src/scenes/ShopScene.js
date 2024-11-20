import Phaser from 'phaser';

export default class ShopScene extends Phaser.Scene {
    constructor() {
        super('ShopScene');
    }

    preload() {
        // Загрузка ассетов для магазина
    }

    create() {
        // Создаем полки и кассу
        this.add.rectangle(400, 300, 200, 100, 0xffd700);

        // Добавляем текст
        this.add.text(350, 50, 'Магазин', { fontSize: '32px', fill: '#fff' });

        // Кнопка выхода
        this.add.text(700, 550, 'Выход', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('CityScene'));
    }
}

window.ShopScene = ShopScene;
