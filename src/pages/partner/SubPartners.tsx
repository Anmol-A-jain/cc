import React from 'react';

function SubPartners() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sub-Partners Management</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Sub-Partner Network</h2>
          <p className="text-gray-600">
            Manage and track your sub-partners' performance from this dashboard.
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">No Sub-Partners Yet</h3>
            <p className="text-gray-600 mb-4">
              Start growing your network by inviting potential sub-partners to join your team.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Invite Sub-Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubPartners;