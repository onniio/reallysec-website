import { cn } from "@/lib/utils";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full min-h-screen">
        {children}
      </div>
    </>
  );
}