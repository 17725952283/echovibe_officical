import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail, MessageCircle, Code, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';

const AboutSection = () => {
  const teamValues = [
    {
      icon: Code,
      title: '开源精神',
      description: '我们相信开源的力量，致力于构建透明、可信赖的软件',
    },
    {
      icon: Heart,
      title: '用户至上',
      description: '以用户体验为核心，持续优化产品功能和界面设计',
    },
    {
      icon: Users,
      title: '社区驱动',
      description: '重视社区反馈，与用户共同打造更好的产品',
    },
  ];

  const contactMethods = [
    {
      icon: Github,
      title: 'GitHub',
      description: '查看源代码，提交问题和建议',
      link: 'https://github.com/echovibe',
      linkText: 'github.com/echovibe',
    },
    {
      icon: Mail,
      title: '邮箱联系',
      description: '商务合作或技术支持',
      link: 'mailto:contact@echovibe.app',
      linkText: 'contact@echovibe.app',
    },
    {
      icon: MessageCircle,
      title: '社区讨论',
      description: '加入我们的社区，与其他用户交流',
      link: '#',
      linkText: '加入讨论',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            关于 EchoVibe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们是一群热爱音乐和技术的开发者，致力于为用户提供最优质的音乐播放体验
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 mb-16 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                我们的故事
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  EchoVibe 诞生于对现有音乐播放器的不满。我们发现市面上的播放器要么功能复杂臃肿，要么界面设计过时，很难找到一款既简洁又功能强大的产品。
                </p>
                <p>
                  于是，我们决定自己动手，基于 Electron 技术栈开发一款现代化的跨平台音乐播放器。我们的目标是创造一个既美观又实用的产品，让每个人都能享受到纯粹的音乐体验。
                </p>
                <p>
                  从第一行代码到现在，EchoVibe 已经服务了数万名用户。我们将继续倾听用户的声音，不断改进和完善产品。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-100 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2">2024</div>
                <div className="text-gray-600 mb-4">项目启动年份</div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50K+</div>
                    <div className="text-sm text-gray-600">总下载量</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">活跃用户</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            我们的价值观
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            联系我们
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <Button
                  variant="outline"
                  className="border-brand-300 text-brand-700 hover:bg-brand-50"
                  asChild
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.linkText}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                加入我们的开源社区
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                EchoVibe 是一个开源项目，我们欢迎所有开发者参与贡献。无论是代码贡献、bug 报告还是功能建议，都能帮助我们做得更好。
              </p>
              <Button
                className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
                asChild
              >
                <a href="https://github.com/echovibe" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  查看源代码
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;