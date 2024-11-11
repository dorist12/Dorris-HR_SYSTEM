// Ensure the user is authenticated by checking for the auth token
const token = localStorage.getItem("authToken");
const employeeId = "123"; // Replace this with the actual employee ID or retrieve it dynamically

if (!token) {
    window.location.href = "/index.html"; // Redirect to login if not authenticated
}

// Function to handle form submission
document.getElementById("leave-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const leaveData = {
        employeeId: employeeId,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        reason: document.getElementById("reason").value
    };

    try {
        const response = await fetch("http://localhost:5000/api/leaves", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(leaveData)
        });

        if (response.ok) {
            // Show success message
            document.getElementById("success-message").style.display = "block";
            document.getElementById("success-message").textContent = "Leave request submitted successfully!";

            // Show "Submit Another Request" link
            const newRequestLink = document.getElementById("new-request-link");
            newRequestLink.style.display = "block";
            newRequestLink.onclick = () => {
                // Clear form fields and hide success message
                document.getElementById("startDate").value = "";
                document.getElementById("endDate").value = "";
                document.getElementById("reason").value = "";
                document.getElementById("success-message").style.display = "none";
                newRequestLink.style.display = "none"; // Hide the link after clicking
            };

            // Optionally, refresh the list of leave requests to show the new entry
            fetchLeaveRequests(); 
        } else {
            const errorData = await response.json();
            alert("Failed to submit leave request: " + errorData.message);
        }
    } catch (error) {
        console.error("Error submitting leave request:", error);
        alert("An error occurred while submitting the leave request.");
    }
});

// Function to fetch and display historical leave requests
async function fetchLeaveRequests() {
    try {
        const response = await fetch(`http://localhost:5000/api/leaves/${employeeId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const leaveRequests = await response.json();

        const leaveRequestsContainer = document.getElementById("leave-requests");
        leaveRequestsContainer.innerHTML = ""; // Clear existing content

        // Display each leave request
        leaveRequests.forEach((leave) => {
            const leaveDiv = document.createElement("div");
            leaveDiv.style.padding = "10px";
            leaveDiv.style.marginBottom = "10px";
            leaveDiv.style.border = "1px solid #ccc";
            leaveDiv.style.borderRadius = "4px";
            leaveDiv.innerHTML = `
                <strong>Start Date:</strong> ${new Date(leave.startDate).toLocaleDateString()}<br>
                <strong>End Date:</strong> ${new Date(leave.endDate).toLocaleDateString()}<br>
                <strong>Reason:</strong> ${leave.reason}<br>
                <strong>Status:</strong> ${leave.status}
            `;
            leaveRequestsContainer.appendChild(leaveDiv);
        });
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        document.getElementById("leave-requests").textContent = "Failed to load leave requests.";
    }
}

// Fetch historical leave requests on page load
fetchLeaveRequests();
