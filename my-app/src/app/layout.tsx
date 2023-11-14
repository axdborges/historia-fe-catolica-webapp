import { Inter, Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import Script from "next/script";

const inter = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
});

export const metadata = {
  title: "História e Fé Católica",
  description: "História e Fé Católica por Lorenzo Lazzarotto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
        <meta
          name="facebook-domain-verification"
          content="uily1ph2eim9r61tq3jz1fhezd3i2i"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '6986366351429902');
            fbq('track', 'PageView')`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NZDWGCDX');
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); 
          gtag('config', 'AW-11396186314');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Script
          id="tagManager"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-31EDK9WW6R"
        ></Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=6986366351429902&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
      </body>
      {/* <script>
        {window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); 
        gtag('config', 'AW-11396186314'); }
      </script> */}
    </html>
  );
}
