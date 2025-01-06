import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { Role } from '@prisma/client';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    let redirectPath = '/';
    
    switch (user.role) {
      case 'ADMIN':
        redirectPath = '/admin';
        break;
      case 'INFLUENCER':
        redirectPath = '/dashboard/influencer';
        break;
      case 'BUSINESS':
        redirectPath = '/dashboard/business';
        break;
    }
    
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}