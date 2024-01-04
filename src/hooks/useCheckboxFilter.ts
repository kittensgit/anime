import { useState } from 'react';

export const useCheckboxFilter = (initialItems: number[]) => {
    const [selectedItems, setSelectedItems] = useState<number[]>(initialItems);

    const handleChange = (item: number) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((prevItem) => prevItem !== item)
                : [...prevItems, item]
        );
    };

    return [selectedItems, handleChange] as const;
};
