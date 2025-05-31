import React, { useState } from "react";

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return; // Only numbers allowed

    // Update OTP value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Focus on next input
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      if (otp[index]) {
        // Just clear the current field
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        onChange(newOtp.join(""));
      } else if (index > 0) {
        // Move to previous input and clear it
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        onChange(newOtp.join(""));
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };
  

  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "center" }}
      className="otpBox"
    >
      {otp.map((data, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "45px",
            height: "45px",
            textAlign: "center",
            fontSize: "17px",
          }}
        />
      ))}
    </div>
  );
};

export default OtpBox;
