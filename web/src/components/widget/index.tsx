import { Popover } from "@headlessui/react";
import { Pen } from "phosphor-react";
import { WidgetForm } from "../widgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel className="drop-shadow-2xl">
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-gray-700 rounded-full p-2 flex items-center group">
        <Pen size={32} color="#3B82F6" weight="duotone" />

        <span className="font-bold text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">Cadastro </span>
      </Popover.Button>
    </Popover>
  )
}