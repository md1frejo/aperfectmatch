"use client";

import { useState } from "react";
import Gallery from "./Gallery";
import GenderToggle from "./GenderToggle";

type Props = {
  photos: any[];
  genderFilter: string;
  photoGenders: string[];
};

export default function ClientPage({ photos, genderFilter, photoGenders }: Props) {
  const [activated, setActivated] = useState(false);

  return (
    <>
      <GenderToggle
        current={genderFilter}
        activated={activated}
        setActivated={setActivated}
      />

      <Gallery
        photos={photos}
        gender={photoGenders}
        activated={activated}
      />
    </>
  );
}
