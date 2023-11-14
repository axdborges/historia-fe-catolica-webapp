"use client"

import "../../styles/globals.css";
import "../styles.css";

import { MailChimpForm } from "@/components/MailChimpForm";

export default function BookPage() {
  return (
    <>
      <section className="bg-slate-50">
        <MailChimpForm/>
      </section>
    </>
  );
}
