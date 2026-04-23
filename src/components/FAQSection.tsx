"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the Minimum Order Quantity (MOQ)?",
    answer:
      "MOQ varies by category: Shirts & Lowers — 50 pcs, T-Shirts — 100 pcs, Jeans & Kurta — 30 pcs, Combos — as low as 1 set. We are flexible for new retailers starting out.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes! We deliver pan-India through trusted courier and transport partners. Standard delivery takes 3-7 business days depending on location. We ensure safe and secure packaging for every order.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Simply message us on WhatsApp with your requirements — product type, quantity, sizes, and preferred colors. We'll share availability, pricing, and confirm your order. Payment can be made via bank transfer, UPI, or cash on delivery for select locations.",
  },
  {
    question: "What is your return or exchange policy?",
    answer:
      "We accept returns/exchanges for manufacturing defects within 7 days of delivery. Products must be unused and in original packaging. Please share photos of the defect on WhatsApp for quick resolution.",
  },
  {
    question: "Can I get customized or branded products?",
    answer:
      "Yes, we offer custom labeling and branding services for bulk orders (500+ pieces). You can add your own brand tags, labels, and packaging. Contact us on WhatsApp for custom order details and pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Bank Transfer (NEFT/RTGS/IMPS), UPI (Google Pay, PhonePe, Paytm), Cash on Delivery (select areas), and Cheque for large orders. Advance payment is required for first-time orders.",
  },
  {
    question: "Do you offer discounts on large orders?",
    answer:
      "Absolutely! We offer tiered pricing — the more you order, the better the rate. Special seasonal discounts are also available during festivals. Contact us for a custom quotation based on your quantity.",
  },
  {
    question: "How do I get the full product catalog?",
    answer:
      "Just send us a WhatsApp message saying 'Send Catalog' and we'll share our latest product catalog with photos, prices, and stock availability within minutes.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border border-gold/15 transition-all duration-300 ${isOpen ? "bg-white shadow-md shadow-gold/5" : "bg-cream/50 hover:bg-white"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={`font-display text-base md:text-lg pr-4 transition-colors ${isOpen ? "text-gold-dark" : "text-ink"}`}>
          {item.question}
        </span>
        <span className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
          isOpen ? "border-gold bg-gold text-ink rotate-45" : "border-gold/30 text-gold-dark rotate-0"
        }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <div className="w-12 h-[1px] bg-gold/30 mb-3" />
          <p className="text-muted text-sm md:text-base leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Common Questions</div>
          <h2 className="font-display text-3xl md:text-5xl text-ink">
            Frequently <span className="italic text-gold-dark">Asked Questions</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Everything retailers want to know before placing their first order.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQAccordionItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted text-sm mb-4">
            Still have questions? We&apos;re happy to help!
          </p>
          <a
            href="https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block px-8 py-3 font-medium tracking-wider text-sm uppercase"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
