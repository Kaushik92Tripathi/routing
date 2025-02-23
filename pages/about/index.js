import { useState } from 'react';
import Link from 'next/link';
import companyData from '../../data/employee.json';
import Head from 'next/head';

export default function About() {
  const [activeSection, setActiveSection] = useState('company');
  
  return (
    <>
    <Head>
      <title>About Us</title>
      <meta name="description" content="Learn more about our company and team." />
    </Head>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Company Information */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">{companyData.company.name}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {companyData.company.mission}
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 mr-4 rounded-lg ${
            activeSection === 'company'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('company')}
        >
          Company Overview
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            activeSection === 'team'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveSection('team')}
        >
          Our Team
        </button>
      </div>

      {/* Content Sections */}
      {activeSection === 'company' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">{companyData.company.vision}</p>
            <h3 className="text-xl font-semibold mb-2">Founded</h3>
            <p className="text-gray-600 mb-4">Established in {companyData.company.founded}</p>
            <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
            <p className="text-gray-600">{companyData.company.headquarters}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-2">
              {companyData.company.values.map((value, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyData.company.achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyData.employees.map((employee) => (
            <Link
              href={`/about/${employee.id}`}
              key={employee.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{employee.name}</h3>
              <p className="text-blue-600 mb-2">{employee.position}</p>
              <p className="text-gray-600 mb-2">{employee.department}</p>
              <p className="text-sm text-gray-500">Experience: {employee.experience}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  );

}