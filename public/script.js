document.getElementById("application-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.pillars = formData.getAll("pillars");
  
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error submitting the form. Please try again.");
      console.error(error);
    }
  });
  