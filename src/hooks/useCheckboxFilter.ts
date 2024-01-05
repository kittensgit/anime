import { useState } from 'react';

type ItemType = number | string;

export const useCheckboxFilter = (initialItems: ItemType[]) => {
    const [selectedItems, setSelectedItems] =
        useState<ItemType[]>(initialItems);

    const handleChange = (item: ItemType) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((prevItem) => prevItem !== item)
                : [...prevItems, item]
        );
    };

    return [selectedItems, handleChange] as const;
};
