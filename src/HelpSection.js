import React, { useState } from 'react';
import './HelpSection.css';

function HelpSection() {
  const [searchTerm, setSearchTerm] = useState('');

  // Updated FAQ content for Kenyan citizens viewing the budget
  const faqs = [
    { question: 'How can I view the national budget?', answer: 'To view the national budget, navigate to the "Budget Overview" section on the dashboard. You can access detailed breakdowns by department and category there.' },
    { question: 'How do I access budget information for specific departments?', answer: 'In the "Budget Overview" section, use the dropdown menu to select a specific department. This will display detailed budget allocations and spending for that department.' },
    { question: 'Can I see budget data for different regions?', answer: 'Yes, you can view budget data by region. Go to the "Regional Breakdown" tab, where you can select different regions to see their respective budget allocations and expenditures.' },
    { question: 'What are the key programs funded by the budget?', answer: 'Under the "Programs" section, you can find information about major programs funded by the budget, such as the Big Four Agenda and the National Health Insurance Fund (NHIF).' },
    { question: 'How can I find out how much is spent on healthcare?', answer: 'To find out healthcare spending, go to the "Departmental Spending" section and select "Ministry of Health." This will show you the budget allocated to healthcare and related categories.' },
    { question: 'Where can I find historical budget data?', answer: 'Historical budget data can be accessed in the "Historical Data" section of the budget overview. This section provides past budget data for comparison and analysis.' },
    { question: 'How often is the budget data updated?', answer: 'The budget data is updated quarterly to reflect the latest expenditures and allocations. Check the "Update Logs" section for the most recent updates.' },
    { question: 'What should I do if I notice discrepancies in the budget data?', answer: 'If you find any discrepancies, please report them using the feedback form available in the "Contact Us" section. Our team will review and address any issues promptly.' },
    // Add more FAQs as needed
  ];

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="Help-section">
      <h2>Help & Support</h2>
      <div className="Help-search">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="Help-content">
        <div className="Help-item">
          <h3>Frequently Asked Questions</h3>
          <ul>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <li key={index}>
                  <strong>{faq.question}</strong>
                  <p>{faq.answer}</p>
                </li>
              ))
            ) : (
              <li>No FAQs found for your search.</li>
            )}
          </ul>
        </div>
        <div className="Help-item">
          <h3>Contact Support</h3>
          <p>If you need further assistance, please reach out to our support team:</p>
          <p>Email: <a href="mailto:support@budgettracker.com">support@budgettracker.com</a></p>
          <p>Phone: +254-800-123-4567</p>
          <p>You can also use the live chat feature available on the bottom right corner of the screen for immediate help.</p>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
