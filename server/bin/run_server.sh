#!/bin/bash
source venv/bin/activate

uvicorn main:app --reload --port 5099

deactivate