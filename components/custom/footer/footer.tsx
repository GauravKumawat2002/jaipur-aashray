import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
export default function Footer({ className }: Props) {
  return (
    <footer className="w-full bg-slate-900">
      <div
        className={cn(
          "flex flex-col items-start justify-between lg:flex-row lg:items-center",
          className,
        )}
      >
        {/* logo & social links  */}
      </div>
    </footer>
  );
}
