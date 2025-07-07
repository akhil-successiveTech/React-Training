"use client"
import dynamic from 'next/dynamic';
const  AboutComponent = dynamic(() => import('@/app/Components/about'), {
   
    loading: () => (
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Loading About...
      </div>
    ),
    ssr: false,
  }
);

export default function Page() {
    return(
    <>
      <AboutComponent />;
   
    </>
    )
  }

  