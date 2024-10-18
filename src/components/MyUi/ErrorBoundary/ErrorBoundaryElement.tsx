import { Redo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type ErrorBoundaryElementProps = {
  error: Error;
  resetErrorBoundary: () => void;
  title?: string;
  retryMessage?: string;
};

const ErrorBoundaryElement = ({
  error,
  resetErrorBoundary,
  title = "Algo salio mal:",
  retryMessage = "Reintentar",
}: ErrorBoundaryElementProps) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert" className="w-full flex flex-col p-8 items-center">
      <p className="text-neutral-950 text-center font-bold">{title}</p>
      <pre className="text-red-600 text-center">{error.message}</pre>

      <Button
        type="button"
        onClick={() => resetErrorBoundary()}
        className=""
      >
        <Redo2 />
        {retryMessage}
      </Button>
    </div>
  );
};

export default ErrorBoundaryElement;
