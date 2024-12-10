// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// type TOption = {
//     id: string,
//     name: string
// }

// type TProps = {
//     label: string,
//     options: TOption[]
// }

// const ComboboxForSelection: React.FC<TProps> = ({ label, options }) =>{
//   console.log(options, 'from combo');
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between border-gray-300 p-5 text-gray-500"
//         >
//           {value
//             ? options?.find((option) => option?.name === value)?.name
//             : `Select ${label}...`}
//           <ChevronsUpDown className="opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent>
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {options?.map((option) => (
//                 <CommandItem
//                   key={option?.id}
//                   id={option?.id}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? "" : currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   {option?.name}
//                   <Check
//                     className={cn(
//                       "ml-auto",
//                       value === option?.name ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }

// export default ComboboxForSelection



"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from 'lucide-react';
import { useFormContext, Controller } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type TOption = {
  id: string;
  name: string;
};

type TProps = {
  label: string;
  options: TOption[];
  name: string;
};

const ComboboxForSelection: React.FC<TProps> = ({ label, options, name }) => {
  const [open, setOpen] = React.useState(false);
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between border-gray-300 p-5 text-gray-500"
            >
              {field.value || `Select ${label}...`}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder={`Search ${label}...`} />
              <CommandList>
                <CommandEmpty>No {label} found.</CommandEmpty>
                <CommandGroup>
                  {options?.map((option) => (
                    <CommandItem
                      key={option?.id}
                      onSelect={() => {
                        field.onChange(option.name);
                        setOpen(false);
                      }}
                    >
                      {option?.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          field.value === option?.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  );
};

export default ComboboxForSelection;

