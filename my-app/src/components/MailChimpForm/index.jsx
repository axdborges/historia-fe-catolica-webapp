"use client"
// import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import "./styles.css"

export const MailChimpForm = () => {
  // const router = useRouter();
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [clicou, setclicou] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState('');
  const [nameInputValue, setNameInputValue] = useState('');
  
  const handleChangeEmail = (e) => {
    setEmailInputValue(e.target.value);
  };
  
  const handleChangeName = (e) => {
    setNameInputValue(e.target.value);
  };

  const redirectToUrl = (url, tempo) => {
    setTimeout(() => {
      window.location.href = url;
    }, tempo);
  };
  
    useEffect(() => {
      
      console.log(clicou)
      if(clicou === true) {
        setTimeout(() => {
          // Redirecionar para a rota desejada após 3 segundos
          redirectToUrl("/obrigado-por-se-inscrever");
        }, 4000);
      }

      // Limpar o timeout ao desmontar o componente
      // return () => clearTimeout(timeoutId);
    }, [ clicou]);

  return (
    <>
      <div id="mc_embed_shell" className="flex justify-center items-center" style={{height: "430px", backgroundColor: "var(--azul-bg)"}}>
        {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"/> */}
        <div id="mc_embed_signup" 
        className="validate flex justify-center items-center rounded-lg" 
        style={{height: "400px", width: "90%"}}>
          <form action="https://gmail.us10.list-manage.com/subscribe/post?u=e0e70bed9f36aa0a7222e7e44&amp;id=81f8815806&amp;f_id=00bfeee5f0" 
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  target="_blank" 
            className="validate"
            style={{height: "100%", width: "100%", padding: "10px", backgroundColor: "var(--branco-bg)"}}>
            <div id="mc_embed_signup_scroll" 
              className=""
              style={{height: "100%"}}>
              <div className="indicates-required grid justify-items-end ">
                <span className="asterisk " style={{color: "red" }}>* Campos Obrigatórios</span> 
              </div>
              <div className="mc-field-group flex-col justify-around items-center " 
                style={{width: "100%", height: "80px"}}>
                <label for="mce-EMAIL">Endereço de e-mail <span className="asterisk" style={{color: "red"}}>*</span></label>
                <input type="email" name="EMAIL" 
                  id="m'ce-EMAIL" required="" 
                  // value=""
                  value={emailInputValue} onChange={handleChangeEmail}
                  className="required email rounded" 
                  style={{width: "90%", height: "30px", padding: "1px", paddingLeft: "6px"}}
                />
              </div>
              <div className="mc-field-group flex-col justify-around items-center "
                style={{width: "100%", height: "80px"}}>
                <label for="mce-FNAME">Nome e Sobrenome <span className="asterisk" style={{color: "red" }}>*</span></label>
                <input type="text" name="FNAME" 
                  id="mce-FNAME" required="" 
                  // value=""
                  value={nameInputValue} onChange={handleChangeName}
                  className="required text rounded" 
                  style={{width: "90%", height: "30px", padding: "1px", paddingLeft: "6px"}}
                  onFocus=
                  {() => {console.log("clicou")}}
                />
              </div>
              <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{display: "none"}}></div>
              <div className="response" id="mce-success-response" style={{display: "none"}}></div>
            </div>
            <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
              {/* /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_e0e70bed9f36aa0a7222e7e44_81f8815806" tabindex="-1" value=""/>
            </div>
              <div className="optionalParent ">
                <div className="clear foot ">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" 
                    className="button rounded-md" 
                    style={{width: "90%", height: "40px", backgroundColor: "var(--dourado-claro)", fontWeight: "bold"}} 
                    value="Fazer Inscrição"
                    onClick={() => setclicou(true)}
                  />
                  <p style={{margin: "0px auto"}}>
                    <a href="http://eepurl.com/iy9aHc" title="Mailchimp - marketing por e-mail fácil e divertido">
                      <span style={{display: "inline-block", backgroundColor: "transparent", borderRadius: "4px"}}>
                        <img className="refferal_badge" 
                          width={0}
                          height={0}
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                          alt="Intuit Mailchimp" 
                          style={{width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center" }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" async/>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" defer/>
        <script type="text/javascript">
        {/* (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';/** */}

        {/* $.extend($.validator.messages, {
        // 	required: "Campo de preenchimento obrigat&oacute;rio.",
        // 	remote: "Por favor, corrija este campo.",
        // 	email: "Por favor, introduza um endere&ccedil;o eletr&oacute;nico v&aacute;lido.",
        // 	url: "Por favor, introduza um URL v&aacute;lido.",
        // 	date: "Por favor, introduza uma data v&aacute;lida.",
        // 	dateISO: "Por favor, introduza uma data v&aacute;lida (ISO).",
        // 	number: "Por favor, introduza um n&uacute;mero v&aacute;lido.",
        // 	digits: "Por favor, introduza apenas d&iacute;gitos.",
        // 	creditcard: "Por favor, introduza um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.",
        // 	equalTo: "Por favor, introduza de novo o mesmo valor.",
        // 	accept: "Por favor, introduza um ficheiro com uma extens&atilde;o v&aacute;lida.",
        // 	maxlength: $.validator.format("Por favor, n&atilde;o introduza mais do que {0} caracteres."),
        // 	minlength: $.validator.format("Por favor, introduza pelo menos {0} caracteres."),
        // 	rangelength: $.validator.format("Por favor, introduza entre {0} e {1} caracteres."),
        // 	range: $.validator.format("Por favor, introduza um valor entre {0} e {1}."),
        // 	max: $.validator.format("Por favor, introduza um valor menor ou igual a {0}."),
        // 	min: $.validator.format("Por favor, introduza um valor maior ou igual a {0}.")
        // });}(jQuery));var $mcj = jQuery.noConflict(true);
        */}

        {/* <style type="text/css"> */}
          {/* #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;} */}
          {/* /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ }
        {/* </style> */}
        </script>
      </div>
    </>
  )
};