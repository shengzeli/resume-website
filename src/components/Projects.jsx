import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEdit, FaCheck, FaTimes, FaPlus, FaTrash } from 'react-icons/fa'

export default function Projects() {
  const [isEditing, setIsEditing] = useState(false)
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: '项目名称',
      description: '项目描述',
      technologies: '使用技术',
      achievements: '项目成就'
    }
  ])
  const [tempProjects, setTempProjects] = useState(projects)

  const handleEdit = () => {
    setTempProjects([...projects])
    setIsEditing(true)
  }

  const handleSave = () => {
    setProjects([...tempProjects])
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempProjects([...projects])
    setIsEditing(false)
  }

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: '新项目名称',
      description: '项目描述',
      technologies: '使用技术',
      achievements: '项目成就'
    }
    setTempProjects([...tempProjects, newProject])
  }

  const handleRemoveProject = (id) => {
    setTempProjects(tempProjects.filter(project => project.id !== id))
  }

  const handleProjectChange = (id, field, value) => {
    setTempProjects(tempProjects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ))
  }

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <div className="relative">
          <h2 className="section-title mb-8">项目经验</h2>
          {/* 编辑按钮 */}
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="absolute top-0 right-4 p-2 text-gray-600 hover:text-primary"
              title="编辑"
            >
              <FaEdit className="h-5 w-5" />
            </button>
          )}
          {/* 保存和取消按钮 */}
          {isEditing && (
            <div className="absolute top-0 right-4 flex space-x-2">
              <button
                onClick={handleSave}
                className="p-2 text-green-600 hover:text-green-700"
                title="保存"
              >
                <FaCheck className="h-5 w-5" />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 text-red-600 hover:text-red-700"
                title="取消"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* 项目列表 */}
          <div className="space-y-6">
            {(isEditing ? tempProjects : projects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-lg shadow-md"
              >
                {isEditing && (
                  <button
                    onClick={() => handleRemoveProject(project.id)}
                    className="absolute top-2 right-2 p-2 text-red-600 hover:text-red-700"
                    title="删除项目"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                )}
                <div className="space-y-4">
                  {/* 项目标题 */}
                  {isEditing ? (
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                      className="w-full text-xl font-semibold text-gray-900 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="项目名称"
                    />
                  ) : (
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  )}

                  {/* 项目描述 */}
                  {isEditing ? (
                    <textarea
                      value={project.description}
                      onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                      className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none resize-none"
                      placeholder="项目描述"
                      rows="2"
                    />
                  ) : (
                    <p className="text-gray-600">{project.description}</p>
                  )}

                  {/* 使用技术 */}
                  {isEditing ? (
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => handleProjectChange(project.id, 'technologies', e.target.value)}
                      className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="使用技术"
                    />
                  ) : (
                    <p className="text-gray-600">
                      <span className="font-semibold">技术栈：</span>
                      {project.technologies}
                    </p>
                  )}

                  {/* 项目成就 */}
                  {isEditing ? (
                    <textarea
                      value={project.achievements}
                      onChange={(e) => handleProjectChange(project.id, 'achievements', e.target.value)}
                      className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none resize-none"
                      placeholder="项目成就"
                      rows="2"
                    />
                  ) : (
                    <p className="text-gray-600">
                      <span className="font-semibold">成就：</span>
                      {project.achievements}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 添加项目按钮 */}
          {isEditing && (
            <motion.button
              onClick={handleAddProject}
              className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-primary hover:text-primary/80 border-2 border-dashed border-primary/30 hover:border-primary/50 rounded-lg transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FaPlus className="h-4 w-4" />
              <span>添加新项目</span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  )
} 