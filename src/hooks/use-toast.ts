
import { useToast as useToastUI } from "@/components/ui/use-toast";

export const useToast = () => {
  const { toast } = useToastUI();
  
  return {
    success: (title: string, description?: string) => {
      toast({
        title,
        description,
        variant: "default",
      });
    },
    error: (title: string, description?: string) => {
      toast({
        title,
        description,
        variant: "destructive",
      });
    },
    info: (title: string, description?: string) => {
      toast({
        title,
        description,
      });
    },
  };
};
