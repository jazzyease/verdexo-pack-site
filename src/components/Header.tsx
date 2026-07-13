"use client";

import Image from "next/image";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useState } from "react";

type HeaderProps = { onStartProject: () => void };

export function Header({ onStartProject }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = ["Work", "Services", "Process", "Resources", "About"];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Verdexo Packaging Studio home">
        <Image src="/images/verdexo-logo.png" alt="Verdexo Ventures" width={150} height={62} priority unoptimized />
        <span>Packaging Studio</span>
      </a>
      <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
        <button className="nav-cta mobile-only" onClick={onStartProject}>Start a project <ArrowUpRight /></button>
      </nav>
      <button className="nav-cta desktop-only" onClick={onStartProject}>Start a project <ArrowUpRight /></button>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X /> : <List />}
      </button>
    </header>
  );
}
