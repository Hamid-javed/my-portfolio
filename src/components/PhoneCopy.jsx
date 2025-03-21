import React from "react";

const PhoneCopy = () => {
  const phoneNumber = "+923156107225";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div onClick={copyToClipboard} className="cursor-pointer">
      {phoneNumber}
    </div>
  );
};

export default PhoneCopy;
