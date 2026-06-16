import React from "react";

function StylingPage({ campaign, setCampaign }) {
  const updateField = (field, value) => {
    setCampaign({
      ...campaign,
      [field]: value,
    });
  };

  return (
    <div className="card">
      <h2 className="section-title">
        Styling Configuration
      </h2>

      {/* Background Color */}
      <div className="input-group">
        <label>Background Color</label>
        <input
          type="color"
          value={campaign.bgColor}
          onChange={(e) =>
            updateField("bgColor", e.target.value)
          }
        />
      </div>

      {/* Title Color */}
      <div className="input-group">
        <label>Title Color</label>
        <input
          type="color"
          value={campaign.titleColor}
          onChange={(e) =>
            updateField(
              "titleColor",
              e.target.value
            )
          }
        />
      </div>

      {/* Subtitle Color */}
      <div className="input-group">
        <label>Subtitle Color</label>
        <input
          type="color"
          value={campaign.subtitleColor}
          onChange={(e) =>
            updateField(
              "subtitleColor",
              e.target.value
            )
          }
        />
      </div>

      {/* Button Color */}
      <div className="input-group">
        <label>Button Color</label>
        <input
          type="color"
          value={campaign.buttonColor}
          onChange={(e) =>
            updateField(
              "buttonColor",
              e.target.value
            )
          }
        />
      </div>

      {/* Button Text Color */}
      <div className="input-group">
        <label>Button Text Color</label>
        <input
          type="color"
          value={campaign.buttonTextColor}
          onChange={(e) =>
            updateField(
              "buttonTextColor",
              e.target.value
            )
          }
        />
      </div>

      <hr />

      {/* Font Size */}
      <div className="input-group">
        <label>
          Font Size : {campaign.fontSize}px
        </label>

        <input
          type="range"
          min="12"
          max="40"
          value={campaign.fontSize}
          onChange={(e) =>
            updateField(
              "fontSize",
              Number(e.target.value)
            )
          }
        />
      </div>

      {/* Font Weight */}
      <div className="input-group">
        <label>Font Weight</label>

        <select
          value={campaign.fontWeight}
          onChange={(e) =>
            updateField(
              "fontWeight",
              Number(e.target.value)
            )
          }
        >
          <option value="400">
            Normal
          </option>

          <option value="500">
            Medium
          </option>

          <option value="600">
            Semi Bold
          </option>

          <option value="700">
            Bold
          </option>
        </select>
      </div>

      <hr />

      {/* Border Radius */}
      <div className="input-group">
        <label>
          Border Radius :
          {campaign.borderRadius}px
        </label>

        <input
          type="range"
          min="0"
          max="30"
          value={campaign.borderRadius}
          onChange={(e) =>
            updateField(
              "borderRadius",
              Number(e.target.value)
            )
          }
        />
      </div>

      {/* Button Width */}
      <div className="input-group">
        <label>
          Button Width :
          {campaign.buttonWidth}%
        </label>

        <input
          type="range"
          min="40"
          max="100"
          value={campaign.buttonWidth}
          onChange={(e) =>
            updateField(
              "buttonWidth",
              Number(e.target.value)
            )
          }
        />
      </div>

      {/* Button Height */}
      <div className="input-group">
        <label>
          Button Height :
          {campaign.buttonHeight}px
        </label>

        <input
          type="range"
          min="35"
          max="70"
          value={campaign.buttonHeight}
          onChange={(e) =>
            updateField(
              "buttonHeight",
              Number(e.target.value)
            )
          }
        />
      </div>

      <hr />

      {/* Rating Selected Color */}
      <div className="input-group">
        <label>
          Rating Selected Color
        </label>

        <input
          type="color"
          value={
            campaign.selectedRatingColor
          }
          onChange={(e) =>
            updateField(
              "selectedRatingColor",
              e.target.value
            )
          }
        />
      </div>

      {/* Rating Unselected Color */}
      <div className="input-group">
        <label>
          Rating Unselected Color
        </label>

        <input
          type="color"
          value={
            campaign.unselectedRatingColor
          }
          onChange={(e) =>
            updateField(
              "unselectedRatingColor",
              e.target.value
            )
          }
        />
      </div>
    </div>
  );
}

export default StylingPage;