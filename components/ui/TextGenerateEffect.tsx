// TextGenerateEffect.tsx (Server Component)
import { cn } from "@/lib/utils";
import { TextGenerateClient } from "./TextGenerateClient"; // Import client-side animation logic

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <TextGenerateClient words={words} filter={filter} duration={duration} />
        </div>
      </div>
    </div>
  );
};
