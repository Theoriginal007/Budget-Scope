import React, { useState } from 'react';
import './Sidebar.css'; // Ensure this file contains the updated CSS for styling

function Sidebar() {
  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    department: '',
    timeframe: '',
    region: '',
    program: '',
    agency: ''
  });

  // State to manage dropdown visibility
  const [dropdowns, setDropdowns] = useState({
    department: false,
    timeframe: false,
    region: false,
    program: false,
    agency: false
  });

  // State to manage search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to manage department details
  const [departmentInfo, setDepartmentInfo] = useState('');

  // Handlers for filter changes
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
    if (filterType === 'department') {
      setDepartmentInfo(departmentDetails[value] || '');
    }
  };

  // Handler to toggle dropdown visibility
  const toggleDropdown = (filterType) => {
    setDropdowns(prevDropdowns => ({
      ...prevDropdowns,
      [filterType]: !prevDropdowns[filterType]
    }));
  };

  // Handler to clear all filters
  const handleClearFilters = () => {
    setSelectedFilters({
      department: '',
      timeframe: '',
      region: '',
      program: '',
      agency: ''
    });
    setSearchQuery('');
    setDepartmentInfo('');
  };

  // Filter options based on search query
  const filterOptions = (options) => {
    return options.filter(option =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Dropdown options
  const departments = [
    'Ministry of Finance',
    'National Treasury',
    'Office of the Controller of Budget',
    'Kenya Revenue Authority',
    'Public Service Commission',
    'State Department for Planning',
    'Ministry of Devolution and ASAL',
    'National Assembly Budget Office',
    'Ministry of Economic Planning',
    'Ministry of Health',
    'Ministry of Education',
    'Ministry of Agriculture',
    'Ministry of Transport',
    'Ministry of Energy',
    'Ministry of Water and Sanitation',
    'Ministry of Industrialization',
    'Ministry of Youth Affairs',
    'Ministry of Sports',
    'Ministry of Foreign Affairs',
    'Ministry of Defense',
    'Ministry of Interior and Coordination of National Government',
    'Ministry of Labor and Social Protection',
    'Ministry of Environment and Forestry',
    'Ministry of Tourism and Wildlife',
    'Ministry of Public Service and Gender',
    'Ministry of Culture and Heritage',
    'Ministry of Lands and Physical Planning',
    'Ministry of East African Community',
    'Ministry of ICT, Innovation and Youth Affairs',
    'Ministry of Cooperatives and MSME Development',
    'Ministry of Public Works and Roads',
    'Ministry of Information and Communication Technology',
    'Ministry of Petroleum and Mining',
    'Ministry of Trade, Investments and Industry',
    'Ministry of Transport and Infrastructure',
    'Ministry of Devolution and Planning',
    'Ministry of Water, Sanitation and Irrigation',
    'Ministry of Environment and Natural Resources',
    'Ministry of Agriculture, Livestock and Fisheries',
    'Ministry of National Heritage, Culture and Sports',
    'Ministry of Science and Technology',
    'Ministry of Development of Northern Kenya and Other Arid Lands'
  ];

  const timeframes = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005'
  ];

  const regions = [
    'Nairobi',
    'Central Kenya',
    'Rift Valley',
    'Eastern Kenya',
    'North Eastern Kenya',
    'Coastal Kenya',
    'Western Kenya',
    'Southern Kenya',
    'Northern Kenya'
  ];

  const programs = [
    'Big Four Agenda',
    'National Health Insurance Fund (NHIF)',
    'National Social Security Fund (NSSF)',
    'Kenya Vision 2030',
    'Uwezo Fund',
    'Youth Enterprise Development Fund',
    'Women Enterprise Fund',
    'The Agricultural Sector Development Strategy'
  ];

  const agencies = [
    'Kenya Bureau of Standards (KEBS)',
    'Kenya National Highways Authority (KeNHA)',
    'Kenya Electricity Generating Company (KenGen)',
    'Kenya Power and Lighting Company (KPLC)',
    'National Environmental Management Authority (NEMA)',
    'Kenya Forest Service (KFS)',
    'National Land Commission (NLC)',
    'Kenya Institute of Curriculum Development (KICD)',
    'National Council for Law Reporting (NCLR)',
    'Kenya Ports Authority (KPA)'
  ];

  // Detailed information for each department
  const departmentDetails = {
    'Ministry of Finance': 'The Ministry of Finance is responsible for economic planning, budgeting, and financial management.',
    'National Treasury': 'The National Treasury manages public finances and implements fiscal policies.',
    'Office of the Controller of Budget': 'The Office of the Controller of Budget oversees the budget implementation and expenditure control.',
    // ... add details for other departments as needed
  };

  return (
    <aside className="App-sidebar">
      <h2>Filters</h2>
      <div className="Sidebar-search">
        <input
          type="text"
          placeholder="Search..."
          className="Sidebar-search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="Sidebar-filter">
        <h3 onClick={() => toggleDropdown('department')} className="Sidebar-filter-header">
          Department
          <span className={`dropdown-arrow ${dropdowns.department ? 'up' : 'down'}`}></span>
        </h3>
        {dropdowns.department && (
          <ul className="Sidebar-filter-dropdown">
            {filterOptions(departments).map(department => (
              <li key={department}>
                <button
                  className={selectedFilters.department === department ? 'active' : ''}
                  onClick={() => handleFilterChange('department', department)}
                >
                  {department}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="Sidebar-filter">
        <h3 onClick={() => toggleDropdown('timeframe')} className="Sidebar-filter-header">
          Timeframe
          <span className={`dropdown-arrow ${dropdowns.timeframe ? 'up' : 'down'}`}></span>
        </h3>
        {dropdowns.timeframe && (
          <ul className="Sidebar-filter-dropdown">
            {filterOptions(timeframes).map(timeframe => (
              <li key={timeframe}>
                <button
                  className={selectedFilters.timeframe === timeframe ? 'active' : ''}
                  onClick={() => handleFilterChange('timeframe', timeframe)}
                >
                  {timeframe}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="Sidebar-filter">
        <h3 onClick={() => toggleDropdown('region')} className="Sidebar-filter-header">
          Region
          <span className={`dropdown-arrow ${dropdowns.region ? 'up' : 'down'}`}></span>
        </h3>
        {dropdowns.region && (
          <ul className="Sidebar-filter-dropdown">
            {filterOptions(regions).map(region => (
              <li key={region}>
                <button
                  className={selectedFilters.region === region ? 'active' : ''}
                  onClick={() => handleFilterChange('region', region)}
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="Sidebar-filter">
        <h3 onClick={() => toggleDropdown('program')} className="Sidebar-filter-header">
          Program
          <span className={`dropdown-arrow ${dropdowns.program ? 'up' : 'down'}`}></span>
        </h3>
        {dropdowns.program && (
          <ul className="Sidebar-filter-dropdown">
            {filterOptions(programs).map(program => (
              <li key={program}>
                <button
                  className={selectedFilters.program === program ? 'active' : ''}
                  onClick={() => handleFilterChange('program', program)}
                >
                  {program}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="Sidebar-filter">
        <h3 onClick={() => toggleDropdown('agency')} className="Sidebar-filter-header">
          Agency
          <span className={`dropdown-arrow ${dropdowns.agency ? 'up' : 'down'}`}></span>
        </h3>
        {dropdowns.agency && (
          <ul className="Sidebar-filter-dropdown">
            {filterOptions(agencies).map(agency => (
              <li key={agency}>
                <button
                  className={selectedFilters.agency === agency ? 'active' : ''}
                  onClick={() => handleFilterChange('agency', agency)}
                >
                  {agency}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="Sidebar-clear-filters">
        <button onClick={handleClearFilters} className="clear-filters-btn">
          Clear All Filters
        </button>
      </div>
      {departmentInfo && (
        <div className="Sidebar-department-details">
          <h3>Department Details</h3>
          <p>{departmentInfo}</p>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
