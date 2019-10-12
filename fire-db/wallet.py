{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c100000\c100000\c100000;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
curl -X "POST" "https://api.sandbox.hyperwallet.com/rest/v3/users" \\\
   -u restapiuser@23373551615:Zxcvb12345\
\'a0 \\\
   -H "Content-Type: application/json" \\\
   -H "Accept: application/json" \\\
   -d '\{ \
      "profileType": "INDIVIDUAL",\
      "programToken": "prg-0dc976a1-ce7f-43a6-9e2b-bff8afbe97e8"\
   \}'\
}