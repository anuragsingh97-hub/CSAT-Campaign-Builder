import { useState } from "react";
import ContentPage from "./components/ContentPage";
import StylingPage from "./components/StylingPage";
import MobilePreview from "./components/MobilePreview";
import "./App.css";

function App() {
  const [campaign, setCampaign] = useState({
    title: "How was your experience?",
    subtitle: "Your feedback helps us improve.",

    options: ["Excellent", "Good", "Average"],

    allowComment: true,

    submitText: "Submit",

    thankYouTitle: "Thank You!",
    thankYouSubtitle: "Your feedback has been recorded.",
    thankYouButtonText: "Done",

    image: "",

    bgColor: "#ffffff",
    titleColor: "#111827",
    subtitleColor: "#6b7280",

    buttonColor: "#2563eb",
    buttonTextColor: "#ffffff",

    fontSize: 18,
    fontWeight: 600,

    borderRadius: 12,

    buttonWidth: 100,
    buttonHeight: 45,

    selectedRatingColor: "#facc15",
    unselectedRatingColor: "#d1d5db",
  });

  return (
    <div className="container">
      <div className="left-panel">
        <ContentPage
          campaign={campaign}
          setCampaign={setCampaign}
        />

        <StylingPage
          campaign={campaign}
          setCampaign={setCampaign}
        />
      </div>

      <div className="right-panel">
        <MobilePreview campaign={campaign} />
      </div>
    </div>
  );
}

export default App;