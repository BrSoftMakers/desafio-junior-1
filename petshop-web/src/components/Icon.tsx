import { cn } from '@/lib/utils';

export type IconName =
  | 'arrow-bottom'
  | 'arrow-left'
  | 'arrow-right'
  | 'bin'
  | 'calendar'
  | 'cat'
  | 'close'
  | 'collar-pet'
  | 'dna'
  | 'dog'
  | 'evaPhoneCallOutline2'
  | 'Union'
  | 'user';

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const url = `url(/img/${name}-icon.svg)`;

  return (
    <span
      aria-hidden
      className={cn('inline-block size-4 shrink-0 bg-current', className)}
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}