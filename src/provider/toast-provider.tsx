import { Toaster } from "@/components/ui/sonner";

export const ToastProvider = () => {
  return (
    <Toaster
      theme="light"
      richColors
      position="bottom-right"
      className="bg-neutral-100 shadow-lg"
    />
  );
};
