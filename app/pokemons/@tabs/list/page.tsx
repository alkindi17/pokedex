"use client";

import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";
export default function Tabs() {
  return (
    <>
      <CustomInfiniteHits
        future={{
          preserveSharedStateOnUnmount: true,
        }}
      />
    </>
  );
}
