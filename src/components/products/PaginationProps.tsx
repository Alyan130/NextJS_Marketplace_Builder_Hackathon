import React from "react";

interface PaginationProps {
  total: number; 
  current: number; 
  onPageChange: (page: number) => void;
}

 const PaginationProps: React.FC<PaginationProps> = ({ total, current, onPageChange }) => {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div className="flex space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            current === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationProps;