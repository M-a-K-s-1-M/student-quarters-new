import { create } from 'zustand';

export const useDorms = create((set) => ({
    dorms: [{
        id: 1,
        university: "УрФУ",
        name: "Общежитие УрФУ №1",
        rating: 4.5,
        address: "ул. Мира, 19, Екатеринбург",
        price: 1500,
        priceUnit: "месяц",
        type: "Государственное",
        placesAvailable: 24,
        amenities: ["Wi-Fi", "Кухня", "Прачечная", "Спортзал"],
        image: "urfu-dorm-1.jpg",
        location: {
            lat: 56.8441,
            lng: 60.6533
        },
        description: "Благоустроенное общежитие для студентов УрФУ с современным ремонтом",
        contact: "+7 (343) 123-45-67",
        rules: "Курение запрещено, комендантский час 23:00"
    },
    {
        id: 2,
        university: "УрГУПС",
        name: "Общежитие УрГУПС Главный",
        rating: 4.2,
        address: "ул. Колмогорова, 66, Екатеринбург",
        price: 1200,
        priceUnit: "месяц",
        type: "Государственное",
        placesAvailable: 32,
        amenities: ["Библиотека", "Компьютерный класс"],
        image: "urgups-dorm.jpg",
        location: {
            lat: 56.8364,
            lng: 60.6128
        },
        description: "Общежитие для студентов транспортного университета",
        contact: "+7 (343) 234-56-78",
        rules: "Посетители до 22:00"
    },
    {
        id: 3,
        university: "МГУ",
        name: "Общежитие МГУ №1",
        rating: 4.8,
        address: "ул. Ломоносова, 27, Москва",
        price: 5000,
        priceUnit: "месяц",
        type: "Государственное",
        placesAvailable: 120,
        amenities: ["Wi-Fi", "Кухня", "Прачечная", "Тренажерный зал"],
        image: "msu-dorm-1.jpg",
        location: {
            lat: 55.7033,
            lng: 37.5306
        },
        description: "Флагманское общежитие главного вуза страны",
        contact: "+7 (495) 123-45-67",
        rules: "Соблюдение тишины после 23:00"
    },
    {
        id: 4,
        university: "Студенческий комплекс",
        name: "Кампус на Маяковского",
        rating: 4.6,
        address: "ул. Маяковского, 15а, Екатеринбург",
        price: 3500,
        priceUnit: "месяц",
        type: "Частное",
        placesAvailable: 18,
        amenities: ["Кондиционер", "Уборка", "Собственная столовая"],
        image: "mayak-dorm.jpg",
        location: {
            lat: 56.8278,
            lng: 60.5982
        },
        description: "Комфортабельное жилье бизнес-класса для студентов",
        contact: "+7 (343) 987-65-43",
        rules: "Без ограничений"
    },
    {
        id: 5,
        university: "УГМУ",
        name: "Медгородок",
        rating: 4.3,
        address: "ул. Репина, 3, Екатеринбург",
        price: 1800,
        priceUnit: "месяц",
        type: "Государственное",
        placesAvailable: 42,
        amenities: ["Медпункт", "Читальный зал", "Лаборатории"],
        image: "ugmu-dorm.jpg",
        location: {
            lat: 56.8512,
            lng: 60.6321
        },
        description: "Специализированное общежитие для медицинских студентов",
        contact: "+7 (343) 345-67-89",
        rules: "Дежурство по этажам"
    },
    {
        id: 6,
        university: "НИУ ВШЭ",
        name: "Дом студентов Вышки",
        rating: 4.7,
        address: "ул. Кибальчича, 3, Москва",
        price: 4500,
        priceUnit: "месяц",
        type: "Государственное",
        placesAvailable: 90,
        amenities: ["Коворкинг", "Кафе", "Кинотеатр"],
        image: "hse-dorm.jpg",
        location: {
            lat: 55.8033,
            lng: 37.5806
        },
        description: "Современный кампус с развитой инфраструктурой",
        contact: "+7 (495) 234-56-78",
        rules: "Гостевые комнаты для посетителей"
    }]
}))
