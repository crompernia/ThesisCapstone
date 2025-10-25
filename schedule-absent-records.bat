@echo off
REM Batch script to schedule the mark-absent-records script to run daily at 10 PM
REM This script creates a scheduled task using Windows Task Scheduler

REM Get the current directory
set "CURRENT_DIR=%~dp0"

REM Create the scheduled task
schtasks /create /tn "MarkAbsentRecords" /tr "cmd /c cd /d \"%CURRENT_DIR%\" && npm run attendance:mark-absent" /sc daily /st 23:59 /f

echo Scheduled task "MarkAbsentRecords" created to run daily at 11:59 PM.
echo You can view/edit this task in Windows Task Scheduler.
pause