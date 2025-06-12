import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-brand-100 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <div className="text-8xl font-bold text-brand-600 mb-4">404</div>
          
          {/* Error Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            页面未找到
          </h1>
          <p className="text-gray-600 mb-8">
            抱歉，您访问的页面不存在。可能是链接错误或页面已被移动。
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-brand-300 text-brand-700 hover:bg-brand-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回上页
            </Button>
            <Button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              回到首页
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;