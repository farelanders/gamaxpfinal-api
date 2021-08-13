// const emailPage = require('../routes/email');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async (req, res) => {
    const { emailUser, emailNome } = req.body

    const msg = {
        to: emailUser,
        from: "italosport110@hotmail.com",
        subject: "Olá",
        text: "tudo bem?",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif">
         <head> 
          <meta charset="UTF-8"> 
          <meta content="width=device-width, initial-scale=1" name="viewport"> 
          <meta name="x-apple-disable-message-reformatting"> 
          <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
          <meta content="telephone=no" name="format-detection"> 
          <title>Novo Template 2</title> 
          <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--> 
          <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
          <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--> 
          <!--[if !mso]><!-- --> 
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> 
          <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"> 
          <!--<![endif]--> 
          <style type="text/css">
        .rollover div {
            font-size:0;
        }
        #outlook a {
            padding:0;
        }
        .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
        }
        .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
        }
        [data-ogsb] .es-button {
            border-width:0!important;
            padding:10px 20px 10px 20px!important;
        }
        [data-ogsb] .es-button.es-button-1 {
            padding:10px 20px!important;
        }
        [data-ogsb] .es-button.es-button-2 {
            padding:15px 20px!important;
        }
        @media only screen and (max-width:600px), screen and (max-device-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:68px!important; text-align:center } h2 { font-size:30px!important; text-align:left } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:68px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
        </style> 
         </head> 
         <body style="width:100%;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
          <div class="es-wrapper-color" style="background-color:#FEF9F2"> 
           <!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#fef9f2"></v:fill>
                    </v:background>
                <![endif]--> 
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FEF9F2"> 
             <tr> 
              <td valign="top" style="padding:0;Margin:0"> 
               <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0"> 
                   <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                     <tr> 
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr> 
                          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr class="es-visible-simple-html-only"> 
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:14px"><img src="https://drive.google.com/file/d/1p9J1QEXD01t2KX-yUnY_y9AeTZYXQMbb/view?usp=sharing" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Logo" width="190"></a></td> 
                             </tr> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:40px;color:#934a01;font-size:20px">SEJA BEM VINDO A NOSSA NEWSLETTER</p></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0"> 
                   <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
                     <tr> 
                      <td align="left" bgcolor="#ffffff" style="padding:20px;Margin:0;background-color:#ffffff"> 
                       <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr> 
                          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'courier new', courier, 'lucida sans typewriter', 'lucida typewriter', monospace;line-height:23px;color:#333333;font-size:15px">Os melhores livros do mês&nbsp;para seu filho!!</p></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/63671627370134916.png" style="padding:0;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/63671627370134916.png);background-repeat:no-repeat;background-position:center bottom"> 
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                     <tr> 
                      <td align="left" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/13021627369310968.png" style="padding:30px;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/13021627369310968.png);background-repeat:no-repeat;background-position:right bottom"> 
                       <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:540px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr> 
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img p_image" src="https://i.imgur.com/Ocj8mgR.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="215"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr class="es-mobile-hidden"> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" height="20" style="padding:0;Margin:0"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:3px solid #caffbf;border-right:3px solid #caffbf;border-top:3px solid #caffbf;border-bottom:3px solid #caffbf" role="presentation"> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">01</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><p class="p_description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">50 Ideias Para Desenhar e Pintar</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Poiret One', sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#7ab470" class="p_name">Recomendados : 4-6</h2></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#7ab470;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://livrertido.herokuapp.com/list-books" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#7ab470;border-width:10px 20px 10px 20px;display:inline-block;background:#7ab470;border-radius:0px;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Veja mais</a></span></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td></tr></table></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/68321627370225230.png" style="padding:0;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/68321627370225230.png);background-repeat:no-repeat;background-position:center bottom"> 
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                     <tr> 
                      <td align="left" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/55531627370436810.png" style="padding:30px;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/55531627370436810.png);background-repeat:no-repeat;background-position:left bottom"> 
                       <!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr> 
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img p_image" src="https://i.imgur.com/Rt9ePnc.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="260"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td><td style="width:20px"></td><td style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr class="es-mobile-hidden"> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" height="20" style="padding:0;Margin:0"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:3px solid #ffc6ff;border-right:3px solid #ffc6ff;border-top:3px solid #ffc6ff;border-bottom:3px solid #ffc6ff" role="presentation"> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">02</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><p class="p_description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">Até as Princesas Soltam Pum</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Poiret One', sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffc6ff" class="p_name">Recomendado :&nbsp;0-1</h2></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#f0b2f6;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://viewstripo.emailhttps://livrertido.herokuapp.com/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#f0b2f6;border-width:10px 20px 10px 20px;display:inline-block;background:#f0b2f6;border-radius:0px;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Veja mais</a></span></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td></tr></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/1541627370381963.png" style="padding:0;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/1541627370381963.png);background-repeat:no-repeat;background-position:center bottom"> 
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                     <tr> 
                      <td align="left" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/1791627370409263.png" style="padding:30px;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/1791627370409263.png);background-repeat:no-repeat;background-position:right bottom"> 
                       <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:540px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr> 
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img p_image" src="https://i.imgur.com/KB5VHnn.jpg?1" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="260"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr class="es-mobile-hidden"> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" height="20" style="padding:0;Margin:0"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:3px solid #9bf6ff;border-right:3px solid #9bf6ff;border-top:3px solid #9bf6ff;border-bottom:3px solid #9bf6ff" role="presentation"> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">03</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><p class="p_description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">Apertada e Sem Espaço</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Poiret One', sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#76e7ea" class="p_name">Recomendado :&nbsp;0-1</h2></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#76e7ea;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#76e7ea;border-width:10px 20px 10px 20px;display:inline-block;background:#76e7ea;border-radius:0px;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Veja mais</a></span></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td></tr></table></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/44201627370566931.png" style="padding:0;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/44201627370566931.png);background-repeat:no-repeat;background-position:center bottom"> 
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                     <tr> 
                      <td align="left" background="https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/18841627370577281.png" style="padding:30px;Margin:0;background-image:url(https://pzafrs.stripocdn.email/content/guids/CABINET_748ae771f12542994413ba1a86b0b675/images/18841627370577281.png);background-repeat:no-repeat;background-position:left bottom"> 
                       <!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr> 
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img p_image" src="https://i.imgur.com/HiMqKy8.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="260"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td><td style="width:20px"></td><td style="width:260px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr class="es-mobile-hidden"> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" height="20" style="padding:0;Margin:0"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:260px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:3px solid #fdffb6;border-right:3px solid #fdffb6;border-top:3px solid #fdffb6;border-bottom:3px solid #fdffb6" role="presentation"> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">04</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><p class="p_description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">A Roupa Nova do Imperador</p></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Poiret One', sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#eff45f" class="p_name">Recomendado :&nbsp;7-10</h2></td> 
                             </tr> 
                             <tr> 
                              <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#eff45f;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#eff45f;border-width:10px 20px 10px 20px;display:inline-block;background:#eff45f;border-radius:0px;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td></tr></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0"> 
                   <table bgcolor="#ffadad" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffadad;width:600px"> 
                     <tr> 
                      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background:linear-gradient(144deg, #FFADAD 13%, #FFD6A5 26%, #FDFFB6 39%, #CAFFBF 51%, #9BF6FF 63%, #A0C4FF 75%, #BDB2FF 88%, #FFC6FF 100%)"> 
                       <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:348px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr> 
                          <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:348px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="left" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:41px;mso-line-height-rule:exactly;font-family:'Poiret One', sans-serif;font-size:34px;font-style:normal;font-weight:bold;color:#333333">Gostou?</h2></td> 
                             </tr> 
                             <tr> 
                              <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;color:#999999;font-size:14px">ENTRE EM NOSSO SITE E DESFRUTE MUITO MAIS!!</p></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td><td style="width:20px"></td><td style="width:192px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:192px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;padding-top:25px;padding-bottom:25px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#f9b851;border-width:0px;display:block;border-radius:0px;width:auto"><a href="https://viewstripo.email" class="es-button es-button-2" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#fbeded;font-size:20px;border-style:solid;border-color:#f9b851;border-width:15px 20px;display:block;background:#f9b851;border-radius:0px;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">VER MAIS</a></span></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td></tr></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0"> 
                   <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" bgcolor="#ffffff"> 
                     <tr> 
                      <td style="Margin:0;padding-top:15px;padding-bottom:15px;padding-left:20px;padding-right:20px;background-color:#efefef;background-position:left bottom" bgcolor="#efefef" align="left"> 
                       <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]--> 
                       <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr> 
                          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;font-size:0px"><img src="https://pzafrs.stripocdn.email/content/guids/CABINET_ff06f0f6afff91e4506ef568b46158c8/images/44591551869356388.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="80"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]--> 
                       <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:360px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:10px"> 
                               <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr> 
                                  <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/circle-black/facebook-circle-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                  <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Twitter" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/circle-black/twitter-circle-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                  <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Instagram" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/circle-black/instagram-circle-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                  <td valign="top" align="center" style="padding:0;Margin:0"><img title="Youtube" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/circle-black/youtube-circle-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table> 
                       <!--[if mso]></td></tr></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0"> 
                   <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
                     <tr> 
                      <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr> 
                          <td align="left" style="padding:0;Margin:0;width:560px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr> 
                              <td align="center" style="padding:0;Margin:0;display:none"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table> 
          </div>  
         </body>
        </html>`
    }
    

    await sgMail.send(msg)
    .then(() => {
        console.log('Email sent')
        res.json(req.body)
    })
    .catch((error) => {
    console.error(error)
    })
    
}
