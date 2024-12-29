import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa'

export default function About() {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    intro: '在这里写入你的个人介绍，包括工作经验、专业领域等',
    education: '在这里写入你的教育背景和主要工作经历',
    interests: '在这里写入你的个人特长和兴趣爱好',
    stats: {
      years: '8年+',
      yearsLabel: '研发经验',
      patents: '20+',
      patentsLabel: '技术专利',
      stars: '50K+',
      starsLabel: 'Github Stars',
    }
  })
  const [tempData, setTempData] = useState({ ...editData })

  const handleEdit = () => {
    setTempData({ ...editData })
    setIsEditing(true)
  }

  const handleSave = () => {
    setEditData({ ...tempData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">关于我</h2>
        <div className="max-w-3xl mx-auto relative">
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

          {isEditing ? (
            <div className="space-y-6">
              <textarea
                value={tempData.intro}
                onChange={(e) => setTempData({ ...tempData, intro: e.target.value })}
                className="w-full p-2 text-lg text-gray-600 bg-transparent border rounded-md focus:border-primary focus:outline-none"
                rows={3}
              />
              <textarea
                value={tempData.education}
                onChange={(e) => setTempData({ ...tempData, education: e.target.value })}
                className="w-full p-2 text-lg text-gray-600 bg-transparent border rounded-md focus:border-primary focus:outline-none"
                rows={3}
              />
              <textarea
                value={tempData.interests}
                onChange={(e) => setTempData({ ...tempData, interests: e.target.value })}
                className="w-full p-2 text-lg text-gray-600 bg-transparent border rounded-md focus:border-primary focus:outline-none"
                rows={3}
              />
            </div>
          ) : (
            <>
              <p className="text-lg text-gray-600 mb-6">{editData.intro}</p>
              <p className="text-lg text-gray-600 mb-6">{editData.education}</p>
              <p className="text-lg text-gray-600">{editData.interests}</p>
            </>
          )}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="card text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={tempData.stats.years}
                    onChange={(e) => setTempData({
                      ...tempData,
                      stats: { ...tempData.stats, years: e.target.value }
                    })}
                    className="text-xl font-semibold text-center w-full bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none mb-2"
                  />
                  <input
                    type="text"
                    value={tempData.stats.yearsLabel}
                    onChange={(e) => setTempData({
                      ...tempData,
                      stats: { ...tempData.stats, yearsLabel: e.target.value }
                    })}
                    className="text-center w-full bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{editData.stats.years}</h3>
                  <p className="text-gray-600">{editData.stats.yearsLabel}</p>
                </>
              )}
            </div>
            <div className="card text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={tempData.stats.patents}
                    onChange={(e) => setTempData({
                      ...tempData,
                      stats: { ...tempData.stats, patents: e.target.value }
                    })}
                    className="text-xl font-semibold text-center w-full bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none mb-2"
                  />
                  <input
                    type="text"
                    value={tempData.stats.patentsLabel}
                    onChange={(e) => setTempData({
                      ...tempData,
                      stats: { ...tempData.stats, patentsLabel: e.target.value }
                    })}
                    className="text-center w-full bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{editData.stats.patents}</h3>
                  <p className="text-gray-600">{editData.stats.patentsLabel}</p>
                </>
              )}
            </div>
            <div className="card text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={tempData.stats.stars}
                    onChange={(e) => setTempData({
                      ...tempData,
                      stats: { ...tempData.stats, stars: e.target.value }
                    })}
                    className="text-xl font-semibold text-center w-full bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none mb-2"
                  />
                  <input
                    type="text"
                    value={tempData.stats.starsLabel}
                    onChange={(e) => setTempData({
                      ...tempData,
                      stats: { ...tempData.stats, starsLabel: e.target.value }
                    })}
                    className="text-center w-full bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{editData.stats.stars}</h3>
                  <p className="text-gray-600">{editData.stats.starsLabel}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 