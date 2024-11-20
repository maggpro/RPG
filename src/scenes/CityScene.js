class CityScene extends Phaser.Scene {
    constructor() {
        super('CityScene');
    }

    preload() {
        // Здесь можно загрузить дополнительные ассеты, если они понадобятся
    }

    create() {
        // Создаем фон улицы как большой прямоугольник
        this.add.rectangle(400, 300, 800, 600, 0x87ceeb); // Голубой цвет для улицы

        // Создаем здания как прямоугольники
        const shop = this.add.rectangle(200, 150, 100, 100, 0xffd700).setInteractive(); // Золотой цвет для магазина
        const arena = this.add.rectangle(600, 150, 100, 100, 0x8b0000).setInteractive(); // Темно-красный цвет для арены
        const hospital = this.add.rectangle(400, 450, 100, 100, 0x32cd32).setInteractive(); // Зеленый цвет для лечебницы

        // Добавляем декорации как круги
        this.add.circle(100, 100, 30, 0x228b22); // Зеленый круг для дерева
        this.add.circle(700, 500, 30, 0x228b22); // Зеленый круг для дерева

        // Создаем игрока как круг
        const player = this.add.circle(400, 300, 20, 0x0000ff); // Синий цвет для игрока

        // Добавляем текст для обозначения локаций
        this.add.text(180, 120, 'Магазин', { fontSize: '16px', fill: '#fff' });
        this.add.text(580, 120, 'Арена', { fontSize: '16px', fill: '#fff' });
        this.add.text(380, 420, 'Лечебница', { fontSize: '16px', fill: '#fff' });

        // Обработчики событий для зданий
        shop.on('pointerdown', () => this.enterBuilding('ShopScene'));
        arena.on('pointerdown', () => this.enterBuilding('ArenaScene'));
        hospital.on('pointerdown', () => this.enterBuilding('HospitalScene'));

        // Интерфейс
        this.createInterface();
    }

    createInterface() {
        // Здоровье и золото
        this.add.text(10, 10, 'Здоровье: 100', { fontSize: '20px', fill: '#fff' });
        this.add.text(10, 40, 'Золото: 50', { fontSize: '20px', fill: '#fff' });

        // Инвентарь
        this.add.text(10, 70, 'Инвентарь:', { fontSize: '20px', fill: '#fff' });
        this.add.text(10, 100, '- Меч', { fontSize: '16px', fill: '#fff' });
        this.add.text(10, 130, '- Щит', { fontSize: '16px', fill: '#fff' });
    }

    enterBuilding(sceneName) {
        this.scene.start(sceneName);
    }
}

// Экспортируем класс как глобальную переменную
window.CityScene = CityScene;