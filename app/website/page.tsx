"use client";

import { useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

export default function WebsitePage() {
  // local state to store the website Url
  const [websiteUrl, setWebsiteUrl] = useState<string>("");

  // state to store the generated QR code image data URL
  const [qrCodeDataURL, setQRCodeDataURL] = useState<string | null>(null);

  // function to submit the form and get the qr code from the api
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const errorCorrectionLevel = "H";

      // Generate QR code as Data URL
      const qrCodeDataURL = await QRCode.toDataURL(websiteUrl, {
        errorCorrectionLevel: errorCorrectionLevel,
        version: 9,
        color: {
          dark: "#000", // Color of the QR code
          light: "#fff", // Background color
        },
      });

      setQRCodeDataURL(qrCodeDataURL);
      console.log("QR code generated successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="h-screen p-4 py-20 xl:px-0">
      <h1 className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-center text-2xl font-bold tracking-wide text-transparent md:text-4xl">
        Generate QR for Website
      </h1>
      <div className="mx-auto mt-14 w-full max-w-sm rounded-2xl border-2 border-purple-500 bg-white p-4 text-black">
        <form onSubmit={handleFormSubmit}>
          <div className="space-y-1">
            <label htmlFor="website" className="font-medium">
              Website Url
            </label>
            <input
              type="url"
              name="website"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="Enter your Url"
              className="h-10 w-full rounded-md border-2 p-4"
            />
          </div>
          <button className="mt-4 h-10 w-full rounded bg-green-200 tracking-wide text-green-900">
            Generate QR
          </button>
        </form>
        {qrCodeDataURL && (
          <div>
            <div className="relative mx-auto grid w-full place-items-center overflow-hidden py-4">
              <Image
                src={qrCodeDataURL}
                alt={"QR Code"}
                title={"User generated website qr code"}
                width={240}
                height={240}
              />
            </div>
            <a
              href={qrCodeDataURL}
              download="website-qr-code.png"
              className="block w-full rounded bg-purple-200 p-2 text-center font-medium tracking-wide text-purple-900"
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
