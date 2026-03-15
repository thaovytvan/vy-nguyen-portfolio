import React from "react";
import { useTranslation } from "react-i18next";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon, GlobeIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleValueChange = (val: string) => {
    i18n.changeLanguage(val);
  };

  return (
    <Select.Root
      value={i18n.resolvedLanguage}
      onValueChange={handleValueChange}
    >
      <Select.Trigger
        className="inline-flex items-center justify-between whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm w-[175px] cursor-pointer"
        aria-label="Select Language"
      >
        <GlobeIcon className="size-5 text-primary" />
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon className="size-4 text-slate-400 transition-transform duration-300" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="overflow-hidden bg-slate-900/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-[100] animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95"
          position="popper"
          sideOffset={8}
        >
          <Select.Viewport className="p-2">
            <SelectItem value="en">English (US)</SelectItem>
            <SelectItem value="vi">Tiếng Việt</SelectItem>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef<HTMLDivElement, Select.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={cn(
          "text-sm font-medium rounded-md flex items-center h-10 pr-8 pl-8 relative select-none data-[disabled]:text-slate-500 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary/20 data-[highlighted]:text-white outline-none cursor-pointer transition-colors",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemIndicator className="absolute left-2 inline-flex items-center justify-center text-primary">
          <CheckIcon className="w-4 h-4" />
        </Select.ItemIndicator>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);
SelectItem.displayName = "SelectItem";

export default LanguageSwitcher;
