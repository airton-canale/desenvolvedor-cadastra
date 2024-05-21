interface ListHeaderProps {
    onChange: (e: SelectOption) => void;
    selectedOrdering: string | null;
    onOrderClick: () => void;
    onFilterClick: () => void;
}

interface SelectOption {
    value: string | number | null;
    label: string;
}