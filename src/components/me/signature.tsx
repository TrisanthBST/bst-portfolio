"use client";

import { useEffect } from "react";

export function Signature() {
  useEffect(() => {
    console.log(
      "%c BST Developers %c Built by B. Trisanth %c https://github.com/TrisanthBST ",
      "color:#fff; font-weight:bold; font-size:14px; padding:8px 12px; border-radius:6px 0 0 6px; background:linear-gradient(135deg, #f97316, #fb923c);",
      "color:#fff; font-size:14px; padding:8px 12px; background:linear-gradient(135deg, #0f172a, #38bdf8);",
      "font-size:14px; padding:8px 12px; border-radius:0 6px 6px 0; background:#1c1c1c;"
    );
  }, []);

  return null;
}
