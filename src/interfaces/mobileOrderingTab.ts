interface MobileOrderingTabProps {
    open: boolean;
    closeOrdering: () => void; 
    selectedOrdering: string | null;
    setSelectedOrdering: (value: 'color' | 'size' | 'price' | null) => void;
}