import React, {useState} from 'react';
import {sendOpenAICall} from './utils/openAIAPIMethods'

export default function Conversation() {
  
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setLoading(true);
    console.log('before submit');
    const resp = await sendOpenAICall(prompt);
    console.log('test: ', resp);
    setApiResponse(resp);
    await setLoading(false);
  }

  // const renderQuizContent = () => {
  //   switch (currentStep) {
  //     case 0:
  //       return renderInitialStep();
  //     case 1:
  //       return <>Step 2 of Quiz</>
  //     default:
  //       return <>Quiz here</>
  //   }
  // }
  
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={prompt}
            placeholder="Please ask to openai"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <pre>
            <strong>API response:</strong>
            {apiResponse}
          </pre>
        </div>
      )}
    </>
  )
}