set dest_folder=..\\build
set destination=%dest_folder%\\index.html
set source=..\\story\\src
set logfile=..\\build\\build_log.txt

:: delete old build artifacts
if exist %dest_folder% (
	echo Cleaning build folder.
	del /s /q %dest_folder%
)

mkdir %dest_folder%

::set up logging
@echo off
call :LOG > %logfile%
exit /B

:LOG
::tweego build
tweego.exe ^
-t ^
-o %destination% ^
%source%

::tweego build
if exist %destination% (
	echo Success! Opening.
	start %destination%
) else (
	echo Build failed.
	echo See log at %logfile%
	PAUSE
)