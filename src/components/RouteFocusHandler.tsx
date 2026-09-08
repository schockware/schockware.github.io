import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface RouteFocusHandlerProps {
  children: ReactNode;
}

// Moves focus to the new page's <main> on every route change, so
// keyboard/screen-reader users get the same "you navigated" signal
// sighted users get from the visual change. See
// design/ARCHITECTURE.md ("Accessibility (WCAG)").
export function RouteFocusHandler({ children }: RouteFocusHandlerProps) {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <main ref={mainRef} tabIndex={-1}>
      {children}
    </main>
  );
}
