import React, { useState } from 'react';
import IntlTelInput from 'intl-tel-input/react/build/IntlTelInput.esm';
import 'intl-tel-input/build/css/intlTelInput.css';

const errorMap = [
"Invalid number",
"Invalid country code",
"Too short",
"Too long",
"Invalid number",
];

function NumValid() {
const [isValid, setIsValid] = useState(null);
const [number, setNumber] = useState(null);
const [errorCode, setErrorCode] = useState(null);
const [notice, setNotice] = useState(null);

const handleSubmit = () => {
  if (isValid) {
    setNotice(`Valid number: ${number}`);
  } else {
    const errorMessage = errorMap[errorCode] || "Invalid number";
    setNotice(`Error: ${errorMessage}`);
  }
};

return (
  <form>
    <IntlTelInput
      onChangeNumber={setNumber}
      onChangeValidity={setIsValid}
      onChangeErrorCode={setErrorCode}
      initOptions={{
        initialCountry: "bd",
        showSelectedDialCode: true,
        utilsScript: "/intl-tel-input/js/utils.js?1707906286003",
      }}
    />
    <button type="button" onClick={handleSubmit}>Validate</button>
    {notice && <div className="notice">{notice}</div>}
  </form>
);
}

export default NumValid