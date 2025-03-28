"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  Printer,
  ShieldCheck,
  Layers,
  Lock,
  BookOpen,
} from "lucide-react";

// Type definitions for Privacy Policy Sections
export interface PrivacyPolicySection {
  id: string;
  title: string;
  content: string[];
  icon?: React.ComponentType;
}

export interface PrivacyPolicyProps {
  companyName: string;
  lastUpdated: string;
  sections: PrivacyPolicySection[];
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyProps> = ({
  companyName,
  lastUpdated,
  sections,
}) => {
  const [printMode, setPrintMode] = useState(false);

  const handlePrint = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 100);
  };

  const handleDownload = () => {
    const content = generateTextContent();
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${companyName.toLowerCase().replace(/\s+/g, "-")}-privacy-policy.txt`;
    link.click();
  };

  const generateTextContent = () => {
    let content = `${companyName} - Privacy Policy\n`;
    content += `Last Updated: ${lastUpdated}\n\n`;

    sections.forEach((section) => {
      content += `${section.title}\n`;
      section.content.forEach((paragraph) => {
        content += `${paragraph}\n\n`;
      });
    });

    return content;
  };

  return (
    <div
      className={`relative mx-auto px-4 py-8 ${
        printMode ? "print:bg-white print:text-black" : ""
      }`}
    >
      {/* Decorative Background Gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-100 to-slate-100 opacity-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-12 text-center">
        <div className="mb-4 flex items-center justify-center">
          <ShieldCheck
            className="mr-4 text-red-500"
            size={48}
            strokeWidth={1.5}
          />
          <h1 className="text-4xl font-bold text-slate-800">Privacy Policy</h1>
        </div>
        <p className="flex items-center justify-center text-lg text-slate-600">
          <BookOpen className="mr-2 text-red-500" size={20} />
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex justify-end space-x-4 print:hidden">
        <Button
          variant="outline"
          className="group text-slate-700 hover:bg-slate-100"
          onClick={handlePrint}
        >
          <Printer className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
          Print
        </Button>
        <Button
          variant="destructive"
          className="group bg-red-500 hover:bg-red-600"
          onClick={handleDownload}
        >
          <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          Download
        </Button>
      </div>

      {/* Privacy Policy Sections */}
      <div className="relative z-10 space-y-8">
        {sections.map((section) => {
          const IconComponent = section.icon || Layers;
          return (
            <div key={section.id} className="group relative">
              {/* Decorative Diagonal Line */}
              <div
                className="absolute top-0 bottom-0 -left-6 w-0.5 bg-red-100 transition-colors group-hover:bg-red-200"
                style={{
                  transform: "skew(-15deg)",
                  transformOrigin: "top left",
                }}
              />

              <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:translate-x-2 hover:shadow-xl">
                {/* Section Header */}
                <div className="mb-4 flex items-center border-b border-slate-200 pb-2">
                  <IconComponent
                    className="mr-4 text-red-500"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="relative space-y-4 text-slate-700">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="relative leading-relaxed">
                      <span className="absolute top-1.5 -left-5 h-3 w-3 rounded-full bg-red-100 opacity-0 transition-opacity group-hover:opacity-100" />
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="relative z-10 mt-12 text-center text-sm text-slate-500 print:hidden">
        <div className="flex items-center justify-center">
          <Lock className="mr-2 text-red-500" size={20} strokeWidth={1.5} />
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@{companyName.toLowerCase().replace(/\s+/g, "")}.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
