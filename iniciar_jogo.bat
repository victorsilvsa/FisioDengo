@echo off
title FisioDengo - Fisiologia Humana
echo =======================================================
echo          FISIODENGO - FISIOLOGIA HUMANA
echo =======================================================
echo Iniciando servidor local e abrindo o jogo no navegador...
echo.
start "" http://localhost:8000
python -m http.server 8000
pause
