import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEdit, FaCheck, FaTimes, FaCamera } from 'react-icons/fa'

export default function Hero() {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: '你的名字',
    title: '你的职位头衔',
    avatar: '/avatar.jpg'
  })
  const [tempData, setTempData] = useState({ ...editData })
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleEdit = () => {
    setTempData({ ...editData })
    setIsEditing(true)
    setError('')
  }

  const handleSave = () => {
    setEditData({ ...tempData })
    setIsEditing(false)
    setError('')
  }

  const handleCancel = () => {
    setTempData({ ...editData })
    setIsEditing(false)
    setError('')
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // 检查文件大小（限制为 2MB）
      if (file.size > 2 * 1024 * 1024) {
        setError('图片大小不能超过 2MB')
        return
      }

      // 检查文件类型
      if (!file.type.startsWith('image/')) {
        setError('请选择图片文件')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setTempData({ ...tempData, avatar: reader.result })
        setError('')
      }
      reader.onerror = () => {
        setError('图片读取失败，请重试')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/10 pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* 编辑按钮 */}
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-primary"
                title="编辑"
              >
                <FaEdit className="h-5 w-5" />
              </button>
            )}
            {/* 保存和取消按钮 */}
            {isEditing && (
              <div className="absolute top-4 right-4 flex space-x-2">
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

            {/* 头像部分 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative inline-block group">
                <img
                  className="mx-auto h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                  src={tempData.avatar}
                  alt="Profile"
                />
                {isEditing && (
                  <>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg text-primary hover:text-primary/80 transition-colors"
                      title="更换头像"
                    >
                      <FaCamera className="h-5 w-5" />
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </>
                )}
              </div>
              {/* 错误提示 */}
              {error && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-red-100 px-3 py-1 text-sm text-red-600">
                  {error}
                </div>
              )}
            </motion.div>
            
            {/* 名字部分 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              {isEditing ? (
                <input
                  type="text"
                  value={tempData.name}
                  onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                  className="w-full text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 text-center bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none px-4 py-2"
                  placeholder="输入你的名字"
                />
              ) : (
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
                  {editData.name}
                </h1>
              )}
            </motion.div>
            
            {/* 职位头衔部分 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              {isEditing ? (
                <input
                  type="text"
                  value={tempData.title}
                  onChange={(e) => setTempData({ ...tempData, title: e.target.value })}
                  className="w-full text-lg sm:text-xl leading-8 text-gray-600 text-center bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none px-4 py-2"
                  placeholder="输入你的职位头衔"
                />
              ) : (
                <p className="text-lg sm:text-xl leading-8 text-gray-600">
                  {editData.title}
                </p>
              )}
            </motion.div>
            
            {/* 导航按钮 */}
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="btn bg-primary text-white hover:bg-primary/90"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="btn"
              >
                联系我
              </a>
            </motion.div>

            {/* 社交链接部分 */}
            <motion.div
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 