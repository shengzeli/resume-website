import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-32 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-6">
            {/* 可以在这里添加社交媒体链接或其他页脚内容 */}
          </div>
        </div>
      </motion.div>
    </footer>
  )
} 