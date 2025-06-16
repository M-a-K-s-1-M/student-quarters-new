import { Tooltip } from "@mantine/core"
import { GoStarFill } from "react-icons/go"
import { FiStar } from "react-icons/fi"
import { useState } from "react"
import './AddDormFavorite.scss'

export function AddDormFavorite() {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div
            className={`add-dorm-favorite ${isFavorite && 'add-dorm-favorite--active'}`}
            onClick={(e) => {
                e.stopPropagation(); // Важно: замените preventDefault на stopPropagation
                e.nativeEvent.stopImmediatePropagation();
                setIsFavorite(!isFavorite)
            }}
        >
            {isFavorite ?
                <Tooltip label='Добавить в избранное'>
                    <GoStarFill />
                </Tooltip>
                :
                <Tooltip label='Добавить в избранное'>
                    <FiStar />
                </Tooltip>
            }
        </div>
    )
}
