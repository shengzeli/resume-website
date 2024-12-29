import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWeixin, FaEdit, FaCheck, FaTimes } from 'react-icons/fa'

export default function Contact() {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    email: 'your.email@example.com',
    phone: '+86 123-4567-89',
    weixin: '你的微信号',
    address: '你的地址',
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
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">联系方式</h2>
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

          <div className="card">
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">邮箱</p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempData.email}
                      onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                      className="text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none w-full"
                    />
                  ) : (
                    <a
                      href={`mailto:${editData.email}`}
                      className="text-gray-600 hover:text-primary"
                    >
                      {editData.email}
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">电话</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={tempData.phone}
                      onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                      className="text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none w-full"
                    />
                  ) : (
                    <a
                      href={`tel:${editData.phone}`}
                      className="text-gray-600 hover:text-primary"
                    >
                      {editData.phone}
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex items-start">
                <FaWeixin className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">微信</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.weixin}
                      onChange={(e) => setTempData({ ...tempData, weixin: e.target.value })}
                      className="text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none w-full"
                    />
                  ) : (
                    <p className="text-gray-600">
                      {editData.weixin}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">地址</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.address}
                      onChange={(e) => setTempData({ ...tempData, address: e.target.value })}
                      className="text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none w-full"
                    />
                  ) : (
                    <p className="text-gray-600">
                      {editData.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 