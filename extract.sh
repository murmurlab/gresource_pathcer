#!/bin/sh

workdir=${PWD}

if [ ! -d ${workdir}/files ]; then
  mkdir -p ${workdir}/files
fi

gst=$1

for r in `gresource list $gst`; do
	w=${r#\/}
	
	mkdir -p "files/${w%/*}"
        gresource extract $gst $r > $workdir/files/${r#\/}
done
