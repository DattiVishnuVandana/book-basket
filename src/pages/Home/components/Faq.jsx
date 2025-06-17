import { Accordion } from "./Accordian";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use CodeBook?",
      answer:
        "CodeBook offers a curated collection of computer science ebooks from trusted authors and institutions. It’s designed for developers, students, and tech enthusiasts who want easy access to high-quality resources, with features like bookmarking, rating, and offline reading support."
    },
    {
      id: 2,
      question: "Can I access my eBook on mobile?",
      answer:
        "Yes, all your purchased and saved ebooks are accessible on mobile devices through our responsive web platform. We're also working on a dedicated mobile app for an even smoother reading experience."
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "We offer refunds within 7 days of purchase if you're not satisfied with the ebook and haven't downloaded or completed more than 20% of it. Please reach out to our support team with your order details."
    },
    {
      id: 4,
      question: "Do you support international payments?",
      answer:
        "Yes, we accept major international payment methods including Visa, MasterCard, PayPal, and UPI (for Indian users). All transactions are processed securely with end-to-end encryption."
    }
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Questions in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
