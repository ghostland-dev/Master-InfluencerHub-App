import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../hooks/useToast';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
] as const;

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const { addToast } = useToast();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (code: string) => {
    try {
      await i18n.changeLanguage(code);
      const newLang = languages.find(lang => lang.code === code);
      
      addToast({
        type: 'success',
        title: t('language.changed'),
        message: t('language.changedMessage', { language: newLang?.name }),
      });
      
      setIsOpen(false);
    } catch (error) {
      addToast({
        type: 'error',
        title: t('language.error'),
        message: t('language.errorMessage'),
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium hidden md:inline-block">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-40 border border-gray-200"
            >
              <div className="py-2">
                {languages.map(language => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                      i18n.language === language.code ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-700'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}