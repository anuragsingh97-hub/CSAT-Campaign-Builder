import React from "react";

function ContentPage({ campaign, setCampaign }) {
  const updateField = (field, value) => {
    setCampaign({
      ...campaign,
      [field]: value,
    });
  };

  const addOption = () => {
    setCampaign({
      ...campaign,
      options: [...campaign.options, ""],
    });
  };

  const deleteOption = (index) => {
    const updated = campaign.options.filter((_, i) => i !== index);

    setCampaign({
      ...campaign,
      options: updated,
    });
  };

  const updateOption = (index, value) => {
    const updated = [...campaign.options];
    updated[index] = value;

    setCampaign({
      ...campaign,
      options: updated,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);

      setCampaign({
        ...campaign,
        image: imageURL,
      });
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">Content Configuration</h2>

      {/* Initial Feedback Section */}

      <h3 className="sub-heading">Initial Feedback</h3>

      <div className="input-group">
        <label>Title</label>

        <input
          type="text"
          value={campaign.title}
          onChange={(e) => updateField("title", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Subtitle</label>

        <textarea
          rows="3"
          value={campaign.subtitle}
          onChange={(e) => updateField("subtitle", e.target.value)}
        />
      </div>

      <hr />

      {/* Feedback Page */}

      <h3 className="sub-heading">Feedback Page</h3>

      <div className="input-group">
        <label>Feedback Options</label>

        {campaign.options.map((option, index) => (
          <div className="option-row" key={index}>
            <input
              type="text"
              value={option}
              placeholder={`Option ${index + 1}`}
              onChange={(e) => updateOption(index, e.target.value)}
            />

            <button
              className="btn btn-danger"
              onClick={() => deleteOption(index)}
            >
              Delete
            </button>
          </div>
        ))}

        <button className="btn btn-primary" onClick={addOption}>
          Add Option
        </button>
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          checked={campaign.allowComment}
          onChange={(e) => updateField("allowComment", e.target.checked)}
        />

        <label>Enable Additional Comment</label>
      </div>

      <div className="input-group">
        <label>Submit Button Text</label>

        <input
          type="text"
          value={campaign.submitText}
          onChange={(e) => updateField("submitText", e.target.value)}
        />
      </div>

      <hr />

      {/* Thank You Page */}

      <h3 className="sub-heading">Thank You Page</h3>

      <div className="input-group">
        <label>Upload Image</label>

        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <div className="input-group">
        <label>Thank You Title</label>

        <input
          type="text"
          value={campaign.thankYouTitle}
          onChange={(e) => updateField("thankYouTitle", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Thank You Subtitle</label>

        <textarea
          rows="2"
          value={campaign.thankYouSubtitle}
          onChange={(e) => updateField("thankYouSubtitle", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Thank You Button Text</label>

        <input
          type="text"
          value={campaign.thankYouButtonText}
          onChange={(e) => updateField("thankYouButtonText", e.target.value)}
        />
      </div>
    </div>
  );
}

export default ContentPage;
