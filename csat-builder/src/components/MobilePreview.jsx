import React, { useState } from "react";

function MobilePreview({ campaign }) {
  const [selectedRating, setSelectedRating] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mobile-wrapper">
        <div className="mobile-frame">
          <div
            className="mobile-screen"
            style={{
              background: campaign.bgColor,
            }}
          >
            <div className="notch"></div>

            <div className="thankyou-container">
              {campaign.image && (
                <img
                  src={campaign.image}
                  alt="thank-you"
                  className="thankyou-image"
                />
              )}

              <h2
                style={{
                  color: campaign.titleColor,
                  fontSize: campaign.fontSize + "px",
                  fontWeight: campaign.fontWeight,
                }}
              >
                {campaign.thankYouTitle}
              </h2>

              <p
                style={{
                  color: campaign.subtitleColor,
                }}
              >
                {campaign.thankYouSubtitle}
              </p>

              <button
                className="preview-btn"
                style={{
                  background: campaign.buttonColor,
                  color: campaign.buttonTextColor,
                  borderRadius: campaign.borderRadius + "px",

                  width: campaign.buttonWidth + "%",

                  height: campaign.buttonHeight + "px",
                }}
                onClick={() => setSubmitted(false)}
              >
                {campaign.thankYouButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-wrapper">
      <div className="mobile-frame">
        <div
          className="mobile-screen"
          style={{
            background: campaign.bgColor,
          }}
        >
          <div className="notch"></div>

          <h2
            style={{
              color: campaign.titleColor,

              fontSize: campaign.fontSize + "px",

              fontWeight: campaign.fontWeight,
            }}
          >
            {campaign.title}
          </h2>

          <p
            style={{
              color: campaign.subtitleColor,
              marginTop: "10px",
            }}
          >
            {campaign.subtitle}
          </p>

          {/* Rating */}

          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                onClick={() => setSelectedRating(star)}
                style={{
                  color:
                    star <= selectedRating
                      ? campaign.selectedRatingColor
                      : campaign.unselectedRatingColor,
                }}
              >
                ★
              </span>
            ))}
          </div>

          {/* Options */}

          <div className="options-container">
            {campaign.options.map((option, index) => (
              <div key={index} className="option-item">
                {option}
              </div>
            ))}
          </div>

          {/* Comment */}

          {campaign.allowComment && (
            <textarea
              className="comment-box"
              placeholder="Additional feedback..."
            />
          )}

          {/* Submit */}

          <button
            className="preview-btn"
            style={{
              background: campaign.buttonColor,

              color: campaign.buttonTextColor,

              borderRadius: campaign.borderRadius + "px",

              width: campaign.buttonWidth + "%",

              height: campaign.buttonHeight + "px",
            }}
            onClick={() => setSubmitted(true)}
          >
            {campaign.submitText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobilePreview;
