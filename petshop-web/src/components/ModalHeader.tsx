import { DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/Icon';

export default function ModalHeader({
  icon,
  title,
  onClose,
}: {
  icon: React.ReactNode;
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="bg-brand-gradient flex size-16 shrink-0 items-center justify-center rounded-full">
        {icon}
      </span>
      {/* o Dialog exige um DialogTitle (acessibilidade) */}
      <DialogTitle className="flex-1 text-2xl font-bold">{title}</DialogTitle>
      <button type="button" onClick={onClose} aria-label="Fechar" className="p-2">
        <Icon name="close" className="size-5" />
      </button>
    </div>
  );
}