"use client";

import { useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";
import Input from "@/app/_ui/input";
import { ChangeEvent, FormEvent } from "@/app/_lib/types";

export default function WebsitePage() {
  // local state to store the website Url
  const [siteUrl, setSiteUrl] = useState<string>("");

  // state to store the generated QR code image data URL
  const [qrCodeDataURL, setQRCodeDataURL] = useState<string | null>(null);

  // onchange Function
  const handleOnChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setSiteUrl(value);
  };

  // function to submit the form and get the qr code from the api
  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const errorCorrectionLevel = "H";

      // Generate QR code as Data URL
      const qrCodeDataURL = await QRCode.toDataURL(siteUrl, {
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
    <section className="section">
      <h1 className="gradient-text text-center text-2xl font-bold md:text-4xl">
        Generate QR for Site / link
      </h1>
      <div className="qr-card">
        <form onSubmit={handleFormSubmit}>
          <Input
            keyName={"siteUrl"}
            label={"Enter Url"}
            type={"text"}
            value={siteUrl}
            placeholder={"https://github.com/mohit2404"}
            hadleOnChange={handleOnChange}
          />
          <button className="generate-button">Generate QR</button>
        </form>
        {qrCodeDataURL && (
          <div>
            <div className="qr-image">
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
              download="site-url-qr.png"
              className="download-button"
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
