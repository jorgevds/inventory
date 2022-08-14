import { InventoryItem } from '../../components/App/entities/inventory-item.entity';

export const sortItemAlphabetically = (
    firstItem: InventoryItem,
    nextItem: InventoryItem,
): number => {
    return firstItem.item.localeCompare(nextItem.item);
};
