
import { supabase } from "@/integrations/supabase/client";

export const getPortfolioImageUrl = (fileName: string): string => {
  const { data } = supabase.storage
    .from('portfolio-images')
    .getPublicUrl(fileName);
  
  console.log(`Image URL for ${fileName}:`, data.publicUrl);
  
  return data.publicUrl;
};
