// const emailPage = require('../routes/email');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async (req, res) => {
    const { emailUser, emailNome } = req.body

    const msg = {
        to: emailUser,
        from: "italosport110@hotmail.com",
        subject: "Seja bem-vindo ao Livrertido",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
        <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>Novo Template</title>
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
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
        <!--<![endif]-->
        <style type="text/css">
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
        padding:15px 40px 15px 40px!important;
        }
        [data-ogsb] .es-button.es-button-1 {
        padding:15px 40px!important;
        }
        @media only screen and (max-width:600px), screen and (max-device-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
        </style>
        </head>
        <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
        <div class="es-wrapper-color" style="background-color:#1A1A20">
        <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#1a1a20"></v:fill>
        </v:background>
        <![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#1A1A20">
        <tr>
        <td valign="top" style="padding:0;Margin:0">
        <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
        <tr>
        <td align="center" style="padding:0;Margin:0">
        <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#0A0520;width:600px">
        <tr>
        <td align="left" bgcolor="#1a1a20" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-color:#1a1a20">
        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/73011627469278176.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="32"></td>
        </tr>
        </table></td>
        </tr>
        </table></td>
        </tr>
        <tr>
        <td align="left" bgcolor="#151519" style="padding:0;Margin:0;background-color:#151519">
        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="left" style="padding:0;Margin:0;width:600px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#010101" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101" role="presentation">
        <tr>
        <td style="padding:0;Margin:0">
        <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr class="links">
        <td align="center" valign="top" width="33.33%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:20px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Orbitron, sans-serif;color:#a87d3d;font-size:14px;font-weight:bold">SHOP</a></td>
        <td align="center" valign="top" width="33.33%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:20px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Orbitron, sans-serif;color:#a87d3d;font-size:14px;font-weight:bold">NEW</a></td>
        <td align="center" valign="top" width="33.33%" id="esd-menu-id-2" bgcolor="#131107" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:20px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Orbitron, sans-serif;color:#a87d3d;font-size:14px;font-weight:bold">SALE</a></td>
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
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
        <tr>
        <td align="center" style="padding:0;Margin:0">
        <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#16151b;border-top:1px solid #130e0e;border-right:1px solid #130e0e;border-left:1px solid #130e0e;width:600px;border-bottom:1px solid #130e0e" cellspacing="0" cellpadding="0" bgcolor="#16151b" align="center">
        <tr>
        <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px">
        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:558px">
        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="left" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:40px;font-style:normal;font-weight:normal;color:#EFEFEF">LAST CHANCE TO SHOP</h1></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/92681627469415389.png" alt="Black Friday" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="300" title="Black Friday"></a></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><h1 style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:40px;font-style:normal;font-weight:normal;color:#EFEFEF">DEALS</h1></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px 15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SEE ALL OFFERS</a></span></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/6821627470647900.gif" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="500"></td>
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
        <td align="left" style="padding:0;Margin:0;padding-top:30px;padding-bottom:30px">
        <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:600px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:286px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
        <tr>
        <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:286px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#16151b" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:1px solid #130e0e;border-right:1px solid #130e0e;border-top:1px solid #130e0e;border-bottom:1px solid #130e0e;background-color:#16151b" role="presentation">
        <tr>
        <td align="center" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img p_image" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/14681627471658201.png" alt="GAMING LAPTOP " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="244" title="GAMING LAPTOP "></a></td>
        </tr>
        <tr>
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#EFEFEF"><strong class="p_name">SAVE $ 50</strong>&nbsp;On Apple</h3></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;color:#efefef" class="p_price">$ 499</h4></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px 15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td><td dir="ltr" style="width:30px"></td><td dir="ltr" style="width:284px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:284px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#16151b" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:1px solid #130e0e;border-right:1px solid #130e0e;border-top:1px solid #130e0e;border-bottom:1px solid #130e0e;background-color:#16151b" role="presentation">
        <tr>
        <td align="center" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img p_image" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/59451627471684400.png" alt="GAMING LAPTOP " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="242" title="GAMING LAPTOP "></a></td>
        </tr>
        <tr>
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#EFEFEF"><strong class="p_name">SAVE $ 70</strong>&nbsp;On Go Pro</h3></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;color:#efefef" class="p_price">$ 399</h4></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td></tr></table></table><![endif]--></td>
        </tr>
        <tr>
        <td align="left" style="padding:0;Margin:0;padding-bottom:30px">
        <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:600px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:286px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
        <tr>
        <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:286px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#16151b" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:1px solid #130e0e;border-right:1px solid #130e0e;border-top:1px solid #130e0e;border-bottom:1px solid #130e0e;background-color:#16151b" role="presentation">
        <tr>
        <td align="center" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img p_image" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/55381627471658197.png" alt="GAMING LAPTOP " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="244" title="GAMING LAPTOP "></a></td>
        </tr>
        <tr>
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#EFEFEF"><strong class="p_name">SAVE $50</strong>&nbsp;On Marshall</h3></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;color:#efefef" class="p_price">$ 455</h4></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px 15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td><td dir="ltr" style="width:30px"></td><td dir="ltr" style="width:284px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:284px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#16151b" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:1px solid #130e0e;border-right:1px solid #130e0e;border-top:1px solid #130e0e;border-bottom:1px solid #130e0e;background-color:#16151b" role="presentation">
        <tr>
        <td align="center" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img p_image" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/84961627471873725.png" alt="GAMING LAPTOP " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="242" title="GAMING LAPTOP "></a></td>
        </tr>
        <tr>
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#EFEFEF"><strong class="p_name">SAVE $ 80</strong>&nbsp;On Apple</h3></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;color:#efefef" class="p_price">$ 555</h4></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px 15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td></tr></table></table><![endif]--></td>
        </tr>
        <tr>
        <td align="left" style="padding:0;Margin:0;padding-bottom:30px">
        <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:600px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:286px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
        <tr>
        <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:286px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#16151b" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:1px solid #130e0e;border-right:1px solid #130e0e;border-top:1px solid #130e0e;border-bottom:1px solid #130e0e;background-color:#16151b" role="presentation">
        <tr>
        <td align="center" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img p_image" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/64371627471658347.png" alt="GAMING LAPTOP " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="244" title="GAMING LAPTOP "></a></td>
        </tr>
        <tr>
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#EFEFEF"><strong class="p_name">SAVE 80$</strong> On Apple</h3></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;color:#efefef" class="p_price">$555</h4></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px 15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td><td dir="ltr" style="width:30px"></td><td dir="ltr" style="width:284px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:284px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#16151b" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:1px solid #130e0e;border-right:1px solid #130e0e;border-top:1px solid #130e0e;border-bottom:1px solid #130e0e;background-color:#16151b" role="presentation">
        <tr>
        <td align="center" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img class="adapt-img p_image" src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/14331627471658197.png" alt="GAMING LAPTOP " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="242" title="GAMING LAPTOP "></a></td>
        </tr>
        <tr>
        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#EFEFEF"><strong class="p_name">SAVE 80$</strong> On Apple</h3></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;color:#efefef" class="p_price">$555</h4></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#FC7DF7;background:#A87D3D;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#EFEFEF;font-size:18px;border-style:solid;border-color:#A87D3D;border-width:15px 40px 15px 40px;display:inline-block;background:#A87D3D;border-radius:5px;font-family:Orbitron, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">SHOP NOW</a></span></td>
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
        <td align="center" style="padding:0;Margin:0">
        <table bgcolor="#16151b" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#16151b;border-top:1px solid #130e0e;border-right:1px solid #130e0e;border-left:1px solid #130e0e;width:600px;border-bottom:1px solid #130e0e">
        <tr>
        <td align="left" style="Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:30px">
        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:558px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:Orbitron, sans-serif;font-size:40px;font-style:normal;font-weight:normal;color:#EFEFEF">Shop with confidence</h1></td>
        </tr>
        </table></td>
        </tr>
        </table></td>
        </tr>
        <tr>
        <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:30px">
        <!--[if mso]><table style="width:558px" cellpadding="0" cellspacing="0"><tr><td style="width:193px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
        <tr>
        <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:8px;background-color:#2f2207" bgcolor="#2f2207" role="presentation">
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:15px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/88261627472359993.png" alt="FREE SHIPPING" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="FREE SHIPPING" height="40"></a></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#EFEFEF;font-size:14px">FREE SHIPPING</p></td>
        </tr>
        </table></td>
        <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
        </tr>
        </table>
        <!--[if mso]></td><td style="width:172px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
        <tr>
        <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:172px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#2f2207" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#2f2207;border-radius:8px" role="presentation">
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:15px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/75641627472359900.png" alt="30-DAY RETURNS" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="40" title="30-DAY RETURNS"></a></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#EFEFEF;font-size:14px">30-DAY RETURNS</p></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
        <tr>
        <td align="center" style="padding:0;Margin:0;width:173px">
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#2f2207" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#2f2207;border-radius:8px" role="presentation">
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:15px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/30701627472360057.png" alt="1-YEAR WARRANTY" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="40" title="1-YEAR WARRANTY"></a></td>
        </tr>
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#EFEFEF;font-size:14px">1-YEAR WARRANTY</p></td>
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
        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
        <tr>
        <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:30px">
        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img src="https://pzafrs.stripocdn.email/content/guids/CABINET_1d2b9a04ff17d1d0c000509d8b5fcf6f/images/73011627469278176.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="30" title="Logo"></a></td>
        </tr>
        </table></td>
        </tr>
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td style="padding:0;Margin:0">
        <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr class="links">
        <td align="center" valign="top" width="33.33%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Orbitron, sans-serif;color:#a87d3d;font-size:14px;font-weight:normal">Account</a></td>
        <td align="center" valign="top" width="33.33%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Orbitron, sans-serif;color:#a87d3d;font-size:14px;font-weight:normal">Terms of use</a></td>
        <td align="center" valign="top" width="33.33%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:Orbitron, sans-serif;color:#a87d3d;font-size:14px;font-weight:normal">Privacy police </a></td>
        </tr>
        </table></td>
        </tr>
        </table></td>
        </tr>
        </table></td>
        </tr>
        <tr>
        <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:30px">
        <!--[if mso]><table style="width:560px" cellpadding="0"
        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
        <tr>
        <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px">No longer want to review this email?&nbsp;<br><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#a87d3d;font-size:14px">Unsubscribe</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#a87d3d;font-size:14px">View in your browser</a></p></td>
        </tr>
        </table></td>
        </tr>
        </table>
        <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
        <tr>
        <td align="left" style="padding:0;Margin:0;width:270px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;font-size:0">
        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img title="Facebook" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
        <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img title="Twitter" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
        <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img title="Instagram" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
        <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D0499F;font-size:14px"><img title="Youtube" src="https://pzafrs.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
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
        <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
        <tr>
        <td align="center" style="padding:0;Margin:0">
        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
        <tr>
        <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="left" style="padding:0;Margin:0;width:560px">
        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
        <tr>
        <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=gadget_15&utm_content=last_chance" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://pzafrs.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
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


{/* <img src="https://github.com/italo-rodrigues1/Gamaxp-Final-Front/blob/main/src/img/logo_home.png" style="align-center"/>
        <h1>Obrigado por se cadastrar na nossa newsletter, ${emailNome}.</h1>
                <h3>Em breve teremos mais novidades.</h3> */}