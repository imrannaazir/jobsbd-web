import { cn } from "@/lib/utils";
import { TContainerProps } from '@/type';

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1420px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
