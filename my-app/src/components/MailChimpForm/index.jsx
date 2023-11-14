"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

import "./styles.css"

export const MailChimpForm = () => {
  // const inputEmail = document.getElementById("m'ce-EMAIL")
  // console.log(inputEmail.value)
  // const [email, setEmail] = useState("");

  const [emailInputValue, setEmailInputValue] = useState('');
  const [nameInputValue, setNameInputValue] = useState('');

  const handleChangeEmail = (e) => {
    console.log(e.target.value)
    setEmailInputValue(e.target.value);
    console.log('Valor do input:', emailInputValue);
  };

  const handleChangeName = (e) => {
    console.log(e.target.value)
    setNameInputValue(e.target.value);
    console.log('Valor do input:', nameInputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça algo com o valor, por exemplo, envie para o servidor
    console.log('Valor do input:', emailInputValue);
  };

  return (
    <>
      <div id="mc_embed_shell" class="flex justify-center items-center" style={{height: "500px", }}>
        {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"/> */}
        <div id="mc_embed_signup" class="validate bg-purple-600" >
          <form action="https://gmail.us10.list-manage.com/subscribe/post?u=e0e70bed9f36aa0a7222e7e44&amp;id=81f8815806&amp;f_id=00bfeee5f0" 
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  target="_blank" 
            class="validate bg-red-600"
            style={{height: "90%"}}>
            <div id="mc_embed_signup_scroll">
              <h2>Inscreva-se abaixo para participar gratuitamente do “Como Ser Santo em Um Mundo Anticristão”</h2>
              <div class="indicates-required grid justify-items-end ">
                <span class="asterisk ">* Campos Obrigatórios</span> 
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Endereço de e-mail <span class="asterisk">*</span></label>
                <input type="email" name="EMAIL" class="required email" id="m'ce-EMAIL" required="" 
                // value=""
                value={emailInputValue} onChange={handleChangeEmail}
                />
              </div>
              <div class="mc-field-group"><label for="mce-FNAME">Nome e Sobrenome <span class="asterisk">*</span></label>
                <input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" 
                // value=""
                value={nameInputValue} onChange={handleChangeName}
                />
              </div>
              <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style={{display: "none"}}></div>
              <div class="response" id="mce-success-response" style={{display: "none"}}></div>
            </div>
            <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
              {/* /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_e0e70bed9f36aa0a7222e7e44_81f8815806" tabindex="-1" value=""/>
            </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button bg-red-600" value="Fazer Inscrição"
                    style={{width: "100px", height: "50px", }} onChange={() => console.log("Click")}
                  />
                  <p style={{margin: "0px auto"}}>
                    <a href="http://eepurl.com/iy9aHc" title="Mailchimp - marketing por e-mail fácil e divertido">
                      <span style={{display: "inline-block", backgroundColor: "transparent", borderRadius: "4px"}}>
                        <img class="refferal_badge" 
                        width={0}
                        height={0}
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                        alt="Intuit Mailchimp" 
                        style={{width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center" }}/>
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