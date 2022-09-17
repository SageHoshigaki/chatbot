import ChatBot from "react-simple-chatbot";
import "./App.css";

function App() {
  const Steps = [
    {
      id: "1",
      message: "Welcome To ClaimBot",
      trigger: "2",
    },

    {
      id: "2",
      message: "would yo like to see if you have a claim",
      trigger: "3",
    },

    {
      id: "3",
      options: [
        { value: 1, label: "Yes", trigger: "4" },
        { value: 2, label: "No", trigger: "7" },
      ],
    },

    {
      id: "4",
      message: "Are There Errors on Your Credit Report",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        { value: 1, label: "Yes", trigger: "8" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "6",
      message: "You Do Not Have A Claim GoodBye",
      end: true,
    },
    {
      id: "7",
      message: "Goodbye",
      end: true,
    },
    {
      id: "8",
      message: "Are The Errors 5 Years Or Older",
      trigger: "9",
    },
    {
      id: "9",
      options: [
        { value: 1, label: "Yes", trigger: "10" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "10",
      message: "Did You Dispute the information",
      trigger: "11",
    },
    {
      id: "11",
      options: [
        { value: 1, label: "Yes", trigger: "12" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "12",
      message: "Did You Dispute the information within the last 2 years",
      trigger: "13",
    },
    {
      id: "13",
      options: [
        { value: 1, label: "Yes", trigger: "14" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "14",
      message: "Did you dispute with CRAs First?Send with mail tracking",
      trigger: "15",
    },
    {
      id: "15",
      options: [
        { value: 1, label: "Yes", trigger: "16" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "16",
      message: "Did you dispute with CRAs First?Send with mail tracking",
      trigger: "17",
    },
    {
      id: "17",
      options: [
        { value: 1, label: "Yes", trigger: "18" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "18",
      message: "Did you dispute with CRAs First? (Send with mail tracking)",
      trigger: "19",
    },
    {
      id: "19",
      options: [
        { value: 1, label: "Yes", trigger: "20" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
    {
      id: "20",
      message: "Did you dispute the completeness and accuracy of the account?",
      trigger: "21",
    },
    {
      id: "21",
      options: [
        { value: 1, label: "Yes", trigger: "22" },
        { value: 2, label: "No", trigger: "23" },
      ],
    },
    {
      id: "22",
      message: "Did you wait 30 days for a completed reinvestigation?",
      trigger: "21",
    },
    {
      id: "23",
      message: "Did you dispute any information within th",
      trigger: "21",
    },
    {
      id: "24",
      options: [
        { value: 1, label: "Yes", trigger: "22" },
        { value: 2, label: "No", trigger: "6" },
      ],
    },
  ];
  return (
    <div className="App">
      <div className="card-container">
        <ChatBot steps={Steps} />
      </div>
    </div>
  );
}

export default App;
