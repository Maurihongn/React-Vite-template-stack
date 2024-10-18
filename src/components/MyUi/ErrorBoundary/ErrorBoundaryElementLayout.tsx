import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundaryElement from "./ErrorBoundaryElement";
import { ErrorBoundary } from "react-error-boundary";

type ErrorBoundaryElementLayoutProps = {
  children: React.ReactNode;
};

export function ErrorBoundaryElementLayout({ children }: ErrorBoundaryElementLayoutProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={ErrorBoundaryElement} onReset={reset}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

