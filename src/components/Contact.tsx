import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
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
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...values,
          timestamp: new Date().toISOString(),
          source: "Digisaga kontaktskjema"
        })
      });
      if (response.ok) {
        toast({
          title: "Takk for din henvendelse!",
          description: "Vi tar kontakt med deg innen 24 timer.",
          variant: "default"
        });
        form.reset();
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
  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "kontakt@digisaga.net";
    try {
      window.location.href = `mailto:${email}`;
      await navigator.clipboard.writeText(email);
      toast({
        title: "E-postadresse kopiert!",
        description: "E-postadressen er kopiert til utklippstavlen.",
        variant: "default"
      });
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  };
  return <section id="contact" className="py-20 bg-digisaga-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-digisaga-blue uppercase mb-3">
            Kontakt oss
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar for vekst? <span className="highlight-box">La oss løfte</span> bedriften din
          </h2>
          <p className="text-lg text-gray-600">
            Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe deg med AI-automasjon, nettside eller SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <Card className="border-none shadow-lg bg-white p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Send oss en melding</h3>
              
              {/* Trust indicators */}
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
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel>Navn *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ditt navn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="company" render={({
                field
              }) => <FormItem>
                      <FormLabel>Bedrift (valgfritt)</FormLabel>
                      <FormControl>
                        <Input placeholder="Bedriftsnavn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>E-post *</FormLabel>
                      <FormControl>
                        <Input placeholder="din@epost.no" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="service" render={({
                field
              }) => <FormItem>
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
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel>Beskrivelse av behov (valgfritt)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Fortell oss kort om ditt prosjekt eller dine behov..." className="min-h-24" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <Button type="submit" className="w-full bg-digisaga-blue hover:bg-digisaga-darkBlue text-white py-6 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sender..." : "Send melding"}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Ved å sende inn skjemaet godtar du at vi kontakter deg angående din henvendelse.
                </p>
              </form>
            </Form>
          </Card>
          
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontaktinformasjon</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-digisaga-lightBlue p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-digisaga-blue" />
                  </div>
                  <div>
                    <p className="font-medium">E-post</p>
                    <a href="mailto:kontakt@digisaga.net" className="text-digisaga-blue hover:underline">kontakt@digisaga.no</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-digisaga-lightBlue p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-digisaga-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+4791241836" className="text-digisaga-blue hover:underline">+47 91241836</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-digisaga-lightBlue p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-digisaga-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p>Bekkestua, Bærum</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-none shadow-lg bg-digisaga-blue text-white p-8">
              <h3 className="text-xl font-bold mb-4">Gratis konsultasjon</h3>
              <p className="mb-6">
                Usikker på hva du trenger? Vi tilbyr en gratis konsultasjon
                for å diskutere dine mål og behov.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  30 minutters konsultasjon
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Ingen salgspress
                </div>
              </div>
              <ContactDialog>
                <Button variant="secondary" className="w-full mt-6 py-5">
                  Book konsultasjon
                </Button>
              </ContactDialog>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;