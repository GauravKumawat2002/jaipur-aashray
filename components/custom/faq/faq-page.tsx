"use client";
import React, { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const FAQ: React.FC<FAQPageProps> = ({ faqs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Buying Properties");

  // Categories from FAQs
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  // Filtered and searched FAQs
  const filteredFAQs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.category === activeCategory &&
        (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [faqs, activeCategory, searchTerm]);

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
        Frequently Asked Questions
      </h1>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" />
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-slate-300 pl-10 focus:border-red-500"
        />
      </div>

      {/* Category Tabs */}
      <Tabs
        defaultValue={activeCategory}
        onValueChange={setActiveCategory}
        className="mb-16"
      >
        <TabsList className="grid h-full w-full grid-cols-2 bg-slate-100 p-2 md:grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* FAQ Accordion */}
      {filteredFAQs.length > 0 ? (
        <Accordion type="single" collapsible className="w-full space-y-4">
          {filteredFAQs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-lg border-slate-200"
            >
              <AccordionTrigger className="rounded-t-lg px-4 text-left text-slate-800 hover:bg-slate-50 hover:text-red-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-slate-50 px-4 py-3 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center text-slate-500">
          No FAQs found for this category.
        </div>
      )}
    </div>
  );
};

export default FAQ;
