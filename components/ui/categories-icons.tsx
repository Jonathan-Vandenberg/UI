import React, { ReactNode } from "react";
import Settings from "../svg/settings";
import Career from "../svg/career";
import Education from "../svg/education";
import Identification from "../svg/identification";
import Passport from "../svg/passport";
import Residence from "../svg/residence";
import Transactions from "../svg/transactions";
import Banking from "../svg/bank";
import Card from "./Card";
import Link from "next/link";
import Wallet from "../svg/wallet";

export function Icon({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <Link href={href}>
        <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
          {children}
        </div>
      </Link>
      <p className="text-xs text-slate-500 leading-normal tracking-widest text-center">
        {title}
      </p>
    </div>
  );
}

export default function CategoriesIcons() {
  return (
    <Card className="w-full">
      <div className="grid-icons w-full text-slate-700 bg-white">
        <Icon title="ID" href="/identification">
          <Identification width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Passport" href="/banking">
          <Banking width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Driving License" href="/residence">
          <Residence width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Visa" href="/passport">
          <Passport width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="CC" href="/education">
          <Education width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Birth Certificate" href="/career">
          <Career width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Councel Registration" href="/transactions">
          <Transactions width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Something" href="/wallet">
          <Wallet width={28} height={28} stroke={1.3} />
        </Icon>
      </div>
    </Card>
  );
}
