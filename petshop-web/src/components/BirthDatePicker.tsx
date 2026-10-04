'use client';

import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function BirthDatePicker({
  value,
  onChange,
  id,
}: {
  value: string; 
  onChange: (value: string) => void;
  id?: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = value ? parseISO(value) : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        id={id}
        className="input-frame flex h-10 w-full items-center px-3 text-left text-sm"
      >
        {selected ? (
          format(selected, 'dd/MM/yyyy')
        ) : (
          <span className="text-white/30">22/08/2020</span>
        )}
      </PopoverTrigger>

      <PopoverContent align="start" className="w-auto border-2 border-[#404a5c] p-0">
        <Calendar
          mode="single"
          locale={ptBR}
          captionLayout="dropdown" 
          startMonth={new Date(1990, 0)}
          endMonth={new Date()}
          disabled={{ after: new Date() }} 
          defaultMonth={selected}
          selected={selected}
          onSelect={(date) => {
            if (!date) return;
            onChange(format(date, 'yyyy-MM-dd'));
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}