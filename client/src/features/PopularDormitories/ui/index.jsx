import './PopularDormitories.scss';
import CardPopularDormitory from './CardPopularDormitory/index';

const dataDormitories = [
    {
        id: 1,
        university: "МГУ",
        name: "Общежитие МГУ №1",
        rating: 4.8,
        address: "ул. Ломоносова, 27",
        price: 5000,
        priceUnit: "месяц",
        amenities: ["Wi-Fi", "Кухня", "Прачечная"],
        image: "msu-dorm-1.jpg",
        location: {
            lat: 55.7033,
            lng: 37.5306
        }
    },
    {
        id: 2,
        university: "МГУ",
        name: "Общежитие МГУ №2",
        rating: 4.5,
        address: "ул. Ломоносова, 29",
        price: 4500,
        priceUnit: "месяц",
        amenities: ["Wi-Fi", "Спортзал", "Библиотека"],
        image: "msu-dorm-2.jpg",
        location: {
            lat: 55.7040,
            lng: 37.5312
        }
    },
    {
        id: 3,
        university: "МГТУ им. Баумана",
        name: "Общежитие Бауманское №3",
        rating: 4.2,
        address: "Рубцовская наб., 2/18",
        price: 4800,
        priceUnit: "месяц",
        amenities: ["Wi-Fi", "Кухня", "Прачечная", "Парковка"],
        image: "baumanka-dorm-3.jpg",
        location: {
            lat: 55.7738,
            lng: 37.6847
        }
    },
    {
        id: 4,
        university: "ВШЭ",
        name: "Общежитие ВШЭ Дубки",
        rating: 4.7,
        address: "ул. Дубки, 9",
        price: 5500,
        priceUnit: "месяц",
        amenities: ["Wi-Fi", "Кухня", "Спортзал", "Читальный зал"],
        image: "hse-dubki.jpg",
        location: {
            lat: 55.8475,
            lng: 37.4872
        }
    },
    {
        id: 5,
        university: "РУДН",
        name: "Общежитие РУДН №5",
        rating: 4.3,
        address: "ул. Миклухо-Маклая, 6",
        price: 5200,
        priceUnit: "месяц",
        amenities: ["Wi-Fi", "Кухня", "Прачечная", "Территория"],
        image: "rudn-dorm-5.jpg",
        location: {
            lat: 55.6516,
            lng: 37.5004
        }
    }
];

export default function PopularDormitories() {
    return (
        <div className={`popular-dormitories`}>
            <div className='popular-dormitories__header'>
                <h2>Популярные общежития</h2>
                <p>Общежития с лучшими отзывами и рейтингами</p>
            </div>

            <div className='popular-dormitories__featured'>
                {dataDormitories.map((dormitory) => {
                    return (
                        <CardPopularDormitory data={dormitory} key={dormitory.id} />
                    )
                })}
            </div>
        </div>
    )
}
