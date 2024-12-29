import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEdit, FaCheck, FaTimes, FaPlus, FaTrash } from 'react-icons/fa'

export default function Skills() {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    '后端开发': [
      { name: 'Java', level: 95 },
      { name: 'Spring Cloud', level: 90 },
      { name: 'MySQL', level: 88 },
      { name: 'Redis', level: 85 },
    ],
    '前端开发': [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
    '开发工具': [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Linux', level: 85 },
    ],
  })
  const [tempData, setTempData] = useState({ ...editData })
  const [newCategory, setNewCategory] = useState('')
  const [showAddCategory, setShowAddCategory] = useState(false)

  const handleEdit = () => {
    setTempData({ ...editData })
    setIsEditing(true)
  }

  const handleSave = () => {
    setEditData({ ...tempData })
    setIsEditing(false)
    setShowAddCategory(false)
  }

  const handleCancel = () => {
    setTempData({ ...editData })
    setIsEditing(false)
    setShowAddCategory(false)
  }

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setTempData({
        ...tempData,
        [newCategory]: []
      })
      setNewCategory('')
      setShowAddCategory(false)
    }
  }

  const handleDeleteCategory = (category) => {
    const newData = { ...tempData }
    delete newData[category]
    setTempData(newData)
  }

  const handleAddSkill = (category) => {
    setTempData({
      ...tempData,
      [category]: [...tempData[category], { name: '新技能', level: 50 }]
    })
  }

  const handleDeleteSkill = (category, index) => {
    const newData = { ...tempData }
    newData[category].splice(index, 1)
    setTempData(newData)
  }

  const handleSkillChange = (category, index, field, value) => {
    const newData = { ...tempData }
    newData[category][index][field] = field === 'level' ? Math.min(100, Math.max(0, parseInt(value) || 0)) : value
    setTempData(newData)
  }

  return (
    <section id="skills" className="section">
      <div className="relative">
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-primary"
            title="编辑"
          >
            <FaEdit className="h-5 w-5" />
          </button>
        )}
        {isEditing && (
          <div className="absolute top-0 right-0 flex space-x-2">
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

        <h2 className="section-title">专业技能</h2>

        {isEditing && (
          <div className="mb-6 flex justify-center">
            {showAddCategory ? (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-primary"
                  placeholder="输入分类名称"
                />
                <button
                  onClick={handleAddCategory}
                  className="p-2 text-green-600 hover:text-green-700"
                >
                  <FaCheck className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowAddCategory(false)}
                  className="p-2 text-red-600 hover:text-red-700"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAddCategory(true)}
                className="flex items-center space-x-1 text-primary hover:text-primary/80"
              >
                <FaPlus className="h-4 w-4" />
                <span>添加新分类</span>
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(tempData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              {isEditing && (
                <button
                  onClick={() => handleDeleteCategory(category)}
                  className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-700"
                  title="删除分类"
                >
                  <FaTrash className="h-4 w-4" />
                </button>
              )}
              
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    {isEditing && (
                      <button
                        onClick={() => handleDeleteSkill(category, index)}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 p-1 text-red-600 hover:text-red-700"
                        title="删除技能"
                      >
                        <FaTrash className="h-3 w-3" />
                      </button>
                    )}
                    
                    <div className="flex flex-col space-y-2">
                      {isEditing ? (
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(category, index, 'name', e.target.value)}
                          className="text-sm font-medium bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                          placeholder="技能名称"
                        />
                      ) : (
                        <span className="text-sm font-medium">{skill.name}</span>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        {isEditing && (
                          <input
                            type="number"
                            value={skill.level}
                            onChange={(e) => handleSkillChange(category, index, 'level', e.target.value)}
                            className="w-12 text-sm text-right bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                            min="0"
                            max="100"
                          />
                        )}
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {isEditing && (
                <button
                  onClick={() => handleAddSkill(category)}
                  className="mt-4 flex items-center space-x-1 text-primary hover:text-primary/80 text-sm"
                >
                  <FaPlus className="h-3 w-3" />
                  <span>添加技能</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 