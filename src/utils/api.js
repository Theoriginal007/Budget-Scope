// src/utils/api.js

const API_URL = 'https://api.example.com'; // Replace with your actual API base URL
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

/**
 * Categorizes an expense based on its description.
 * @param {string} description - The description of the expense.
 * @returns {Promise<string>} - The category of the expense or 'Uncategorized' if no category is returned.
 */
export const categorizeExpense = async (description) => {
  try {
    const response = await fetch(`${API_URL}/categorize-expense`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,  // Using template literal for the API key
      },
      body: JSON.stringify({ description })
    });

    if (!response.ok) {
      const errorText = await response.text(); // Read error response body if available
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    const data = await response.json();
    return data.category || 'Uncategorized';  // Return 'Uncategorized' if no category is provided
  } catch (error) {
    console.error('Error categorizing expense:', error);
    return 'Uncategorized';  // Fallback category
  }
};
