import { Card, CardContent } from '@/components/ui/card';
import { Search, Play, Heart, User, Monitor, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: '智能搜索',
      description: '支持B站视频音频内容搜索，智能推荐算法帮您发现更多好音乐',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Play,
      title: '高质量播放',
      description: '支持多种音频格式，提供高质量在线音频流播放体验',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: '收藏管理',
      description: '创建个人收藏夹，智能分类管理您喜爱的音乐内容',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: User,
      title: '个人空间',
      description: '个性化用户界面，记录播放历史，同步用户数据',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Monitor,
      title: '跨平台支持',
      description: '基于Electron构建，完美支持Windows、macOS和Linux系统',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '内置代理服务器解决跨域问题，保护用户隐私和数据安全',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            强大功能，简单易用
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            EchoVibe 集成了现代音乐播放器所需的所有功能，为您提供完整的音乐体验
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              为什么选择 EchoVibe？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">100%</div>
                <div className="text-gray-600">免费开源</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">24/7</div>
                <div className="text-gray-600">稳定运行</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">∞</div>
                <div className="text-gray-600">无限制使用</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;