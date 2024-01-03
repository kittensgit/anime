import { useState } from 'react';

export const useCheckboxFilter = (initialItems: string[]) => {
    const [selectedItems, setSelectedItems] = useState<string[]>(initialItems);

    const handleChange = (item: string) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((prevItem) => prevItem !== item)
                : [...prevItems, item]
        );
    };

    return [selectedItems, handleChange] as const;
};
