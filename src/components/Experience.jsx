import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEdit, FaCheck, FaTimes, FaPlus, FaTrash } from 'react-icons/fa'

export default function Experience() {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState([
    {
      company: '阿里巴巴',
      position: '技术专家',
      period: '2020 - 至今',
      description: [
        '负责支付宝核心支付系统的架构设计和优化，将系统 QPS 提升 50%',
        '带领团队完成微服务架构升级，显著提升系统可用性和可维护性',
        '参与重要技术决策，制定技术规范和最佳实践指南',
      ],
    },
    {
      company: '腾讯',
      position: '高级开发工程师',
      period: '2018 - 2020',
      description: [
        '负责微信支付商户平台的开发和维护工作',
        '设计并实现高并发交易处理系统，支持日均千万级交易量',
        '优化系统性能，将接口响应时间降低 40%',
      ],
    },
    {
      company: '百度',
      position: '开发工程师',
      period: '2016 - 2018',
      description: [
        '参与百度地图导航系统的开发工作',
        '负责实时路况计算引擎的优化，提升计算效率 30%',
        '开发新功能模块，获得用户好评',
      ],
    },
  ])
  const [tempData, setTempData] = useState([...editData])

  const handleEdit = () => {
    setTempData([...editData])
    setIsEditing(true)
  }

  const handleSave = () => {
    setEditData([...tempData])
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempData([...editData])
    setIsEditing(false)
  }

  const handleAddExperience = () => {
    setTempData([
      ...tempData,
      {
        company: '公司名称',
        position: '职位名称',
        period: '起止时间',
        description: ['工作描述'],
      },
    ])
  }

  const handleDeleteExperience = (index) => {
    setTempData(tempData.filter((_, i) => i !== index))
  }

  const handleExperienceChange = (index, field, value) => {
    const newData = [...tempData]
    newData[index] = {
      ...newData[index],
      [field]: value,
    }
    setTempData(newData)
  }

  const handleAddDescription = (index) => {
    const newData = [...tempData]
    newData[index].description.push('新工作描述')
    setTempData(newData)
  }

  const handleDeleteDescription = (expIndex, descIndex) => {
    const newData = [...tempData]
    newData[expIndex].description = newData[expIndex].description.filter(
      (_, i) => i !== descIndex
    )
    setTempData(newData)
  }

  const handleDescriptionChange = (expIndex, descIndex, value) => {
    const newData = [...tempData]
    newData[expIndex].description[descIndex] = value
    setTempData(newData)
  }

  return (
    <section id="experience" className="section">
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

        <h2 className="section-title">工作经历</h2>

        {isEditing && (
          <div className="mb-6 flex justify-center">
            <button
              onClick={handleAddExperience}
              className="flex items-center space-x-1 text-primary hover:text-primary/80"
            >
              <FaPlus className="h-4 w-4" />
              <span>添加工作经历</span>
            </button>
          </div>
        )}

        <div className="space-y-8">
          {tempData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              {isEditing && (
                <button
                  onClick={() => handleDeleteExperience(index)}
                  className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-700"
                  title="删除经历"
                >
                  <FaTrash className="h-4 w-4" />
                </button>
              )}

              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={experience.company}
                        onChange={(e) =>
                          handleExperienceChange(index, 'company', e.target.value)
                        }
                        className="text-xl font-bold bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
                        placeholder="公司名称"
                      />
                      <div className="flex space-x-4">
                        <input
                          type="text"
                          value={experience.position}
                          onChange={(e) =>
                            handleExperienceChange(index, 'position', e.target.value)
                          }
                          className="text-lg text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none flex-1"
                          placeholder="职位名称"
                        />
                        <input
                          type="text"
                          value={experience.period}
                          onChange={(e) =>
                            handleExperienceChange(index, 'period', e.target.value)
                          }
                          className="text-lg text-gray-600 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none w-32 text-right"
                          placeholder="起止时间"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold">{experience.company}</h3>
                      <div className="flex justify-between text-lg text-gray-600">
                        <span>{experience.position}</span>
                        <span>{experience.period}</span>
                      </div>
                    </>
                  )}
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="relative group">
                      {isEditing ? (
                        <div className="flex items-start space-x-2">
                          <button
                            onClick={() => handleDeleteDescription(index, descIndex)}
                            className="p-1 text-red-600 hover:text-red-700 mt-1"
                            title="删除描述"
                          >
                            <FaTrash className="h-3 w-3" />
                          </button>
                          <textarea
                            value={desc}
                            onChange={(e) =>
                              handleDescriptionChange(index, descIndex, e.target.value)
                            }
                            className="flex-1 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none min-h-[2.5rem] resize-none"
                            placeholder="工作描述"
                          />
                        </div>
                      ) : (
                        <span>{desc}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {isEditing && (
                  <button
                    onClick={() => handleAddDescription(index)}
                    className="flex items-center space-x-1 text-primary hover:text-primary/80 text-sm"
                  >
                    <FaPlus className="h-3 w-3" />
                    <span>添加工作描述</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 