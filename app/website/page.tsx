"use client";

import { useState } from "react";
import QRCode from "qrcode";

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
        version: 7,
        color: {
          dark: "#c084fc", // Color of the QR code
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
    <section className="h-auto p-4 xl:px-0">
      <h1>Website page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="url"
          name="website"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="h-10 w-full max-w-xs rounded-md border-2 p-4 text-black"
        />
        <button>Submit</button>
      </form>

      <div className="">
        {qrCodeDataURL && (
          <div className="">
            <img src={qrCodeDataURL} alt="QR Code" />
            <a
              href={qrCodeDataURL}
              download="website-qr-code.png"
              className="mt-4 block text-blue-500 hover:text-blue-700"
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
