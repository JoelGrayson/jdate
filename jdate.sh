#!/bin/bash

jdate() {
    dayOfMonth=$(($(date +'%d')))
    month=$(($(date +'%m')))
    fullYear="$(date +'%Y')" #four chars long
    year="${fullYear:2:4}" #last two chars (2021 -> 21)

    echo "$month.$dayOfMonth.$year"
}

jdate
