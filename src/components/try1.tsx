import { useEffect } from "react";

import useSpeechToText from "react-hook-speech-to-text";

const VoiceToText = () => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false,
  });

  // useEffect(() => {
  // startSpeechToText();
  // });
  console.log(interimResult);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <>
      <div>
        <h1>Recording: {isRecording.toString()}</h1>
        <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        <ul>
          {results.map((result: any) => (
            <li key={result.timestamp}>{result.transcript}</li>
          ))}
          {interimResult && <li>{interimResult}</li>}
        </ul>
      </div>
    </>
  );
};

export default VoiceToText;

// import React from "react";

// const index = () => {
//   return <div>index</div>;
// };

// export default index;
