import Image from "next/image";
import React from "react";

const DonationCard = () => {
  // Exact colors based on the image
  const colors = {
    bg: "#FAD058", // Mustard Yellow
    text: "#3E2312", // Dark Brown
    border: "#3E2312",
  };

  return (
    <div
      className="flex flex-col md:w-fit w-none"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {/* Main Card Content */}
      <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8 md:gap-0 max-w-3xl">
        {/* LEFT SECTION: Text Info */}
        <div className="flex-1 font-sans text-sm md:text-base space-y-[2px] leading-snug">
          <h2 className="font-bold text-lg mb-1">ACLEDA BANK</h2>

          <p>
            <strong>SWIFT Code:</strong> ACLBKHPP
          </p>
          <p>
            <strong>Bank address:</strong> Building N° 61, Preah
          </p>

          <p>Monivong Blvd., Sangkat Srah Chak,</p>
          <p>Khan Doun Penh, Phnom Penh</p>

          <div className="pt-2">
            <p>
              <strong> ACCOUNT NAME:</strong> RABBIT SCHOOL
            </p>
            <p>
              <strong> ACCOUNT NUMBER:</strong> 2900-01-005152-4-2
            </p>
          </div>
        </div>

        {/* Vertical Divider (Visible on Desktop) */}
        <div className="hidden md:block w-[1px] bg-[#3E2312] mx-8 self-stretch opacity-60"></div>

        {/* RIGHT SECTION: Arrow + QR */}
        <div className="flex flex-col-1 gap-3 items-center justify-center relative min-w-[200px]">
          {/* Curved Arrow (SVG) */}

          {/* Text above QR */}
          <div className="text-center font-medium text-sm leading-tight mb-3 md:mt-8 z-10">
            <p>For Cambodian</p>
            <p>Nationals only. Scan</p>
            <p>here to donate</p>
          </div>

          {/* QR Code Container */}
          <div className="relative w-32 h-32 border-2 border-[#3E2312] p-1 rounded-sm">
            {/* QR Code Image - Using API to generate Brown on Transparent/Yellow */}
            <Image
              width={100}
              height={100}
              src="/images/New Donation Page.jpg"
              alt="QR Code"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Bottom Dark Border Line */}
      {/* <div className="w-full h-[2px] bg-[#3E2312] mt-2"></div> */}
    </div>
  );
};

export default DonationCard;
