const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination issues. The system was showing a 23% higher recommendation rate for one demographic group over others with similar qualifications.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information for chemical handling that could have led to hazardous situations. The model confidently stated incorrect mixing ratios that would have created toxic gas if followed.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in responses. The information included session duration and general location data but no personally identifiable information was compromised.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Deepfake Detection Failure",
    description: "AI verification system failed to identify a series of deepfake videos, allowing them to be published on the platform. The system's accuracy dropped from 96% to 72% when faced with a new generation of synthetic content.",
    severity: "High",
    reported_at: "2025-03-25T11:45:00Z"
  },
  {
    id: 5,
    title: "Voice Recognition False Trigger",
    description: "Voice assistant systems were falsely triggered by background noise in a public service announcement, causing thousands of devices to activate simultaneously. This created potential privacy concerns as devices recorded ambient conversations.",
    severity: "Medium",
    reported_at: "2025-03-10T16:20:00Z"
  },
  {
    id: 6,
    title: "Translation Error in Medical Instructions",
    description: "AI translation service incorrectly translated dosage instructions for medication, potentially leading to incorrect usage. The error was caught in quality control before distribution, but highlighted a critical weakness in medical context handling.",
    severity: "Medium",
    reported_at: "2025-03-05T08:30:00Z"
  },
  {
    id: 7,
    title: "Unintended Content Generation",
    description: "Content generation system produced inappropriate images when given ambiguous prompts, bypassing content filters. The system interpreted certain benign phrases in unintended ways due to training data biases.",
    severity: "Low",
    reported_at: "2025-03-18T13:10:00Z"
  }
];

export default mockIncidents;