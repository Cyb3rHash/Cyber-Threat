#!/bin/bash

zokrates compile -i threat_check.zok
zokrates setup -s g16
zokrates compute-witness -a 5 -b 25
zokrates generate-proof
zokrates export-verifier
