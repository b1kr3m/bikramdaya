"use client";

import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import { donationAmounts, siteConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function DonationCard() {
  const [selected, setSelected] = useState<number>(1000);
  const [custom, setCustom] = useState(false);
  const [customVal, setCustomVal] = useState("");

  const handleDonate = () => {
    // Replace with your Razorpay / payment gateway integration
    window.open(siteConfig.donateUrl, "_blank");
  };

  return (
    <div
      className="rounded-3xl p-7 md:p-9"
      style={{
        background:
          "linear-gradient(135deg, rgba(31,122,63,0.14), rgba(255,255,255,0.02))",
        border: "1px solid rgba(31,122,63,0.22)",
      }}
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div>
          <h3 className="font-serif font-bold text-white text-xl">
            Make a Donation
          </h3>
          <p className="text-white/45 text-xs mt-1">
            Choose an amount or enter your own.
          </p>
        </div>
        <span className="font-handwrite text-green-muted text-xl leading-tight">
          &ldquo;I will never let you down.&rdquo;
        </span>
      </div>

      {/* Amount pills */}
      <div className="flex flex-wrap gap-2.5 mb-5">
        {donationAmounts.map((amt) => (
          <button
            key={amt.value}
            onClick={() => {
              setSelected(amt.value);
              setCustom(false);
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm border transition-all duration-200",
              selected === amt.value && !custom
                ? "bg-green-primary border-green-primary text-white"
                : "border-white/15 text-white/60 hover:border-white/30 hover:text-white bg-transparent"
            )}
          >
            {amt.label}
          </button>
        ))}

        {/* Custom amount */}
        <button
          onClick={() => {
            setCustom(true);
            setSelected(0);
          }}
          className={cn(
            "px-4 py-2 rounded-full text-sm border transition-all duration-200",
            custom
              ? "bg-green-primary border-green-primary text-white"
              : "border-white/15 border-dashed text-white/50 hover:text-white"
          )}
        >
          Other ✎
        </button>
      </div>

      {/* Custom input */}
      {custom && (
        <div className="mb-5">
          <input
            type="number"
            placeholder="Enter amount (₹)"
            value={customVal}
            onChange={(e) => setCustomVal(e.target.value)}
            className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-green-primary/50 transition-colors"
          />
        </div>
      )}

      {/* Donate button */}
      <button
        onClick={handleDonate}
        className="w-full flex items-center justify-center gap-2 bg-green-primary hover:bg-green-light text-white font-semibold text-[0.95rem] py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-primary/30"
      >
        Donate Now
        <ArrowRight size={16} />
      </button>

      {/* Trust line */}
      <p className="text-center text-white/25 text-[0.7rem] tracking-widest uppercase mt-3 flex items-center justify-center gap-1">
        <Shield size={10} />
        Secure · Transparent · Trusted
      </p>
    </div>
  );
}
