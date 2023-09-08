import React from "react";
import Logo from "../../../public/logo_h.jpeg";
import Image from "next/image";

export default function ResetPage() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image src={Logo} alt="insurahub" width={64} height={64} />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The token you provided is invalid. Please try again.
          </p>
        </div>
      </div>
    </div>
  );
}
