import React from "react";
// import Container from "./container";
import { Skeleton } from "./skeleton";
import image from "public/latina.png";
import Image from "next/image";

export default function IdentificationInfo({ information }: any) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-10">
        {information.name && (
          <div className="relative flex items-center justify-center h-36 w-36 shrink-0 rounded-full mx-auto mt-4 overflow-visible pt-6">
            <Image
              src={image}
              width={500}
              height={500}
              className="z-20 rounded-full"
              alt="Picture of the author"
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-start space-y-3 text-gray-600 w-full pt-6">
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Name</p>
            {information.name ? (
              <p className="font-semibold text-black">{information.name}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Surname</p>
            {information.surname ? (
              <p className="font-semibold text-black">{information.surname}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>ID</p>
            {information.ID ? (
              <p className="font-semibold text-black">{information.ID}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Support</p>
            {information.support ? (
              <p className="font-semibold text-black">{information.support}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Address</p>
            {information.address ? (
              <p className="font-semibold text-black">{information.address}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Birth Date</p>
            {information.birthCertificate ? (
              <p className="font-semibold text-black">
                {information.birthCertificate}
              </p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Issuer</p>
            {information.issuer ? (
              <p className="font-semibold text-black">{information.issuer}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Issue Date</p>
            {information.issueDate ? (
              <p className="font-semibold text-black">
                {information.issueDate}
              </p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Expiration</p>
            {information.expirationDate ? (
              <p className="font-semibold text-black">
                {information.expirationDate}
              </p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Nationality</p>
            {information.nationality ? (
              <p className="font-semibold text-black">
                {information.nationality}
              </p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Mother</p>
            {information.mother ? (
              <p className="font-semibold text-black">{information.mother}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
          <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
            <p>Father</p>
            {information.father ? (
              <p className="font-semibold text-black">{information.father}</p>
            ) : (
              <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full mr-6" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
