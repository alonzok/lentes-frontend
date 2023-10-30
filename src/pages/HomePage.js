import React from "react";
import PromoCarousel from "../components/PromoCarousel";

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',}}>
      <PromoCarousel />
    </div>
  );
}
