"use client";

import * as React from "react";
import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface LightboxModalProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function LightboxModal({
  trigger,
  title,
  description,
  children,
  className,
  contentClassName,
}: LightboxModalProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "border-border/50 max-w-3xl overflow-hidden rounded-lg border p-0 shadow-lg",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[state=closed]:duration-200 data-[state=open]:duration-300",
          className
        )}
      >
        <div className="relative">
          <button
            onClick={() => setOpen(false)}
            className="bg-background/80 hover:bg-background/90 focus:ring-ring absolute top-4 right-4 z-10 rounded-full p-1.5 backdrop-blur-sm transition-colors focus:ring-2 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className={cn("p-6", contentClassName)}>{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
