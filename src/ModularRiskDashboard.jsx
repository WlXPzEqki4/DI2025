import React, { useState, useRef } from "react";
import wildcards from "./wildcards.json"; // Import content from JSON

const ModularRiskDashboard = ({ leftMargin = "50px" }) => {
  const data = [
    {
      category: "1 - Power in Flux: Geopolitical Wildcards Reshaping the World",
      wildcards: [
        { name: "Africa as a Geopolitical Battleground", level: "Medium" },
        { name: "The Rise of BRICS", level: "High" },
        { name: "Saudi Arabia and Iran Shock Alliance", level: "Low" },
        { name: "Collision of Flashpoints", level: "Almost Certain" },
        { name: "Trump’s Geopolitical Tsunami", level: "High" },
      ],
    },
    {
      category: "2 - Technological Disruptions That Could Redefine Power",
      wildcards: [
        { name: "The Rise of Superintelligence", level: "Almost Certain" },
        { name: "China Breaks Quantum Cryptography", level: "Very High" },
        { name: "Ultra-Advanced Technology", level: "Medium" },
      ],
    },
    {
      category: "3 - Fault Lines of Security and Infrastructure",
      wildcards: [
        { name: "Volt Typhoon: The Invisible Saboteur", level: "High" },
        { name: "Rise of AI War Machines", level: "Low" },
        { name: "Weaponization of Space", level: "Very Low" },
        { name: "Digital Centralization Risks", level: "High" },
      ],
    },
    {
      category: "4 - Economic Shocks and Environmental Disruptions",
      wildcards: [
        { name: "Rise of Financial Multiverses", level: "Medium" },
        { name: "Unregulated Biotech Breakthroughs", level: "Medium" },
      ],
    },
  ];

  const [expandedCategories, setExpandedCategories] = useState([]);
  const [selectedWildcard, setSelectedWildcard] = useState(null);
  const [fadeInMarker, setFadeInMarker] = useState(false);

  const refs = useRef([]);

  const allExpanded = expandedCategories.length === data.length;

  const toggleCategory = (category, index) => {
    const parentCategory = data.find((group) =>
      group.wildcards.some((wildcard) => wildcard.name === selectedWildcard?.name)
    )?.category;

    if (parentCategory === category && expandedCategories.includes(category)) {
      setSelectedWildcard(null);
    }

    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );

    setTimeout(() => {
      refs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedCategories([]);
      setSelectedWildcard(null);
    } else {
      setExpandedCategories(data.map((item) => item.category));
      setTimeout(() => {
        refs.current[0]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  };

  const toggleWildcardCard = (wildcard) => {
    const content = wildcards.find((item) => item.name === wildcard.name);
    if (selectedWildcard && selectedWildcard.name === wildcard.name) {
      setFadeInMarker(false);
      setTimeout(() => setSelectedWildcard(null), 250); // Matches fade-out duration (0.5s total)
    } else {
      setSelectedWildcard(content || { name: wildcard.name, title: "No Data Available", subheading: "", points: [], details: "Content not found in wildcards.json.", level: "Medium" });
      setTimeout(() => setFadeInMarker(true), 500); // Delay marker fade-in (0.5s)
    }
  };

  const levelPositions = {
    "Very Low": "5%",
    Low: "20%",
    Medium: "50%",
    High: "70%",
    "Very High": "85%",
    "Almost Certain": "95%",
  };

  const levelColors = {
    Low: "#66c2a5",
    Medium: "#fc8d62",
    High: "#e78ac3",
    "Very High": "#d73027",
    "Almost Certain": "#a50026",
    "Very Low": "#1a9641",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
        columnGap: "20px",
        position: "relative",
      }}
    >
      {/* Left Column: Dashboard */}
      <div
        style={{
          flex: "0 0 600px",
          marginLeft: leftMargin,
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "left",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          Warning Levels Dashboard
          <div
            style={{
              height: "4px",
              width: "100%",
              backgroundColor: "red",
              marginTop: "5px",
            }}
          />
        </h1>

        {/* Master Toggle Tab */}
        <div
          style={{
            cursor: "pointer",
            padding: "15px",
            background: "#f4f4f4",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#555",
          }}
          onClick={toggleAll}
        >
          {allExpanded ? "Collapse All" : "Expand All"}
          <span
            style={{
              fontSize: "24px",
              transform: allExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            ▼
          </span>
        </div>

        {/* Individual Categories */}
        {data.map((category, index) => {
          const isExpanded = expandedCategories.includes(category.category);
          return (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              style={{
                marginBottom: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  padding: "15px",
                  background: "#f4f4f4",
                  borderBottom: isExpanded ? "1px solid #ddd" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#555",
                }}
                onClick={() => toggleCategory(category.category, index)}
              >
                {category.category}
                <span
                  style={{
                    fontSize: "24px",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                >
                  ▼
                </span>
              </div>
              <div
                style={{
                  maxHeight: isExpanded ? "500px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                  background: "#fff",
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                    padding: "15px",
                    margin: 0,
                  }}
                >
                  {category.wildcards.map((wildcard, i) => (
                    <li
                      key={i}
                      style={{
                        padding: "10px 15px",
                        margin: "10px 0",
                        borderRadius: "8px",
                        background: levelColors[wildcard.level],
                        color: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleWildcardCard(wildcard)}
                    >
                      <span>{wildcard.name}</span>
                      <span
                        style={{
                          padding: "5px 10px",
                          background: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      >
                        {wildcard.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column: Dossier */}
      {selectedWildcard && (
        <div
          style={{
            flex: "0 0 600px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            opacity: fadeInMarker ? 1 : 0,
            transition: "opacity 0.25s ease", // Faster fade-in/out for dossier card
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            {selectedWildcard.title}
          </h2>
          {/* Color Bar Visualization */}
          <div
            style={{
              height: "20px",
              background: "linear-gradient(to right, #1a9641, #66c2a5, #fc8d62, #d73027, #a50026)",
              borderRadius: "10px",
              marginBottom: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: fadeInMarker ? levelPositions[selectedWildcard.level || "Medium"] : "0%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: "30px",
                background: "#000",
                borderRadius: "2px",
                transition: "left 1s ease, opacity 0.25s ease",
                opacity: fadeInMarker ? 1 : 0,
              }}
            ></div>
          </div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#555",
            }}
          >
            {selectedWildcard.subheading}
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              color: "#555",
            }}
          >
            {selectedWildcard.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p
            style={{
              marginTop: "10px",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            {selectedWildcard.details}
          </p>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toggleWildcardCard(selectedWildcard)}
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default ModularRiskDashboard;




