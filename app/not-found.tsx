import Link from "next/link";

import { buttonVariants } from "./components/ui/button";
import { cn } from "./lib/utils";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "mt-6")}
        href="/"
      >
        Go back to Home
      </Link>
    </div>
  );
}
