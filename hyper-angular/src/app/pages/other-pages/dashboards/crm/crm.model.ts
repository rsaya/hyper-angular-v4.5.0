export interface PerformanceListItem {
    id?: number;
    name?: string;
    position?: string;
    leads?: number;
    deals?: number;
    tasks?: number;
}

export interface LeadItem {
    id?: number;
    name?: string;
    email?: string;
    profile?: string;
    badge?: {
        variant: string;
        text: string;
    }
}
