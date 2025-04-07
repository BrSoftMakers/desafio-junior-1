export interface PetFormProps {
  onClose: () => void;
  onSave: (data: RegisterProps) => void;
  title: string;
  initialData?: RegisterProps;
  onCancel?: () => void;
  readOnly?: boolean;
}


export interface RegisterProps {
  id?: number;
  name: string;
  customerName: string;
  contact: string;
  type: string;
  breed: string;
  age: string;
  address: string;
}

export interface PetCardProps {
  pet: RegisterProps;
  isOpen: boolean;
  onToggle: (id: number) => void;
  onEdit: (pet: RegisterProps) => void;
  onRemove: (pet: RegisterProps) => void;
  onDetails: (pet: RegisterProps) => void;
}