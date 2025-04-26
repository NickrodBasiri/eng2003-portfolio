import React from "react";

export default function Button({ children, href }) {
  return (
    <a
      href={href}
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-medium mt-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
