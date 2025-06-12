import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Monitor, Smartphone, HardDrive, Cpu, MemoryStick } from 'lucide-react';
import { motion } from 'motion/react';

const DownloadSection = () => {
  const platforms = [
    {
      name: 'Windows',
      icon: Monitor,
      version: 'v1.0.0',
      size: '85 MB',
      requirements: 'Windows 10 或更高版本',
      downloadUrl: '#',
    },
    {
      name: 'macOS',
      icon: Monitor,
      version: 'v1.0.0',
      size: '92 MB',
      requirements: 'macOS 10.15 或更高版本',
      downloadUrl: '#',
    },
    {
      name: 'Linux',
      icon: Monitor,
      version: 'v1.0.0',
      size: '88 MB',
      requirements: 'Ubuntu 18.04 或其他发行版',
      downloadUrl: '#',
    },
  ];

  const systemRequirements = [
    {
      icon: Cpu,
      title: '处理器',
      requirement: 'Intel Core i3 或 AMD 同等处理器',
    },
    {
      icon: MemoryStick,
      title: '内存',
      requirement: '4 GB RAM (推荐 8 GB)',
    },
    {
      icon: HardDrive,
      title: '存储空间',
      requirement: '至少 200 MB 可用空间',
    },
    {
      icon: Smartphone,
      title: '网络',
      requirement: '稳定的互联网连接',
    },
  ];

  return (
    <section id="download" className="py-20 bg-white">
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
            立即下载 EchoVibe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            选择适合您操作系统的版本，开始享受全新的音乐播放体验
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-2 border-gray-200 hover:border-brand-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  {/* Platform Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Platform Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <div className="text-sm text-gray-500 mb-4">
                    {platform.version} • {platform.size}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {platform.requirements}
                  </p>

                  {/* Download Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    下载 {platform.name} 版本
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            系统要求
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemRequirements.map((req, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-4">
                  <req.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{req.title}</h4>
                <p className="text-sm text-gray-600">{req.requirement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              安装说明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-semibold text-gray-900 mb-2">1. 下载安装包</div>
                <p className="text-gray-600 text-sm">选择适合您系统的版本并下载</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">2. 运行安装程序</div>
                <p className="text-gray-600 text-sm">双击安装包并按照提示完成安装</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">3. 开始使用</div>
                <p className="text-gray-600 text-sm">启动应用程序，开始您的音乐之旅</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;