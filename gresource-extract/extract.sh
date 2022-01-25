#!/bin/sh

workdir=${PWD}

if [ ! -d ${workdir}/files ]; then
  mkdir -p ${workdir}/files
fi

gst=~/.themes/Mojave-dark-solid-alt/gtk-3.0/gtk.gresource

for r in `gresource list $gst`; do
	w=${r#\/}
	
	mkdir -p "files/${w%/*}"
        gresource extract $gst $r > $workdir/files/${r#\/}
done
