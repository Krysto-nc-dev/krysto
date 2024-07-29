"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import HeadingPage from '@/components/HeadingPage';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

// Schéma de validation pour le formulaire
const ProductFormSchema = z.object({
  name: z.string().min(1, { message: "Le nom du produit est requis." }),
  description: z.string().optional(),
  price: z.number().positive({ message: "Le prix doit être un nombre positif." }),
  images: z.string().url({ message: "L'URL de l'image doit être valide." }).optional(),
  is_featured: z.boolean().optional(),
});

const NewProductPage = () => {
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      images: "",
      is_featured: false,
    },
  });

  const onSubmit = (data) => {
    // Logique pour gérer la soumission du produit
    console.log('Product submitted:', data);
    toast({
      title: "Produit ajouté avec succès !",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <section className="container min-h-screen bg-gray-100 ">

<HeadingPage title={"Ajouter un nouveaux produit"} />
    <div className="mx-auto bg-white p-8 rounded-lg shadow-lg max-w-4xl mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/3 px-2 mb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du produit</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom du produit" {...field} className="w-full"/>
                    </FormControl>
                
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prix</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Prix" {...field} className="w-full"/>
                    </FormControl>
           
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Description du produit"
                    {...field}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
            
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images (URL)</FormLabel>
                <FormControl>
                  <Input placeholder="URL des images" {...field} className="w-full focus:ring-2 focus:ring-blue-500"/>
                </FormControl>
          
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
              control={form.control}
              name="is_featured"
              render={({ field }) => (
                <FormItem className="flex items-center w-full">
                  <FormLabel>Produit en vedette</FormLabel>
                  <FormControl>
                    <Input type="checkbox" {...field} className="scale-50 transform transition-all" />
                  </FormControl>
                </FormItem>
              )}
            />
          <Button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition">
            Ajouter le produit
          </Button>
        </form>
      </Form>
    </div>
  </section>

  );
};

export default NewProductPage;
