import React from "react";

export default function Card({ title, children, pdfUrl }) {
  return (
    <div className="border rounded-2xl shadow-md p-6 bg-white text-center w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold text-left">{title}</h3>
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            View
          </a>
        )}
      </div>
      <div className="text-gray-700 space-y-2 text-left">{children}</div>
    </div>
  );
}
