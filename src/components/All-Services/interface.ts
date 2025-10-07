export interface Form {
  id: string;
  title: string;
  type: string;
  package?: string;
  subtitle: string;
  status: 'active' | 'pending'; 
}

export interface AllFormsProps {
  items?: Form[];
}