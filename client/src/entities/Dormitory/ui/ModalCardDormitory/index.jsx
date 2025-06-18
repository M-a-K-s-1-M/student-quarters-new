import './ModalCardDormitory.scss'
import { Modal, Space } from '@mantine/core';
import { useModalDormitory } from '../../model';

import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRubleSign } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";

import { ViewDormOnMapBtn } from '../../../../features/ViewDormOnMap';
import { NavigateDormReviewsBtn } from '../../../../features/NavigateDormReviews';
import { AddDormFavoriteBtn } from '../../../../features/AddDormFavorite';


export function ModalCardDormitory() {
    const { isOpen, closeModal, dormitory } = useModalDormitory();
    const starFilled = Math.floor(dormitory?.rating || 0);

    return (
        <Modal
            opened={isOpen}
            onClose={closeModal}
            padding={0}
            zIndex={1100}
            withinPortal={false}
            withCloseButton={false}
            size='800px'

            overlayProps={{
                backgroundOpacity: 0.5,
                blur: 3,
            }}

        >
            {dormitory && (
                <div className='modal-card-dormitory'>
                    <div className='modal-card-dormitory__header'>

                        <h2>{dormitory.name}</h2>

                        <div className='modal-card-dormitory__header__rating'>
                            <div className='modal-card-dormitory__header__rating__stars'>
                                {[...Array(5)].map((_, i) =>
                                    (i < starFilled) ?
                                        <GoStarFill className='modal-card-dormitory__header__rating__stars__icon' key={i} />
                                        :
                                        <GoStar className='modal-card-dormitory__header__rating__stars__icon' key={i} />)
                                }
                            </div>
                            <span className='modal-card-dormitory__header__rating__count'>{dormitory.rating}</span>
                        </div>

                    </div>

                    <div className='modal-card-dormitory__image-wrapper'>
                        <img src='#' alt={dormitory.name} />
                    </div>

                    <div className='modal-card-dormitory__content'>
                        <div className='modal-card-dormitory__content__details'>
                            <div className='modal-card-dormitory__content__details__info-row'>

                                <div className='modal-card-dormitory__content__details__info-row__item'>
                                    <FaMapMarkerAlt className='modal-card-dormitory__content__details__ifno-row__item__icon' />
                                    <p>
                                        <strong>Адрес: </strong>
                                        <span>{dormitory.address}</span>
                                    </p>
                                </div>

                                <div className='modal-card-dormitory__content__details__info-row__item'>
                                    <FaRubleSign className='modal-card-dormitory__content__details__ifno-row__item__icon' />
                                    <p>
                                        <strong>Цена: </strong>
                                        <span>{dormitory.price} ₽/{dormitory.priceUnit}</span>
                                    </p>
                                </div>

                            </div>

                            <div className='modal-card-dormitory__content__details__info-row'>

                                <div className='modal-card-dormitory__content__details__info-row__item'>
                                    <FaBuilding className='modal-card-dormitory__content__details__info-row__item__icon' />
                                    <p>
                                        <strong>Тип: </strong>
                                        <span>{dormitory.type}</span>
                                    </p>
                                </div>

                                <div className='modal-card-dormitory__content__details__info-row__item'>
                                    <FaComment className='modal-card-dormitory__content__details__info-row__item__icon' />
                                    <p>
                                        <strong>Отзывов: </strong>
                                        <span>0</span>
                                    </p>
                                </div>

                            </div>

                            <div className='modal-card-dormitory__content__details__info-description'>
                                <h3>Описание</h3>
                                <p>{dormitory.description}</p>
                            </div>
                        </div>


                        <div className='modal-card-dormitory__content__amenities'>
                            <h3>Удобства</h3>
                            <ul className='modal-card-dormitory__content__amenities__list'>
                                {dormitory.amenities.map((amenity, index) => (
                                    <li className='modal-card-dormitory__content__amenities__list__item' key={index}><span>{amenity}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className='modal-card-dormitory__content__actions'>
                            <AddDormFavoriteBtn />
                            <ViewDormOnMapBtn />
                            <NavigateDormReviewsBtn />
                        </div>

                    </div>
                </div>
            )
            }
        </Modal >
    )
}
