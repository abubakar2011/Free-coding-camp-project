const meetingNameInput = document.getElementById("meetingName");
const meetingDateInput = document.getElementById("meetingDate");
const meetingTimeInput = document.getElementById("meetingTime");
const meetingsList = document.getElementById("meetings");

// Function to schedule a meeting
function scheduleMeeting() {
  const meetingName = meetingNameInput.value;
  const meetingDate = meetingDateInput.value;
  const meetingTime = meetingTimeInput.value;

  if (meetingName === "" || meetingDate === "" || meetingTime === "") {
    alert("Please fill in all the fields.");
    return;
  }

  const meetingItem = document.createElement("li");
  meetingItem.textContent = `${meetingName} - ${meetingDate}, ${meetingTime}`;
  meetingsList.appendChild(meetingItem);

  meetingNameInput.value = "";
  meetingDateInput.value = "";
  meetingTimeInput.value = "";
}

// Sample initial meetings
const initialMeetings = [
  { name: "Team Meeting", date: "2023-07-15", time: "10:00" },
  { name: "Project Presentation", date: "2023-07-20", time: "14:30" },
  { name: "Brainstorming Session", date: "2023-07-25", time: "11:00" }
];

// Populate initial meetings
initialMeetings.forEach((meeting) => {
  const meetingItem = document.createElement("li");
  meetingItem.textContent = `${meeting.name} - ${meeting.date}, ${meeting.time}`;
  meetingsList.appendChild(meetingItem);
});
