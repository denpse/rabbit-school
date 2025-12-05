"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DonationCard from "@/components/DonationCard";

const DonatePage = () => {
  const t = useTranslations();

  // Get array safely with .raw()
  const resourceItems = t.raw("donatePage.resourceDonations.items") as string[];

  return (
    <div className="font-sans">
      {/* Top Banner */}
      <section className="relative w-full h-64 sm:h-[600px] flex items-center justify-center ">
        <Image
          src="/images/New Pictures P14.jpg"
          alt="Children receiving support"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#623D3C]">
            {t("donatePage.hero.title")}
          </h1>
          <p className="text-gray-700 mt-4">
            {t("donatePage.hero.description")}
          </p>
        </div>

        {/* In-kind Items */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-[#623D3C]">
            {t("donatePage.resourceDonations.title")}
          </h2>
          <p className="text-gray-700 mb-2">
            {t("donatePage.resourceDonations.intro")}
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {resourceItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Bank Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-[#623D3C]">
            {t("donatePage.financial.title")}
          </h2>
          <p className="text-gray-700">
            {t("donatePage.financial.description")}
          </p>
          <br />
          <div>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>{t("donatePage.financial.price1")} </strong>
                {t("donatePage.financial.desc1")}
              </li>
              <li>
                <strong>{t("donatePage.financial.price2")} </strong>
                {t("donatePage.financial.desc2")}
              </li>
            </ul>
          </div>
        </div>
        <p className="font-semibold text-md">
          {t("donatePage.financial.descbank")}
        </p>
        <br />

        {/* ABA QR Code Section */}
        <DonationCard />
      </section>
    </div>
  );
};

export default DonatePage;
