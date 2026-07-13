"use client";

import Image from "next/image";
import { ArrowRight, List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { useState } from "react";

type HeaderProps = { onStartProject: () => void };

export function Header({ onStartProject }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "work"],
    ["Categories", "work"],
    ["Process", "process"],
    ["Resources", "resources"],
    ["About", "about"],
  ];

  return (
    <>
      <div className="announcement">Packaging design + production support for growing Indian brands</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Verdexo Packaging Studio home">
          <Image src="/images/verdexo-logo.png" alt="Verdexo Ventures" width={132} height={52} priority unoptimized />
          <span>Packaging Studio</span>
        </a>
        <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {links.map(([label, target]) => (
            <a key={label} href={`#${target}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button className="nav-cta mobile-only" onClick={onStartProject}>Get a packaging quote <ArrowRight /></button>
        </nav>
        <div className="header-actions">
          <a className="header-search" href="#work" aria-label="Browse designs"><MagnifyingGlass /></a>
          <button className="nav-cta desktop-only" onClick={onStartProject}>Get a packaging quote <ArrowRight /></button>
        </div>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <List />}
        </button>
      </header>
    </>
  );
}
