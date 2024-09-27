export default function GTag() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-D3ZZ8HWHGB"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D3ZZ8HWHGB');
      `,
        }}
      ></script>
    </>
  );
}
