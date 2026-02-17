"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f6f2e7]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f6f2e7_0%,#fdfdfd_45%,#e7eef8_72%,#123f7c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.9),transparent_44%)]" />
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-[0.07]" />

      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="logo-shine relative h-[84px] w-[84px] overflow-hidden rounded-2xl border border-accent/50 bg-gradient-to-br from-primary to-primary-600 p-2 shadow-[0_16px_36px_rgba(15,43,89,0.3)]">
          <Image
            src={siteConfig.logo}
            alt="IEM logo"
            width={84}
            height={84}
            className="h-full w-full object-contain"
            priority
          />
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#9f7d27] via-[#d3b158] to-[#8f6f20] bg-clip-text text-center font-heading text-[2rem] font-bold tracking-tight text-transparent md:text-[2.2rem]">
          ECE Department
        </h2>

        <div className="relative mt-7 h-44 w-44 md:h-48 md:w-48">
          <div className="absolute inset-0 rounded-full border-[4px] border-accent/45" />
          <div
            className="absolute inset-[10px] rounded-full border-[5px] border-transparent border-r-primary border-t-primary"
            style={{ animation: "spin 3.2s linear infinite" }}
          />
          <div
            className="absolute inset-[24px] rounded-full border-[4px] border-transparent border-b-accent border-l-accent"
            style={{ animation: "spin 2.5s linear infinite reverse" }}
          />
          <div
            className="absolute inset-[37px] rounded-full border-[4px] border-transparent border-r-primary-600 border-t-accent"
            style={{ animation: "spin 2.1s linear infinite" }}
          />
          <div className="absolute inset-[54px] rounded-full border border-accent/40 bg-white/65" />

          <span className="absolute left-[6%] top-[38%] h-2.5 w-2.5 rounded-full bg-primary/90 shadow-sm" />
          <span className="absolute right-[7%] top-[30%] h-2 w-2 rounded-full bg-accent/90 shadow-sm" />
          <span className="absolute right-[12%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-accent/80" />
          <span className="absolute left-[15%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-primary/75" />
          <span className="absolute left-1/2 top-[3%] h-2 w-2 -translate-x-1/2 rounded-full bg-accent/85" />
        </div>

        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary/75">
          Loading Department Portal
        </p>
      </div>
    </div>
  );
}
