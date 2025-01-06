import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function SubmitButton({ children, isLoading = false }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {children}
          <span className="absolute right-3 inset-y-0 flex items-center">
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </>
      )}
    </button>
  );
}