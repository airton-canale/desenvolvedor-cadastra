interface Filters {
    color?: string; 
    size?: string
    price?: number
}

interface SidebarProps {
    products: CardProps[]
    onFilter: (property: keyof Filters, value: number | string | null | undefined) => void
    filters: Filters;
    filterOpen: boolean;
    closeFilter: () => void;
}

interface MobileSidebarProps extends SidebarProps {}