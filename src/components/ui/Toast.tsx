import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle, Info, X, XCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ToastProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  onClose?: () => void;
  duration?: number;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertCircle,
};

const styles = {
  success: 'bg-green-50 border-green-500 text-green-800',
  error: 'bg-red-50 border-red-500 text-red-800',
  info: 'bg-blue-50 border-blue-500 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-500 text-yellow-800',
};

export default function Toast({
  type = 'info',
  title,
  message,
  onClose,
  duration = 5000,
}: ToastProps) {
  const Icon = icons[type];

  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'animate-fade-in fixed top-4 right-4 w-96 border-l-4 p-4 shadow-lg',
        styles[type]
      )}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="ml-3 flex-1">
          <p className="font-medium">{title}</p>
          {message && <p className="mt-1 text-sm">{message}</p>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 rounded hover:opacity-75"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}