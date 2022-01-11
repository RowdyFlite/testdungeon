@echo off
set LOGFILE=..\\build\\build.log
call :LOG > %LOGFILE%
exit /B

:LOG
set destination=..\\build\\TestDungeon.html
set source=..\\story
echo %destination%
if exist %destination% (
	echo Deleting old version.
	del %destination%
)

tweego.exe ^
-o %destination% ^
%source%

if exist %destination% (
	echo Success! Opening.
	start %destination%
) else (
	echo Build failed.
	PAUSE
)
