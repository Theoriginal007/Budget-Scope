// Define updated questions and answers
const responses = {
  "what is the budget for this year": "The budget for this year is 3.6trillion.",
  "How much have we spent so far?": "You have spent $1200 so far.",
  "What are the main expense categories?": "The main categories are groceries, utilities, and entertainment.",
  "How can I save more money?": "Consider setting a budget for each category and tracking your expenses regularly.",
  "What is the average spending in the last three months?": "Your average spending in the last three months is $1500 per month.",
  "How much should I allocate for dining out?": "Based on your budget, you should allocate $200 for dining out this month.",
  "Can you remind me of my financial goals?": "Your financial goals include saving $2000 by the end of the year and reducing discretionary spending by 10%.",
  "How does my spending this month compare to last month?": "This month's spending is 10% higher than last month's.",
  "What is the percentage of my income spent this month?": "You have spent 24% of your income this month.",
  "What categories are exceeding their budget this month?": "The categories exceeding their budget this month are dining out and entertainment.",
  "What is the planned budget for next month?": "The planned budget for next month is $5500.",
};

// Define and export the function
export async function sendMessageToChatbot(message) {
  // Return a response based on the message
  return new Promise((resolve) => {
    setTimeout(() => {
      const reply = responses[message] || "Sorry, I don't understand that question.";
      resolve(reply);
    }, 500); // Simulate network delay
  });
}