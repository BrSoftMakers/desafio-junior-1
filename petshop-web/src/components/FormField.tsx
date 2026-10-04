import Icon, { IconName } from '@/components/Icon';

export default function FormField({
  icon,
  label,
  hint,
  htmlFor,
  children,
}: {
  icon: IconName;
  label: string;
  hint?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium">
        <Icon name={icon} />
        {label}
        {hint && <span className="font-normal text-white/40">{hint}</span>}
      </label>
      {children}
    </div>
  );
}