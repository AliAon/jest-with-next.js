"use client";
export default function BtnAlert() {
  const handleAlert = () => {
    alert("Alert");
  };
  return (
    <button className="btn" onClick={handleAlert}>
      Alert
    </button>
  );
}
