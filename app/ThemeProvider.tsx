'use client';

import React, { useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("cupcake");

  const toggleTheme = (name:string) => {
    setTheme(name);
  };
  useEffect(() => {
    // Dynamically set the `data-theme` attribute on the <html> element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      
          <button
            onClick={()=> toggleTheme("luxury")}
            className="fixed top-4 right-4 btn btn-primary"
          >
            Toggle Theme luxury
          </button>
          <button
            onClick={()=> toggleTheme("retro")}
            className="fixed top-4 right-50 btn btn-primary"
          >Toggle Theme retro</button>
          <button
            onClick={()=> toggleTheme("valentine")}
            className="fixed top-4 right-100 btn btn-primary"
          >Toggle Theme valentine</button>
          <button
            onClick={()=> toggleTheme("winter")}
            className="fixed top-4 right-150 btn btn-primary"
          >Toggle Theme winter</button>
          <button
            onClick={()=> toggleTheme("dark")}
            className="fixed top-4 right-200 btn btn-primary"
          >Toggle Theme dark</button>
            <br />
            <br />
            <br />
          {children}
     </>
    
  );
};

export default ThemeProvider;