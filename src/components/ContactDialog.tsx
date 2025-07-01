
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Shield, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Navn er påkrevd"
  }),
  company: z.string().optional(),
  email: z.string().email({
    message: "Ugyldig e-postadresse"
  }),
  service: z.string().min(1, {
    message: "Vennligst velg hva du ønsker hjelp med"
  }),
  message: z.string().optional()
});

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const webhookUrl = "https://hook.eu2.make.com/afhpwmdt2dyc337dof474u4gokpaeqtf";
      
      console.log("Sending data to Make.com webhook:", values);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          timestamp: new Date().toISOString(),
          source: "Digisaga kontaktskjema - Popup"
        })
      });

      if (response.ok) {
        toast({
          title: "Takk for din henvendelse!",
          description: "Vi tar kontakt med deg innen 24 timer.",
          variant: "default"
        });
        form.reset();
        setIsOpen(false);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending to webhook:", error);
      toast({
        title: "Noe gikk galt",
        description: "Vennligst prøv igjen senere.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Kontakt oss</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2 text-green-600" />
            Ingen forpliktelser
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-digisaga-blue" />
            Svar innen 24 timer
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField 
              control={form.control} 
              name="name" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Navn *</FormLabel>
                  <FormControl>
                    <Input placeholder="Ditt navn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} 
            />
            
            <FormField 
              control={form.control} 
              name="company" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedrift (valgfritt)</FormLabel>
                  <FormControl>
                    <Input placeholder="Bedriftsnavn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} 
            />
            
            <FormField 
              control={form.control} 
              name="email" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-post *</FormLabel>
                  <FormControl>
                    <Input placeholder="din@epost.no" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} 
            />
            
            <FormField 
              control={form.control} 
              name="service" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hva ønsker du hjelp med? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Velg tjeneste" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ai-automasjon">AI Automasjon</SelectItem>
                      <SelectItem value="nettside">Nettside / E-commerce</SelectItem>
                      <SelectItem value="seo">SEO Optimalisering</SelectItem>
                      <SelectItem value="kombinasjon">Kombinasjon av tjenester</SelectItem>
                      <SelectItem value="annet">Annet</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} 
            />
            
            <FormField 
              control={form.control} 
              name="message" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beskrivelse av behov (valgfritt)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Fortell oss kort om ditt prosjekt..." 
                      className="min-h-20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} 
            />
            
            <Button 
              type="submit" 
              className="w-full bg-digisaga-blue hover:bg-digisaga-darkBlue text-white py-4" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sender..." : "Send melding"}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Ved å sende inn skjemaet godtar du at vi kontakter deg angående din henvendelse.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
