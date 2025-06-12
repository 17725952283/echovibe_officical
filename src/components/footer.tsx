import { Github, Mail, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: '功能介绍', href: '#features' },
      { name: '下载应用', href: '#download' },
      { name: '系统要求', href: '#download' },
      { name: '更新日志', href: '#' },
    ],
    support: [
      { name: '使用帮助', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '技术支持', href: '#' },
      { name: '反馈建议', href: '#' },
    ],
    community: [
      { name: '开源社区', href: '#' },
      { name: '开发文档', href: '#' },
      { name: '贡献指南', href: '#' },
      { name: '行为准则', href: '#' },
    ],
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/echovibe',
    },
    {
      name: '邮箱',
      icon: Mail,
      href: 'mailto:contact@echovibe.app',
    },
    {
      name: '社区',
      icon: MessageCircle,
      href: '#',
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="text-2xl font-bold">EchoVibe</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 max-w-md">
                  现代化的跨平台音乐播放器，为您提供优质的音乐播放体验。基于 Electron 构建，支持多平台使用。
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Product Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-4">产品</h3>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Support Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-4">支持</h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Community Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-4">社区</h3>
                  <ul className="space-y-3">
                    {footerLinks.community.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} EchoVibe. 保留所有权利。
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>by EchoVibe Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;