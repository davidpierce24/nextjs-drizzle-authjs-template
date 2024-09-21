// import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-2">
      <Button className="w-fit bg-cyan-400">Create Thing</Button>
    </div>
  );
}
