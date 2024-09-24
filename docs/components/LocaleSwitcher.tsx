import GoogleTranslateSelect from "@google-translate-select/react";

export default function LocaleSwitcher() {
  const handleGoogleTranslateSelect = (language: any) => {
    console.log("select", language);
  };

  return (
    <GoogleTranslateSelect
      languages={[
        {
          code: "en",
          name: "English",
          cname: "英语",
          ename: "English",
        },
        {
          code: "zh-CN",
          name: "中文 (简体)",
          cname: "中文 (简体)",
          ename: "Chinese (Simplified)",
        },
        {
          code: "zh-TW",
          name: "中文 (繁体)",
          cname: "中文 (繁体)",
          ename: "Chinese (Traditional)",
        },
      ]}
      defaultLanguageCode="en"
      defaultPageLanguageCode="en"
      fetchBrowserLanguage={false}
      className="w-28"
      trigger="click"
      select={handleGoogleTranslateSelect}
    />
  );
}
