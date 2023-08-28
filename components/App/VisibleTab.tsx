import { User } from "firebase/auth";
import { ReactElement } from "react";
import { Tabs } from "./entities/tabs.entity";
import { Inventory } from "./Inventory";
import { ShoppingList } from "./ShoppingList";

interface VisibleTabProps {
    tab: Tabs;
    user: User | null;
}

export const VisibleTab: React.FC<VisibleTabProps> = ({ tab, user }) => {
    const dict: Record<Tabs, ReactElement> = {
        [Tabs.INVENTORY]: <Inventory user={user} />,
        [Tabs.RECIPES]: <>hello</>,
        [Tabs.GROCERIES]: <ShoppingList user={user} />,
    }

    return dict[tab]
};
