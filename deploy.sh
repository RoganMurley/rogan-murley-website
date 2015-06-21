#!/bin/bash
grunt build
appcfg.py update . --no_cookies
grunt clean:build
