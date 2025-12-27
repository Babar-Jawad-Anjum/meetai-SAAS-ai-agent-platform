import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  decription: string;
}

const EmptyState = ({ title, decription }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image src="/empty.svg" alt="Empty" width={240} height={240}  />
        <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          <p className="text-sm text-muted-foreground">{decription}</p>
      </div>
    </div>
  );
};
 
export default EmptyState;
