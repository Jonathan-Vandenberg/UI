import React from "react";

import Link from "next/link";
import Button from "../../components/ui/button";

export default function page() {
  return (
    <div className="">
      <h2>Banking Page</h2>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
