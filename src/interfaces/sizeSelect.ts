interface SizeSelectProps {
    sizes: (string | undefined)[];
    selectedSize: number | string | undefined;
    onFilter: (type: keyof Filters, value: number | string | null | undefined) => void
}