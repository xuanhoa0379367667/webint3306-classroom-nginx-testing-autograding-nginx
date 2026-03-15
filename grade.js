#!/usr/bin/env node
const fs=require('fs'),path=require('path'),R=path.resolve(__dirname),D=s=>Buffer.from(s,'base64').toString(),_=D('V2VsY29tZSB0byBCdWxsZXRpbiE='),__=D('U3VjY2VzcyEgVGhlIEJ1bGxldGluIGJsb2NrIGlzIHdvcmtpbmch'),___=D('RHluYW1pYyBQSFAgcGFnZSBmcm9tIEJ1bGxldGluIQ=='),$=D('V2VsY29tZSB0byBIUk0h'),$$=D('U3VjY2VzcyEgVGhlIEhSTSBibG9jayBpcyB3b3JraW5nIQ=='),$$$=D('RHluYW1pYyBQSFAgcGFnZSBmcm9tIEhSTSE='),X=D('QnVsbGV0aW4=');
function r(f){const p=path.join(R,f);if(!fs.existsSync(p))return null;return fs.readFileSync(p,'utf8').replace(/\r\n/g,'\n').replace(/\r/g,'\n');}
function P(n){console.log('[PASS] '+n);return true;}
function F(n,m){console.log('[FAIL] '+n+': '+m);return false;}
let ok=true;
const Fs=['sites/bulletin.any.com.vn/index.htm','sites/bulletin.any.com.vn/test.php','sites/hrm.any.com.vn/index.htm','sites/hrm.any.com.vn/test.php','nginx-config/bulletin.any.com.vn.conf','nginx-config/hrm.any.com.vn.conf'];
if(!Fs.every(f=>fs.existsSync(path.join(R,f)))){Fs.forEach(f=>{if(!fs.existsSync(path.join(R,f)))F('File existence','Missing: '+f);});ok=false;}else P('File existence');
const bI=r('sites/bulletin.any.com.vn/index.htm');
if(!bI){F('Bulletin index.htm','File not found or unreadable');ok=false;}else if(!bI.includes(_)){F('Bulletin index.htm','Title must be exactly as required (check spelling and case)');ok=false;}else if(!bI.includes(__)){F('Bulletin index.htm','Body must contain the exact required text');ok=false;}else P('Bulletin index.htm');
const bP=r('sites/bulletin.any.com.vn/test.php');
if(!bP){F('Bulletin test.php','File not found or unreadable');ok=false;}else if(!bP.includes(___)){F('Bulletin test.php','Must output the exact required string (check spelling and case)');ok=false;}else P('Bulletin test.php');
const hI=r('sites/hrm.any.com.vn/index.htm');
if(!hI){F('HRM index.htm','File not found or unreadable');ok=false;}else if(!hI.includes($)){F('HRM index.htm','Title must be exactly as required');ok=false;}else if(!hI.includes($$)){F('HRM index.htm','Body must contain the exact required text');ok=false;}else P('HRM index.htm');
const hP=r('sites/hrm.any.com.vn/test.php');
if(!hP){F('HRM test.php','File not found or unreadable');ok=false;}else if(!hP.includes($$$)){F('HRM test.php','Must output the exact required string');ok=false;}else P('HRM test.php');
if(hI&&hI.includes(X)){F('HRM content','HRM pages must not contain the word for the other site');ok=false;}else if(hP&&hP.includes(X)){F('HRM content','HRM pages must not contain the word for the other site');ok=false;}else if(hI&&hP)P('HRM content (no Bulletin)');
const cB=r('nginx-config/bulletin.any.com.vn.conf');
if(!cB){F('Nginx bulletin config','File not found or unreadable');ok=false;}else{const c=cB;if(!/server_name\s+bulletin\.any\.com\.vn\s*;/.test(c)){F('Nginx bulletin config','Must have server_name bulletin.any.com.vn;');ok=false;}else if(!/root\s+\/var\/www\/bulletin\.any\.com\.vn\s*;/.test(c)){F('Nginx bulletin config','Must have root /var/www/bulletin.any.com.vn;');ok=false;}else if(!/location\s+~\s*\\\.php\$/.test(c)){F('Nginx bulletin config','Must have location ~ \\.php$ block');ok=false;}else if(!/fastcgi_pass\s+unix:/.test(c)){F('Nginx bulletin config','Must use fastcgi_pass unix:... (not 127.0.0.1:9000)');ok=false;}else if(!/include\s+snippets\/fastcgi-php\.conf/.test(c)){F('Nginx bulletin config','Must include snippets/fastcgi-php.conf');ok=false;}else if(!/index\s+.*index\.php/.test(c)){F('Nginx bulletin config','index directive must include index.php');ok=false;}else P('Nginx bulletin config');}
const cH=r('nginx-config/hrm.any.com.vn.conf');
if(!cH){F('Nginx HRM config','File not found or unreadable');ok=false;}else{const c=cH;if(!/server_name\s+hrm\.any\.com\.vn\s*;/.test(c)){F('Nginx HRM config','Must have server_name hrm.any.com.vn;');ok=false;}else if(!/root\s+\/var\/www\/hrm\.any\.com\.vn\s*;/.test(c)){F('Nginx HRM config','Must have root /var/www/hrm.any.com.vn;');ok=false;}else if(!/location\s+~\s*\\\.php\$/.test(c)){F('Nginx HRM config','Must have location ~ \\.php$ block');ok=false;}else if(!/fastcgi_pass\s+unix:/.test(c)){F('Nginx HRM config','Must use fastcgi_pass unix:... (not 127.0.0.1:9000)');ok=false;}else if(!/include\s+snippets\/fastcgi-php\.conf/.test(c)){F('Nginx HRM config','Must include snippets/fastcgi-php.conf');ok=false;}else if(!/index\s+.*index\.php/.test(c)){F('Nginx HRM config','index directive must include index.php');ok=false;}else P('Nginx HRM config');}
if(!ok)process.exit(1);
console.log('\nAll tests passed.');
process.exit(0);
