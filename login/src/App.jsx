import React, { useState } from "react";
import DetectionBox from "./components/DetectionBox";
import IssuesBox from "./components/IssuesBox";
import SignInOptions from "./components/SignInOptions";
import CompanyLogo from "./components/CompanyLogo";

function App() {
  const [mode, setMode] = useState("saas");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row text-sm">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <div className="flex flex-col space-y-8 w-full max-w-md">
          <DetectionBox />
          <IssuesBox />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <CompanyLogo />
            <h2 className="mt-4 text-2xl font-bold">Welcome to CodeAnt AI</h2>
          </div>

          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`flex-1 text-center py-2 rounded-md transition-colors ${
                mode === "saas" ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setMode("saas")}
            >
              SAAS
            </button>
            <button
              className={`flex-1 text-center py-2 rounded-md transition-colors ${
                mode === "selfhosted"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setMode("selfhosted")}
            >
              Self Hosted
            </button>
          </div>

          <SignInOptions mode={mode} />

          <p className="text-center text-xl text-gray-600">
            By signing up you agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
