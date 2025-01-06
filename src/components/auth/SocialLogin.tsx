import React from 'react';

interface SocialLoginProps {
  onGoogleClick: () => void;
  onLinkedInClick: () => void;
}

export default function SocialLogin({ onGoogleClick, onLinkedInClick }: SocialLoginProps) {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onGoogleClick}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <img
            className="h-5 w-5"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
          />
        </button>
        <button
          type="button"
          onClick={onLinkedInClick}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <img
            className="h-5 w-5"
            src="https://www.svgrepo.com/show/448234/linkedin.svg"
            alt="LinkedIn logo"
          />
        </button>
      </div>
    </div>
  );
}