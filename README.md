Calendar Management System
### Overview
The Calendar Management System is a web-based application designed to facilitate event management through an interactive calendar interface. It allows users to create, edit, view, and delete events seamlessly using a modern, responsive calendar interface powered by Shadcn Calendar.

### Features
Interactive Calendar: Navigate months, view days, and interact with events.
Event Management: Add, edit, and delete events directly from the calendar.
Modal Popups: Display event details and form inputs for event creation/management.
Responsive Design: Optimized for various screen sizes, offering a seamless user experience.
Technologies Used
Frontend: React, Shadcn Calendar
Styling: CSS Modules
State Management: useState

### Notice Regarding Styling Approach

Although the assignment originally specified the use of Shadcn, due to the ongoing final exams and the limited timeframe, I opted for a more traditional approach using modular css configurations. 

While this choice was made to meet the project deadline efficiently, I assure you that I have the capability to implement Shadcn if required. If any changes are needed in the future, I am prepared to adapt accordingly.

### Usage
Calendar Grid Component
Navigating Months: Use "Previous" and "Next" buttons to move between months.
Event Interaction: Click on a day to add, edit, or delete events.
Modal Dialogs: View event details and manage events through modal popups.
Event Form
Creating Events: Fill in event details like name, start time, end time, and optional description.
Editing Events: Modify event details within the same form.
Deleting Events: Remove events with the delete button, resetting the border style to default.

### File Structure:
calendar-management-system/
├── src/
│   ├── components/
│   │   ├── CalendarGrid.jsx
│   │   └── eventModal.jsx
│   └── styles/
│       └── Calendar.module.css
├── public/
├── .gitignore
├── package.json
├── README.md
└── package-lock.json

License
This project is licensed under the MIT License. See the LICENSE file for more details.

