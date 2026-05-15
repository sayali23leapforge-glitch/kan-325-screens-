import { useState, useMemo } from 'react'
import { FiBell, FiSearch, FiChevronRight, FiFileText, FiTrash2, FiUploadCloud, FiLock, FiBook, FiBriefcase, FiHeart, FiAlertCircle, FiFile } from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './document-upload.css'

// Icon components for each category
const CategoryIcons = {
  Identity: () => <FiLock size={18} />,
  Education: () => <FiBook size={18} />,
  Experience: () => <FiBriefcase size={18} />,
  Medical: () => <FiHeart size={18} />,
  Legal: () => <FiAlertCircle size={18} />,
  Other: () => <FiFile size={18} />,
}

const employees = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    department: 'Engineering',
    startDate: 'January 15',
    status: 'New Hire',
    avatar: 'https://placehold.co/36x36',
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    role: 'Product Manager',
    department: 'Product',
    startDate: 'January 22',
    status: 'Pending',
    avatar: 'https://placehold.co/36x36',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'UX Designer',
    department: 'Design',
    startDate: 'January 18',
    status: 'Starting Soon',
    avatar: 'https://placehold.co/36x36',
  },
]

const categories = [
  { id: 1, name: 'Identity', color: 'blue' },
  { id: 2, name: 'Education', color: 'green' },
  { id: 3, name: 'Experience', color: 'purple' },
  { id: 4, name: 'Medical', color: 'red' },
  { id: 5, name: 'Legal', color: 'yellow' },
  { id: 6, name: 'Other', color: 'gray' },
]

const mockUploadedDocuments = [
  {
    id: 1,
    name: 'passport_sarah_johnson.pdf',
    size: '2.3 MB',
    category: 'Identity',
    uploadedTime: 'Uploaded 5 min ago',
    status: 'Verified',
    statusColor: 'green',
  },
  {
    id: 2,
    name: 'resume_sarah_johnson.docx',
    size: '1.8 MB',
    category: 'Experience',
    uploadedTime: 'Uploaded 10 min ago',
    status: 'Pending Review',
    statusColor: 'yellow',
  },
]

function DocumentUpload({ onSwitchModule }) {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [uploadedDocs, setUploadedDocs] = useState(mockUploadedDocuments)

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const selectedEmployee = useMemo(
    () => employees.find((item) => item.id === selectedEmployeeId) || null,
    [selectedEmployeeId],
  )

  const handleDeleteDocument = (docId) => {
    setUploadedDocs(uploadedDocs.filter((doc) => doc.id !== docId))
  }

  return (
    <div className="du-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="du-main">
        <div className="du-content">
          <header className="du-header">
            <div>
              <h1>Document Upload</h1>
              <nav>
                <a href="/">Home</a>
                <FiChevronRight size={11} />
                <a href="/hrm/onboarding-2">Onboarding</a>
                <FiChevronRight size={11} />
                <span>Document Upload</span>
              </nav>
            </div>

            <button className="du-notify" aria-label="Notifications">
              <FiBell size={16} />
              <span>2</span>
            </button>
          </header>

          <section className="du-top-card">
            <span className="du-top-icon"><FiUploadCloud size={14} /></span>
            <div>
              <h3>Document Upload Center</h3>
              <p>Upload and organize onboarding documents for new employees</p>
            </div>
            <div className="du-max-size">
              <span>Max 10MB per file</span>
            </div>
          </section>

          <section className="du-panels">
            <aside className="du-panel-left">
              <h4>Select Employee</h4>
              <p>Choose employee for document upload</p>

              <div className="du-search-box">
                <FiSearch size={14} />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="du-employee-list">
                {filteredEmployees.map((employee) => (
                  <label
                    key={employee.id}
                    className={`du-employee-item ${selectedEmployeeId === employee.id ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="employee"
                      checked={selectedEmployeeId === employee.id}
                      onChange={() => setSelectedEmployeeId(employee.id)}
                    />
                    <img src={employee.avatar} alt={employee.name} />
                    <div>
                      <div className="du-employee-name">{employee.name}</div>
                      <div className="du-employee-role">{employee.role}</div>
                    </div>
                    <span className={`du-employee-status ${employee.status.toLowerCase().replace(' ', '-')}`}>
                      {employee.status}
                    </span>
                  </label>
                ))}
              </div>
            </aside>

            <section className="du-panel-right">
              <h4>Document Upload</h4>
              <p>Upload required onboarding documents</p>

              <div className="du-categories">
                <h5>Document Categories</h5>
                <div className="du-category-grid">
                  {categories.map((cat) => {
                    const IconComponent = CategoryIcons[cat.name]
                    return (
                      <div key={cat.id} className={`du-category du-category-${cat.color}`}>
                        <span className="du-category-icon">
                          <IconComponent />
                        </span>
                        <span className="du-category-name">{cat.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="du-upload-box">
                <FiUploadCloud size={32} />
                <p>Drop files here or click to upload</p>
                <span className="du-upload-hint">Support for PDF, DOC, DOCX, JPG, PNG files up to 10MB</span>
                <button className="du-btn upload-btn">Choose Files</button>
              </div>

              <div className="du-uploaded-section">
                <h5>Uploaded Documents</h5>
                {uploadedDocs.length > 0 ? (
                  <div className="du-documents-list">
                    {uploadedDocs.map((doc) => (
                      <div key={doc.id} className="du-document-item">
                        <div className="du-doc-icon">
                          <FiFileText size={20} />
                        </div>
                        <div className="du-doc-info">
                          <div className="du-doc-name">{doc.name}</div>
                          <div className="du-doc-meta">
                            {doc.size} • {doc.category} • {doc.uploadedTime}
                          </div>
                        </div>
                        <div className={`du-status-badge ${doc.statusColor}`}>
                          {doc.status}
                        </div>
                        <button
                          className="du-doc-delete"
                          onClick={() => handleDeleteDocument(doc.id)}
                          aria-label="Delete document"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="du-empty-state">
                    <p>No documents uploaded yet</p>
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DocumentUpload
