import GoogleTranslateSelect from "@google-translate-select/react";

export default function LocaleSwitcher() {
  const handleGoogleTranslateSelect = (language: any) => {
    console.log("select", language);
  };

  return (
    <GoogleTranslateSelect
      defaultLanguageCode="en"
      defaultPageLanguageCode="en"
      fetchBrowserLanguage={false}
      className="w-28"
      trigger="click"
      select={handleGoogleTranslateSelect}
    />
  );
}
