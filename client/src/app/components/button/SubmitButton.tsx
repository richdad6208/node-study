"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
}

export default function SubmitButton({ title }: Props) {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {title}
    </Button>
  );
}
