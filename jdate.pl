#!/usr/bin/perl

use strict;
use warnings;

sub jdate {
    my $date=`date +'%m.%d.%Y'`; #save STDOUT of date in var
    $date =~ s/
        0?([1-9]?[0-9]) #month don't match first zero: '02' -> '2'
        \.
        0?([1-9]?[0-9]) #day of month
        \.
        (\d{4}) #year
    /$1.$2.$3/x;
    return $date;
}

print jdate;
