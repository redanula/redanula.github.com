"undefined"!=typeof DUOSHUO?hook_duoshuo_templates():$('[src="http://static.duoshuo.com/embed.js"]')[0].onload=hook_duoshuo_templates;var is_hook_duoshuo=!1;function hook_duoshuo_templates(){if(!is_hook_duoshuo){is_hook_duoshuo=!0;var t=DUOSHUO.templates.post;DUOSHUO.templates.post=function(o,s){var e,a=t(o,s);e="undefined"!=typeof duoshuo_user_ID&&o.post.author.user_id&&o.post.author.user_id==duoshuo_user_ID?'<span class="this_ua admin">博主</span>':"";var u=o.post.agent;return u&&/^Mozilla/.test(u)&&(a=a.replace(/<\/div><p>/,e+show_ua(u)+"</div><p>")),a}}}function show_ua(o){$.ua.set(o);var s=$.ua;return"x86_64"==s.os.version&&(s.os.version="x64"),'<span class="this_ua platform '+s.os.name+'">'+s.os.name+" "+s.os.version+'</span><span class="this_ua browser '+s.browser.name+'">'+s.browser.name+" | "+s.browser.version+"</span>"}