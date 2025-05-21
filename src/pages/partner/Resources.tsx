import { Download, FileText, Video, Book } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: 'Marketing Materials',
      items: [
        {
          title: 'Loan Product Brochure',
          type: 'PDF',
          size: '2.5 MB',
          icon: FileText,
        },
        {
          title: 'Social Media Kit',
          type: 'ZIP',
          size: '15 MB',
          icon: FileText,
        },
        {
          title: 'Email Templates',
          type: 'DOC',
          size: '500 KB',
          icon: FileText,
        },
      ],
    },
    {
      category: 'Training Videos',
      items: [
        {
          title: 'Lead Generation Strategies',
          duration: '15 mins',
          type: 'MP4',
          icon: Video,
        },
        {
          title: 'Loan Application Process',
          duration: '20 mins',
          type: 'MP4',
          icon: Video,
        },
        {
          title: 'Customer Communication',
          duration: '12 mins',
          type: 'MP4',
          icon: Video,
        },
      ],
    },
    {
      category: 'Documentation',
      items: [
        {
          title: 'Partner Handbook',
          type: 'PDF',
          size: '1.8 MB',
          icon: Book,
        },
        {
          title: 'Commission Structure',
          type: 'PDF',
          size: '500 KB',
          icon: Book,
        },
        {
          title: 'Compliance Guidelines',
          type: 'PDF',
          size: '1.2 MB',
          icon: Book,
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Partner Resources</h1>
        <p className="text-gray-600">
          Access marketing materials, training videos, and documentation to help you succeed.
        </p>
      </div>

      <div className="space-y-8">
        {resources.map((category) => (
          <div key={category.category} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <item.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">
                          {item.duration ? `Duration: ${item.duration}` : `${item.type} · ${item.size}`}
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}