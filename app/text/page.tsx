"use client";

import { useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";
import Input from "@/app/_ui/input";
import { ChangeEvent, FormEvent } from "@/app/_lib/types";

export default function TextPage() {
  // local state to store text
  const [text, setText] = useState<string>("");

  // state to store the generated QR code image data URL
  const [qrCodeDataURL, setQRCodeDataURL] = useState<string | null>(null);

  // onchange Function
  const handleOnChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setText(value);
  };

  // function to submit the form and get the qr code from the api
  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const errorCorrectionLevel = "H";

      // Generate QR code as Data URL
      const qrCodeDataURL = await QRCode.toDataURL(text, {
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
        Generate QR for Sms
      </h1>
      <div className="qr-card">
        <form onSubmit={handleFormSubmit}>
          <Input
            keyName={"text"}
            label={"Enter Text"}
            type={"text"}
            value={text}
            placeholder={"Enter Your Text"}
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
              download="text-qr.png"
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
