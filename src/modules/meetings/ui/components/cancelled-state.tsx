import EmptyState from "@/components/empty-state";
import React from "react";

const CancelledState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center">
      <EmptyState
        image="/cancelled.svg"
        title="Meeting cancelled"
        decription="This meeting was cancelled"
      />
    </div>
  );
};

export default CancelledState;
